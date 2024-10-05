using AutoMapper;
using MediatR;
using online_shop.Application.Contracts.Infrastructure;
using online_shop.Application.Contracts.Persistence;
using online_shop.Application.DTOs.Account.Validators;
using online_shop.Application.Features.Users.Requests.Commands;
using online_shop.Application.Models.Email;
using online_shop.Application.Responses;
using online_shop.Application.Utilities.Converts;
using online_shop.Application.Utilities.Generator;
using online_shop.Application.Utilities.Security.PasswordHelper;
using online_shop.Domain.User;

namespace online_shop.Application.Features.Users.Handlers.Commands
{
    public class RegistrationCommandHander : IRequestHandler<RegistrationCommand, BaseCommandResponse>
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly IPasswordHelper _passwordHelper;
        private readonly IEmailSender _emailSender;
        private readonly IViewRenderService _viewRenderService;

        public RegistrationCommandHander(IUserRepository userRepository, IMapper mapper, IPasswordHelper passwordHelper = null, IEmailSender emailSender = null, IViewRenderService viewRenderService = null)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _passwordHelper = passwordHelper;
            _emailSender = emailSender;
            _viewRenderService = viewRenderService;
        }

        public async Task<BaseCommandResponse> Handle(RegistrationCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse<List<string>>();
            var validator = new RegisterDtoValidator(_userRepository);
            var validatorResult = await validator.ValidateAsync(request.RegisterDTO);
            if (validatorResult.IsValid == false)
            {
                response.IsSuccess = false;
                response.Message = "اطلاعات را صحیح ورد کنید";
                response.Value = validatorResult.Errors.Select(s => s.ErrorMessage).ToList();
            }
            else
            {
                request.RegisterDTO.Password = _passwordHelper.EncodePassword(request.RegisterDTO.Password);
                var register = _mapper.Map<User>(request.RegisterDTO);
               register.UserName= register.CreatedBy = request.RegisterDTO.Email.Split('@')[0];
                register.ActiveCodeEmail = NameGenerator.GenerateUniqCode();
                try
                {
                    register = await _userRepository.AddAsync(register);
                    response.IsSuccess = true;
                    response.Message = "حساب کاربری با موفقعیت ساخت شد";
                    response.Id = register.Id;

                    string body = _viewRenderService.RenderToString("AccountVerify", register);
                    var email = new EmailDTO()
                    {
                        Body = body,
                        Subject = "تایید حساب کاربری",
                        To = register.Email,
                        Title="فعال سازی حساب کاربری"
                    };
                    _emailSender.SendEmailAsync(email);
                }
                catch (Exception)
                {

                    throw;
                }

            }

            return response;
        }
    }
}
