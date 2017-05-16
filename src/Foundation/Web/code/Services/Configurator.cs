using Microsoft.Extensions.DependencyInjection;
using Sitecore.DependencyInjection;
using Sitecore.Foundation.Web.Context;
using Sitecore.Foundation.Web.DependencyInjection;

namespace Sitecore.Foundation.Web.Services
{
    public class Configurator : IServicesConfigurator
    {
        public void Configure(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IContentContext, ApplicationContext>();
            serviceCollection.AddTransient<IWebContext, ApplicationContext>();
            serviceCollection.AddMvcControllers(
                "Sitecore.Feature.*",
                "Sitecore.*.Website");
        }
    }
}