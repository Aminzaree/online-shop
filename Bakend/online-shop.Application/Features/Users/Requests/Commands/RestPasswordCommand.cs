using MediatR;
using online_shop.Application.DTOs.Account;
using online_shop.Application.Responses;

namespace online_shop.Application.Features.Users.Requests.Commands
{
    public class RestPasswordCommand:IRequest<BaseCommandResponse>
    {
        public ResetPasswordDTO RestPasswordDTO { get; set; }
    }
}
