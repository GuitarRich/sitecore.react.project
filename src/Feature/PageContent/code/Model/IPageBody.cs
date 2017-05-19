using Glass.Mapper.Sc.Configuration.Attributes;
using Sitecore.Foundation.Orm.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sitecore.Feature.PageContent.Model
{
    public interface IPageBody : IContentBase
    {
        [SitecoreField]
        string Body { get; set; }
    }
}
