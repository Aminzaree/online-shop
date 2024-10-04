using MediatR;
using online_shop.Application.Contracts.Persistence;
using online_shop.Application.Features.Users.Requests.Queries;
using online_shop.Domain.User;

namespace online_shop.Application.Features.Users.Handlers.Queries
{
    public class GetUserByIdRequestHandler : IRequestHandler<GetUserByIdRequest,User?>
    {
        private readonly IUserRepository _userRepository;

        public GetUserByIdRequestHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User?> Handle(GetUserByIdRequest request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetByIdAsync(request.UserId);
            return user;
        }
    }
}
