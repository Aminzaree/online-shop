using MediatR;
using online_shop.Application.Contracts.Persistence;
using online_shop.Application.DTOs.Account.Validators;
using online_shop.Application.Features.Users.Requests.Queries;
using online_shop.Application.Responses;
using online_shop.Application.Utilities.Security.PasswordHelper;

namespace online_shop.Application.Features.Users.Handlers.Queries
{
    public class PasswordSignInRequestHandler : IRequestHandler<PasswordSignInRequest, BaseCommandResponse<object>>
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHelper _passwordHelper;

        public PasswordSignInRequestHandler(IUserRepository userRepository, IPasswordHelper passwordHelper = null)
        {
            _userRepository = userRepository;
            _passwordHelper = passwordHelper;
        }

        public async Task<BaseCommandResponse<object>> Handle(PasswordSignInRequest request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse<object>(); 
           var validator=new LoginDtoValidator();
            var validatorResult = await validator.ValidateAsync(request.LoginDTO);
            if (validatorResult.IsValid == false)
            {
                response.IsSuccess = false;
                response.Message = "اطلاعات را صحیح وارد کنید";
                response.Value=validatorResult.Errors.Select(x => x.ErrorMessage).ToList();
            }
            else
            {
                string passwordHash=_passwordHelper.EncodePassword(request.LoginDTO.Password);
                var user =await _userRepository.FindUserBuEmailAndPasswordAsync(passwordHash, request.LoginDTO.Email);
                if (user is not null)
                {

                    if(user.IsBlocked)
                    {
                        response.IsSuccess = false;
                        response.Message = "حساب شما بلاک شده";
                    }
                    else if(!user.IsActive)
                    {
                        response.IsSuccess = false;
                        response.Message = "حساب شما فعال نمی باشد";
                    }
                    else
                    {
                        response.IsSuccess = true;
                        response.Value = user;
                    }   
                }
                else
                {
                    response.IsSuccess = false;
                    response.Message = "نام کاربری یا کلمه عبور یافت نشد";
                    response.Value = null;
                }
            }

            return response;

        }

        
    }
}
