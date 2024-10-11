using MediatR;
using Microsoft.Win32;
using online_shop.Application.Contracts.Infrastructure;
using online_shop.Application.Contracts.Persistence;
using online_shop.Application.DTOs.Account.Validators;
using online_shop.Application.Features.Users.Requests.Commands;
using online_shop.Application.Models.Email;
using online_shop.Application.Responses;
using online_shop.Application.Utilities.Converts;
using online_shop.Application.Utilities.Generator;

namespace online_shop.Application.Features.Users.Handlers.Commands
{
    public class ForgetPasswordCommandHandler : IRequestHandler<ForgetPasswordCommand, BaseCommandResponse>
    {
        private readonly IUserRepository _userRepository;
        private readonly IEmailSender _emailSender;
        private readonly IViewRenderService _viewRenderService;

        public ForgetPasswordCommandHandler(IUserRepository userRepository, IEmailSender emailSender, IViewRenderService viewRenderService = null)
        {
            _userRepository = userRepository;
            _emailSender = emailSender;
            _viewRenderService = viewRenderService;
        }

        public async Task<BaseCommandResponse> Handle(ForgetPasswordCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse<object>();
            var vaildator = new ForgetPasswordDtoValidator();
            var result = await vaildator.ValidateAsync(request.ForgetPasswordDTO);

            if (result.IsValid)
            {
                var user = await _userRepository.GetUserByEmailAsync(request.ForgetPasswordDTO.Email);
                if (user is not null)
                {
                    user.ActiveCodeEmail = NameGenerator.GenerateUniqCode();

                    _userRepository.Update(user);

                    response.IsSuccess = true;
                    response.Message = "ایمیل با موفقیت ارسال شد";
                    response.Value = user.ActiveCodeEmail;
                   

                    string body = _viewRenderService.RenderToString("Email/ForgetPassword", user);
                    var email = new EmailDTO()
                    {
                        Body = body,
                        Subject = "فراموشی رمز",
                        To = user.Email,
                        Title = "فراموشی رمز"
                    };
                    _emailSender.SendEmailAsync(email);
                }
                else
                {
                    response.IsSuccess = false;
                    response.Value = "کاربر مورد نظر یافت نشد";
                }
            }
            else
            {
                response.IsSuccess = false;
                response.Value = result.Errors.SelectMany(s => s.ErrorMessage).ToList();
            }
           

            return response;

        }
    }
}
