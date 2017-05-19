using Microsoft.Extensions.DependencyInjection;
using Sitecore.DependencyInjection;
using Sitecore.Feature.Navigation.Repositories;

namespace Sitecore.Feature.Navigation.Services
{
    public class Configurator : IServicesConfigurator
    {
        public void Configure(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<INavigationRepository, NavigationRepository>();
        }
    }
}