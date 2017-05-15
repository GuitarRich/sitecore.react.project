using Microsoft.Extensions.DependencyInjection;
using Sitecore.DependencyInjection;
using Sitecore.Foundation.Web.Context;

namespace Sitecore.Foundation.Web.Services
{
    public class Configurator : IServicesConfigurator
    {
        public void Configure(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IContentContext, ApplicationContext>();
            serviceCollection.AddTransient<IWebContext, ApplicationContext>();
        }
    }
}