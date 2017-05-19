using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sitecore.Feature.Navigation.Model
{
    public class NavigationItems
    {
        public IList<NavigationItem> Items { get; set; }
        public bool IsSocial { get; set; }
    }
}