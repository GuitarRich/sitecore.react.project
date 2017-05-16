using Microsoft.Extensions.DependencyInjection;
using Sitecore.DependencyInjection;
using Sitecore.React.SampleProject.Website.Controllers;

namespace Sitecore.React.SampleProject.Website.Services
{
    public class Configurator : IServicesConfigurator
    {
        public void Configure(IServiceCollection serviceCollection)
        {
            // configure all the things from on high by convention? Use this (Habitat as the example):
            //serviceCollection.AddTransient<LayoutController>();
            //serviceCollection.AddTransient<SublayoutsController>();
        }
    }
}