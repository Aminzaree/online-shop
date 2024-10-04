using online_shop.Domain.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace online_shop.Application.Contracts.Persistence
{
    public interface IUserRepository:IGenericRepository<User> 
    {
        Task<bool> ExistsEmail(string email);
    }
}
