using Glass.Mapper.Sc.Configuration.Attributes;
using Sitecore.Foundation.Orm.Model;
using System.Collections.Generic;

namespace Sitecore.Feature.Navigation.Model
{
    public interface INavigable : IContentBase
    {
        [SitecoreField]
        bool ShowChildren { get; set; }

        [SitecoreField]
        string NavigatinTitle { get; set; }

        [SitecoreField]
        bool ShowInNavigation { get; set; }

        [SitecoreChildren(IsLazy = false)]
        IEnumerable<INavigable> Children { get; set; }

        [SitecoreParent]
        INavigable Parent { get; set; }
    }
}