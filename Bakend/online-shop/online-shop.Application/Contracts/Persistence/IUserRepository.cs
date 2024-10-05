using online_shop.Domain.User;

namespace online_shop.Application.Contracts.Persistence
{
    public interface IUserRepository:IGenericRepository<User> 
    {
        Task<bool> ExistsEmail(string email);
        Task<User?> FindUserAsync(string password,string email);
    }
}
