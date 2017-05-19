namespace Sitecore.Feature.Navigation.Repositories
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Sitecore.Data.Items;
    using Sitecore.Feature.Navigation.Model;
    using Sitecore.Foundation.Orm.Model;
    using Sitecore.Foundation.Web.Context;
    using Glass.Mapper.Sc;
    using Sitecore.Foundation.Web.Extensions;

    public class NavigationRepository : INavigationRepository
    {
        public Item ContextItem { get; set; }
        public Item NavigationRoot { get; set; }

        public void Initialize(Item contextItem)
        {
            this.ContextItem = contextItem;
            this.NavigationRoot = this.GetNavigationRoot(this.ContextItem);
            if (this.NavigationRoot == null)
            {
                throw new InvalidOperationException($"Cannot determine navigation root from '{this.ContextItem.Paths.FullPath}'");
            }
        }

        public Item GetNavigationRoot(Item contextItem)
        {
            return contextItem.GetAncestorOrSelfOfTemplate(Templates.NavigationRoot.ID) ?? Context.Site.GetContextItem(Templates.NavigationRoot.ID);
        }

        public NavigationItems GetBreadcrumb()
        {
            var items = new NavigationItems
            {
                Items = this.GetNavigationHierarchy(true).Reverse().ToList()
            };

            for (var i = 0; i < items.Items.Count - 1; i++)
            {
                items.Items[i].Level = i;
                items.Items[i].IsActive = i == items.Items.Count - 1;
            }

            return items;
        }

        public NavigationItems GetPrimaryMenu()
        {
            var navItems = this.GetChildNavigationItems(this.NavigationRoot, 0, 1);

            this.AddRootToPrimaryMenu(navItems);
            return navItems;
        }

        private void AddRootToPrimaryMenu(NavigationItems navItems)
        {
            if (!this.IncludeInNavigation(this.NavigationRoot))
            {
                return;
            }

            var navigationItem = this.CreateNavigationItem(this.NavigationRoot, 0, 0);
            //Root navigation item is only active when we are actually on the root item
            navigationItem.IsActive = this.ContextItem.ID == this.NavigationRoot.ID;
            navItems?.Items?.Insert(0, navigationItem);
        }

        private bool IncludeInNavigation(Item item, bool forceShowInMenu = false)
        {
            return item.HasContextLanguage() && item.IsDerived(Templates.Navigable.ID) && (forceShowInMenu || MainUtil.GetBool(item[Templates.Navigable.Fields.ShowInNavigation], false));
        }

        public NavigationItem GetSecondaryMenuItem()
        {
            var rootItem = this.GetSecondaryMenuRoot();
            return rootItem == null ? null : this.CreateNavigationItem(rootItem, 0, 3);
        }

        public NavigationItems GetLinkMenuItems(Item menuRoot)
        {
            if (menuRoot == null)
            {
                throw new ArgumentNullException(nameof(menuRoot));
            }
            return this.GetChildNavigationItems(menuRoot, 0, 0);
        }

        private Item GetSecondaryMenuRoot()
        {
            return this.FindActivePrimaryMenuItem();
        }

        private Item FindActivePrimaryMenuItem()
        {
            var primaryMenuItems = this.GetPrimaryMenu();
            //Find the active primary menu item
            var activePrimaryMenuItem = primaryMenuItems.Items.FirstOrDefault(i => i.Item.ID != this.NavigationRoot.ID && i.IsActive);
            return activePrimaryMenuItem?.Item;
        }

        private IEnumerable<NavigationItem> GetNavigationHierarchy(bool forceShowInMenu = false)
        {
            var item = this.ContextItem;
            while (item != null)
            {
                if (this.IncludeInNavigation(item, forceShowInMenu))
                {
                    yield return this.CreateNavigationItem(item, 0);
                }

                item = item.Parent;
            }
        }

        private NavigationItem CreateNavigationItem(Item item, int level, int maxLevel = -1)
        {
            var targetItem = item.IsDerived(Templates.Link.ID) ? item.TargetItem(Templates.Link.Fields.Link) : item;

            bool isLink = item.IsDerived(Templates.Link.ID);

            return new NavigationItem
            {
                Item = item,
                Title = isLink ?
                    item.LinkFieldOptions(Templates.Link.Fields.Link, LinkFieldOption.Text) :
                    item[Templates.Navigable.Fields.NavigationTitle],
                Url = isLink ? item.LinkFieldUrl(Templates.Link.Fields.Link) : item.Url(),
                Target = isLink ? item.LinkFieldTarget(Templates.Link.Fields.Link) : "",
                IsActive = this.IsItemActive(targetItem ?? item),
                Children = this.GetChildNavigationItems(item, level + 1, maxLevel),
                ShowChildren = !item.IsDerived(Templates.Navigable.ID) || item.Fields[Templates.Navigable.Fields.ShowChildren].IsChecked(),
                CssClass = isLink ?
                    item.LinkFieldOptions(Templates.Link.Fields.Link, LinkFieldOption.Class) : string.Empty
            };
        }

        private NavigationItems GetChildNavigationItems(Item parentItem, int level, int maxLevel)
        {
            if (level > maxLevel || !parentItem.HasChildren)
            {
                return new NavigationItems
                {
                    Items = new NavigationItem[0]
                };
            }
            var childItems = parentItem.Children.Where(item => this.IncludeInNavigation(item)).Select(i => this.CreateNavigationItem(i, level, maxLevel));
            return new NavigationItems
            {
                Items = childItems.ToList()
            };
        }

        private bool IsItemActive(Item item)
        {
            return this.ContextItem.ID == item.ID || this.ContextItem.Axes.GetAncestors().Any(a => a.ID == item.ID);
        }
    }
}