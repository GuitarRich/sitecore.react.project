using System.Web.Mvc;
using Glass.Mapper.Sc;
using Sitecore.Exceptions;
using Sitecore.Foundation.Orm.Model;
using Sitecore.Foundation.Web.Context;
using Sitecore.React.Mvc.Controllers;
using Sitecore.Feature.Navigation.Repositories;
using Sitecore.Feature.Navigation.Model;
using Sitecore.Mvc.Presentation;

namespace Sitecore.Feature.Navigation.Controllers
{
    public class NavigationController : Controller
    {
        private readonly IContentContext _context;
        private readonly ISitecoreContext _scContext;
        private readonly IPropertyBuilder _builder;
        private readonly INavigationRepository _navigationRepository;

        public NavigationController(IContentContext context, ISitecoreContext scContext, IPropertyBuilder builder, INavigationRepository navigationRepository)
        {
            _context = context;
            _scContext = scContext;
            _builder = builder;
            _navigationRepository = navigationRepository;
            (_navigationRepository as NavigationRepository).Initialize(RenderingContext.Current.ContextItem);
        }

        public ActionResult PrimaryMenu()
        {
            var items = this._navigationRepository.GetPrimaryMenu();
            return this.React("PrimaryMenu", items);
        }

        public ActionResult SecondaryMenu()
        {
            var item = this._navigationRepository.GetSecondaryMenuItem();
            return this.React("SecondaryMenu", item);
        }

        public ActionResult NavigationLinks()
        {
            if (string.IsNullOrEmpty(RenderingContext.Current.Rendering.DataSource))
            {
                return null;
            }
            var item = RenderingContext.Current.Rendering.Item;
            var items = this._navigationRepository.GetLinkMenuItems(item);
            return this.React("ActivityNavigation", items);
        }

        public ActionResult LinkMenu()
        {
            var item = RenderingContext.Current.Rendering.Item;
            var items = this._navigationRepository.GetLinkMenuItems(item);
            // Hack for demo
            if (item.Name.Contains("Social"))
            {
                items.IsSocial = true;
            }

            return this.React("LinkMenu", items);
        }
    }
}