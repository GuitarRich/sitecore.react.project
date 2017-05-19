using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;
using Sitecore.Foundation.Orm.Model;

namespace Sitecore.Feature.Identity.Model
{
    public interface ILogo : IContentBase
    {
        [SitecoreField]
        Image Logo { get; set; }

        [SitecoreField]
        string LogoTagline { get; set; }
    }
}
