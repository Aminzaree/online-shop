using MediatR;
using online_shop.Application.Contracts.Persistence;
using online_shop.Application.DTOs.Account.Validators;
using online_shop.Application.Features.Users.Requests.Commands;
using online_shop.Application.Responses;
using online_shop.Application.Utilities.Generator;

namespace online_shop.Application.Features.Users.Handlers.Commands
{
    public class VerfiyAccountCommandHandler : IRequestHandler<VerfiyAccountCommand, BaseCommandResponse<object>>
    {
        private readonly IUserRepository _userRepository;

        public VerfiyAccountCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<BaseCommandResponse<object>> Handle(VerfiyAccountCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse<object>();
            var validator = new VerfiyAccountDtoValidator();
            var result = await validator.ValidateAsync(request.VerfiyAccountDTO, cancellationToken);
            if (result.IsValid)
            {
                var user=await _userRepository.GetUserByEmailCodeAsync(request.VerfiyAccountDTO.Code.Trim());
                if(user is not null)
                {
                    user.IsActive=true;
                    user.ActiveCodeEmail = null;
                    user.IsEmailActive=true;
                    try
                    {
                        _userRepository.Update(user);

                        response.IsSuccess = true;
                        response.Message = "حساب کاربری با موفقیت فعال شد";
                    }
                    catch (Exception)
                    {
                        response.IsSuccess = false;
                        response.Message = "فعال سازی حساب کاربری با مشکل مواجه شد";
                    }

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
                response.Value = result.Errors.Select(s=>s.ErrorMessage).FirstOrDefault();
            }
                return response;
        }
    }
}
