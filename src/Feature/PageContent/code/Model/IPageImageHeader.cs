using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;
using Sitecore.Foundation.Orm.Model;

namespace Sitecore.Feature.PageContent.Model
{
    public interface IPageImageHeader : IContentBase
    {
        [SitecoreField("Image")]
        Image Image { get; set; }
    }
}
