using MediatR;
using online_shop.Application.DTOs.Account;
using online_shop.Application.Responses;

namespace online_shop.Application.Features.Users.Requests.Commands
{
    public class VerfiyAccountCommand:IRequest<BaseCommandResponse<object>>
    {
        public VerfiyAccountDTO VerfiyAccountDTO{ get; set; }
    }
}
