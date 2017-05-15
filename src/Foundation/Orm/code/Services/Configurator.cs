using Glass.Mapper.Sc;
using Microsoft.Extensions.DependencyInjection;
using Sitecore.DependencyInjection;
using Sitecore.Foundation.Orm.Model;

namespace Sitecore.Foundation.Orm.Services
{
    public class Configurator : IServicesConfigurator
    {
        public void Configure(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<ISitecoreContext>(p => new SitecoreContext());
            serviceCollection.AddTransient<IGlassHtml, GlassHtml>();
            serviceCollection.AddTransient<IPropertyBuilder, PropertyBuilder>();
        }
    }
}