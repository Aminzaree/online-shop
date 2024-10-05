using online_shop.API.Utilities;

namespace online_shop.API.DependencyContainer
{
    public static class ApiServicesRegistration
    {
        public static void ConfigureApiServices(this IServiceCollection services,IConfiguration configuration)
        {
            services.Configure<AppSetting>(configuration.GetSection("AppSetting"));
        }
    }
}
