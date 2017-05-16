using Sitecore.Foundation.Orm.Model;

namespace Sitecore.Feature.PageContent.Model
{
    public interface IPageTitle : IContentBase
    {
        string Title { get; set; }
        string Summary { get; set; }
    }
}
