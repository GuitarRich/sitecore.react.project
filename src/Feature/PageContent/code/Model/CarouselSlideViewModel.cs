using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sitecore.Feature.PageContent.Model
{
    public class CarouselSlideViewModel
    {
        public string ImageUrl { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        public string Active { get; set; }
    }
}