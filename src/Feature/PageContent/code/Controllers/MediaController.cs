using System.Web.Mvc;
using Glass.Mapper.Sc;
using Sitecore.Exceptions;
using Sitecore.Feature.PageContent.Model;
using Sitecore.Foundation.Orm.Model;
using Sitecore.Foundation.Web.Context;
using Sitecore.React.Mvc.Controllers;
using System;
using System.Linq;
using Sitecore.Data;

namespace Sitecore.Feature.PageContent.Controllers
{
    public class MediaController : Controller
    {
        private readonly IContentContext _context;
        private readonly ISitecoreContext _scContext;
        private readonly IPropertyBuilder _builder;

        public MediaController(IContentContext context, ISitecoreContext scContext, IPropertyBuilder builder)
        {
            _context = context;
            _scContext = scContext;
            _builder = builder;
        }

        public ActionResult PageHeaderCarousel()
        {
            var pageData = _scContext.GetItem<ICarousel>(_context.DataSource);

            var viewModel = new CarouselViewModel
            {
                CarouselId = CreateShortId(),
                Slides = pageData.MediaSelector.Select(slide => new CarouselSlideViewModel
                {
                    Title = _builder.BuildHtmlString(slide, item => item.MediaTitle).ToString(),
                    Description = _builder.BuildHtmlString(slide, item => item.MediaDescription).ToString(),
                    ImageUrl = slide.MediaImage.Src,
                    Active = ""
                })
            };

            return this.React("PageHeaderCarousel", viewModel);
        }

        public string CreateShortId()
        {
            return ShortID.Encode(Guid.NewGuid());
        }
    }
}