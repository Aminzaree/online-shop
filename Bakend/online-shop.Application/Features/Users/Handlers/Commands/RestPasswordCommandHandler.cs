using MediatR;
using online_shop.Application.Contracts.Infrastructure;
using online_shop.Application.Contracts.Persistence;
using online_shop.Application.DTOs.Account.Validators;
using online_shop.Application.Extensions;
using online_shop.Application.Features.Users.Requests.Commands;
using online_shop.Application.Models.Email;
using online_shop.Application.Responses;
using online_shop.Application.Utilities.Converts;
using online_shop.Application.Utilities.Generator;
using online_shop.Application.Utilities.Security.PasswordHelper;

namespace online_shop.Application.Features.Users.Handlers.Commands
{
    public class RestPasswordCommandHandler : IRequestHandler<RestPasswordCommand, BaseCommandResponse>
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHelper _passwordHelper;


        public RestPasswordCommandHandler(IUserRepository userRepository, IPasswordHelper passwordHelper)
        {
            _userRepository = userRepository;
            _passwordHelper = passwordHelper;
        }

        public async Task<BaseCommandResponse> Handle(RestPasswordCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse<List<string>>();
            var validator = new RestPasswordDtoValidator();
            var validatorResult = await validator.ValidateAsync(request.RestPasswordDTO);
            if (validatorResult.IsValid)
            {
                var user = await _userRepository.GetUserByEmailCodeAsync(request.RestPasswordDTO.Code);
                if (user is not null)
                {
                    user.ActiveCodeEmail = null;
                    user.Password=_passwordHelper.EncodePassword(request.RestPasswordDTO.Password);
                    _userRepository.Update(user);

                    response.IsSuccess = true;
                    response.Message = "کلمه عبور با موفقیت عوض شد";                   
                }
                else
                {
                    response.IsSuccess = false;
                    response.Message = "کاربر مورد نظر یافت نشد";
                }
            }
            else
            {
                response.IsSuccess = false;
                response.Value = validatorResult.GetErrors();
            }

           

            return response;
           

        }
    }
}
