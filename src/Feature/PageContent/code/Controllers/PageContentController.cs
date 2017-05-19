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

        public ActionResult PageBody()
        {
            var pageData = _scContext.GetCurrentItem<IPageBody>();
            var viewModel = new PageBodyViewModel
            {
                Body = _builder.BuildHtmlString(pageData, p => p.Body).ToString()
            };

            return this.React("PageBody", viewModel);
        }

        public ActionResult PageImageHeader()
        {
            var pageData = _scContext.GetCurrentItem<IPageImageHeader>();
            var viewModel = new PageImageHeaderViewModel
            {
                ImageUrl = pageData.Image.Src
            };

            return this.React("PageImageHeader", viewModel);
        }
    }
}