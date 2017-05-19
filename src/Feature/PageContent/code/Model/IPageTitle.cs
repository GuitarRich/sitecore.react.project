using Glass.Mapper.Sc.Configuration.Attributes;
using Sitecore.Foundation.Orm.Model;

namespace Sitecore.Feature.PageContent.Model
{
    public interface IPageTitle : IContentBase
    {
        [SitecoreField]
        string Title { get; set; }
        [SitecoreField]
        string Summary { get; set; }
    }
}
