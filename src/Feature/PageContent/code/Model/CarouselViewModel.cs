using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sitecore.Feature.PageContent.Model
{
    public class CarouselViewModel
    {
        public IEnumerable<CarouselSlideViewModel> Slides { get; set; }
        public string CarouselId { get; set; }

        public bool IsExperienceEditor { get; set; }
    }
}