using Glass.Mapper.Sc.Configuration.Attributes;
using Glass.Mapper.Sc.Fields;
using Sitecore.Foundation.Orm.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sitecore.Feature.PageContent.Model
{
    public interface IMediaImage : IContentBase
    {
        [SitecoreField]
        Image MediaImage { get; set; }

        [SitecoreField]
        string MediaTitle { get; set; }

        [SitecoreField]
        string MediaDescription { get; set; }
    }
}
