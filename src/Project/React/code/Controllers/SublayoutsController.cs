using System.Web.Mvc;
using Sitecore.React.Mvc.Controllers;

namespace Sitecore.React.SampleProject.Website.Controllers
{
    public class SublayoutsController : Controller
    {
        // GET: Layout
        public ActionResult OneColumn()
        {
            return this.React("OneColumn");
        }

        public ActionResult TwoColumn48()
        {
            return this.React("TwoColumn48");
        }

        public ActionResult HeaderTop()
        {
            return this.React("HeaderTop");
        }

        public ActionResult Navbar()
        {
            return this.React("Navbar");
        }

        public ActionResult PageHeader()
        {
            return this.React("PageHeader");
        }

        public ActionResult Section()
        {
            return this.React("Section");
        }
   }
}