using System.Web.Mvc;
using Glass.Mapper.Sc;
using Sitecore.Exceptions;
using Sitecore.Feature.Identity.Model;
using Sitecore.Foundation.Web.Context;
using Sitecore.React.Mvc.Controllers;
using Sitecore.Foundation.Orm.Model;

namespace Sitecore.Feature.Identity.Controllers
{
    public class IdentityController : Controller
    {
        private readonly IContentContext _context;
        private readonly ISitecoreContext _scContext;
        private readonly IPropertyBuilder _builder;

        public IdentityController(IContentContext context, ISitecoreContext scContext, IPropertyBuilder builder)
        {
            _context = context;
            _scContext = scContext;
            _builder = builder;
        }

        public ActionResult Logo()
        {
            var siteRoot = _scContext.GetRootItem<ILogo>();
            if (siteRoot == null)
            {
                throw new ItemNotFoundException("Site Root Not Found");
            }

            var model = new LogoViewModel
            {
                LogoImage = _builder.BuildImage(siteRoot, item => item.Logo).ToString(),
                HomeUrl = "/"
            };

            return this.React("Logo", model);
        }
    }
}