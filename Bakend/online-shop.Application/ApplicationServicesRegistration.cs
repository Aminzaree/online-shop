using Microsoft.Extensions.DependencyInjection;
using online_shop.Application.Utilities.Security.PasswordHelper;
using System.Reflection;

namespace online_shop.Application
{
    public static class ApplicationServicesRegistration
    {
        public static void ConfigureAppilcationServices(this IServiceCollection services)
        {
            services.AddAutoMapper(assemblies: Assembly.GetExecutingAssembly());
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(AppDomain.CurrentDomain.GetAssemblies()));
            services.AddScoped<IPasswordHelper, PasswordHelper>();
        }


    }
}
