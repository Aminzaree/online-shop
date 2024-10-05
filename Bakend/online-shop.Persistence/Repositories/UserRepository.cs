using Microsoft.EntityFrameworkCore;
using online_shop.Application.Contracts.Persistence;
using online_shop.Domain.User;

namespace online_shop.Persistence.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        private readonly OnlineShopDbContext _context;

        public UserRepository(OnlineShopDbContext context):base(context) 
        {
            _context = context;
        }

        public async Task<bool> ExistsEmail(string email)
        {
           return await _context.Users
                .AnyAsync(u=>u.Email.ToLower()== email.ToLower().Trim());
        }

        public async Task<User?> FindUserAsync(string password, string email)
        {
            return await _context.Users
                 .FirstOrDefaultAsync(u => u.Email == email && u.Password == password);
        }

      
    }
}
