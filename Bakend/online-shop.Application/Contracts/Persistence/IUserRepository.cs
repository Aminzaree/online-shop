using online_shop.Domain.User;

namespace online_shop.Application.Contracts.Persistence
{
    public interface IUserRepository:IGenericRepository<User> 
    {
        Task<bool> ExistsEmail(string email);
        Task<User?> FindUserBuEmailAndPasswordAsync(string password,string email);
        Task<User?> GetUserByEmailCodeAsync(string code);
        Task<User?> GetUserByEmailAsync(string email);
    }
}
