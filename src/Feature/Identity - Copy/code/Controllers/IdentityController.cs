using System.Web.Mvc;
using Glass.Mapper.Sc;
using Sitecore.Exceptions;
using Sitecore.Feature.Identity.Model;
using Sitecore.Foundation.Web.Context;
using Sitecore.React.Mvc.Controllers;

namespace Sitecore.Feature.Identity.Controllers
{
    public class IdentityController : Controller
    {
        private readonly IContentContext _context;
        private readonly ISitecoreContext _scContext;

        public IdentityController(IContentContext context, ISitecoreContext scContext)
        {
            _context = context;
            _scContext = scContext;
        }

        public ActionResult Logo()
        {
            var siteRoot = _scContext.GetRootItem<ILogo>();
            if (siteRoot == null)
            {
                throw new ItemNotFoundException("Site Root Not Found");
            }

            return this.React("logo", siteRoot);
        }
    }
}