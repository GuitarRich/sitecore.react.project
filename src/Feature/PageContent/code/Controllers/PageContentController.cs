using System.Web.Mvc;
using Glass.Mapper.Sc;
using Sitecore.Exceptions;
using Sitecore.Feature.PageContent.Model;
using Sitecore.Foundation.Orm.Model;
using Sitecore.Foundation.Web.Context;
using Sitecore.React.Mvc.Controllers;

namespace Sitecore.Feature.PageContent.Controllers
{
    public class PageContentController : Controller
    {
        private readonly IContentContext _context;
        private readonly ISitecoreContext _scContext;
        private readonly IPropertyBuilder _builder;

        public PageContentController(IContentContext context, ISitecoreContext scContext, IPropertyBuilder builder)
        {
            _context = context;
            _scContext = scContext;
            _builder = builder;
        }

        public ActionResult PageTitle()
        {
            var pageData = _scContext.GetCurrentItem<IPageTitle>();
            var viewModel = new PageTitleViewModel
            {
                Title = _builder.BuildHtmlString(pageData, p => p.Title).ToString(),
                Summary = _builder.BuildHtmlString(pageData, p => p.Summary).ToString()
            };

            return this.React("PageTitle", viewModel);
        }
    }
}