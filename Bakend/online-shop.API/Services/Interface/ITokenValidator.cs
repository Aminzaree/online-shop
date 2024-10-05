using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace online_shop.API.Services.Interface
{
    public interface ITokenValidator
    {
        Task Execute(TokenValidatedContext context);
    }
}
