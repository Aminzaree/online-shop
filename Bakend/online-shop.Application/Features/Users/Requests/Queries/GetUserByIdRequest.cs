using MediatR;
using online_shop.Domain.User;

namespace online_shop.Application.Features.Users.Requests.Queries
{
    public class GetUserByIdRequest:IRequest<User?>
    {
        public Guid UserId { get; set; }
    }
}
