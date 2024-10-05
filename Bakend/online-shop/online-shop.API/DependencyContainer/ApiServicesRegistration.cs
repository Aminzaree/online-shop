using online_shop.API.Utilities.Generator;

namespace online_shop.API.DependencyContainer
{
    public static class ApiServicesRegistration
    {
        public static void ConfigureApiServices(this IServiceCollection service,IConfiguration configuration)
        {
            service.Configure<AppSetting>(configuration.GetSection("AppSetting"));
        }
    }
}
