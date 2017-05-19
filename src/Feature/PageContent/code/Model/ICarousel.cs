using Glass.Mapper.Sc.Configuration.Attributes;
using Sitecore.Foundation.Orm.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sitecore.Feature.PageContent.Model
{
    public interface ICarousel : IContentBase
    {
        [SitecoreField]
        IEnumerable<IMediaImage> MediaSelector { get; set; }
    }
}
