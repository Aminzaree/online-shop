using MediatR;
using online_shop.Application.DTOs.Account;
using online_shop.Application.Responses;

namespace online_shop.Application.Features.Users.Requests.Queries
{
    public class PasswordSignInRequest:IRequest<BaseCommandResponse<object>>
    {
        public LoginDTO LoginDTO{ get; set; }
    }
}
