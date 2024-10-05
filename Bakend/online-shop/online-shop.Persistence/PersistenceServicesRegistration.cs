using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using online_shop.Application.Contracts.Persistence;
using online_shop.Persistence.Repositories;

namespace online_shop.Persistence
{
    public static class PersistenceServicesRegistration
    {
        public static IServiceCollection ConfigurePersistenceServices(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddDbContext<OnlineShopDbContext>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("OnlineShopConnectionStrings"));
            });

            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IUserRepository, UserRepository>();



            return services;
        }
    }
}
