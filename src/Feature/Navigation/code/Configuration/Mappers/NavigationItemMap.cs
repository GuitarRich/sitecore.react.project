using Glass.Mapper.Sc.Maps;
using Sitecore.Feature.Navigation.Model;

namespace Sitecore.Feature.Navigation.Configuration.Mappers
{
    public class NavigationItemMap : SitecoreGlassMap<INavigable>
    {
        public override void Configure()
        {
            Map(config =>
            {
                config.AutoMap();
            });
        }
    }
}