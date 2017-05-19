using Newtonsoft.Json;
using Sitecore.Data.Items;

namespace Sitecore.Feature.Navigation.Model
{
    public class NavigationItem
    {
        [JsonIgnore]
        public Item Item { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public bool IsActive { get; set; }
        public int Level { get; set; }
        public NavigationItems Children { get; set; }
        public string Target { get; set; }
        public bool ShowChildren { get; set; }
        public string CssClass { get; set; }
    }
}