using AutoMapper;
using online_shop.Application.DTOs.Account;
using online_shop.Domain.User;

namespace online_shop.Application.Profiles
{
    public class MapingProfile:Profile
    {
        public MapingProfile()
        {
            #region User

            CreateMap<User,RegisterDTO>().ReverseMap();

            #endregion
        }
    }
}
