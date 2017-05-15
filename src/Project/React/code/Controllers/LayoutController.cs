using System.Web.Mvc;
using Sitecore.React.Mvc.Controllers;

namespace Sitecore.React.SampleProject.Website.Controllers
{
    public class LayoutController : Controller
    {
        // GET: Layout
        public ActionResult Layout()
        {
            return this.React("Layout");
        }
    }
}