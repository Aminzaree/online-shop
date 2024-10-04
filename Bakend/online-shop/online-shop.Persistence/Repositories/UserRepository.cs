using Microsoft.EntityFrameworkCore;
using online_shop.Application.Contracts.Persistence;
using online_shop.Domain.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
                .AnyAsync(u=>u.Email.ToLower().ToLower()== email.ToLower().Trim());
        }
    }
}
