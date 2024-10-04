using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using online_shop.API.Models;
using online_shop.API.Services.Implementation;
using online_shop.API.Services.Interface;
using System.Text;

namespace online_shop.API.DependencyContainer
{
    public static class IdentityServicesRegistration
    {
        public static IServiceCollection ConfigureIdentityServices(this IServiceCollection services, IConfiguration configuration)
        {
            var jwtConfig=configuration.GetSection("JWTConfig").Get<JWTConfi>()?? throw new ArgumentNullException(nameof(JWTConfi));
            services.AddSingleton(jwtConfig);
            services.AddScoped<ITokenServices, TokenServices>();
            services.AddScoped<ITokenValidator, TokenValidator>();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme; ;
                options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme; ;
            }).AddJwtBearer(op =>
            {
                op.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters()
                {
                    ValidateAudience = true,
                    ValidateIssuer = true,
                    ValidateIssuerSigningKey = true,
                    ValidAudience = jwtConfig.Audience,
                    ValidIssuer = jwtConfig.Issuer,
                    ClockSkew = TimeSpan.Zero,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtConfig.Key))
                };
                op.SaveToken = true;
                op.Events = new JwtBearerEvents
                {
                    OnTokenValidated = context =>
                    {
                        var service=context.HttpContext.RequestServices.GetService<ITokenValidator>();
                        return service.Execute(context);
                    }
                };
            });


            return services;
        }        
    }
}
