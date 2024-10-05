using online_shop.Domain.User;

namespace online_shop.API.Services.Interface
{
    public interface ITokenServices
    {
        string CreateToken(User user);
    }
}
