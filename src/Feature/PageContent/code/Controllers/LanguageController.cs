using Glass.Mapper.Sc;
using Sitecore.Feature.PageContent.Model;
using Sitecore.Feature.PageContent.Repositories;
using Sitecore.Foundation.Web.Context;
using Sitecore.Globalization;
using Sitecore.React.Mvc.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sitecore.Feature.PageContent.Controllers
{
    public class LanguageController : Controller
    {

        private readonly IContentContext _context;
        private readonly ISitecoreContext _scContext;

        public LanguageController(IContentContext context, ISitecoreContext scContext)
        {
            _context = context;
            _scContext = scContext;
        }

        public ActionResult LanguageSelector()
        {
            var model = new
            {
                Languages = GetAll()
            };

            return this.React("LangaugeSelector", model);
        }


        private static IEnumerable<LanguageModel> GetAll()
        {
            var languages = Context.Database.GetLanguages();
            return languages.Select(LanguageFactory.Create);
        }
    }
}