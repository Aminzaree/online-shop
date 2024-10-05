using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using online_shop.Application.Contracts.Infrastructure;
using online_shop.Application.Models.Email.Email;
using online_shop.Infrastructure.Email;

namespace online_shop.Infrastructure
{
    public static class InfrastructureServicesRegistration
    {
        public static IServiceCollection ConfigureInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<EmailConfig>(configuration.GetSection("EmailConfig"));
            services.AddTransient<IEmailSender, EmailSender>();
            return services;
        }
    }
}
