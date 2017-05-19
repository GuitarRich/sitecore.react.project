using Sitecore.React.Mvc.Controllers;
using System.Web.Mvc;

namespace Sitecore.Feature.PageContent.Controllers
{
    public class SearchController : Controller
    {
        public ActionResult GlobalSearch()
        {
            return this.React("GlobalSearch", new { SearchBoxTitle = "Enter your search...", SearchResultsUrl = "/search" });
        }
    }
}