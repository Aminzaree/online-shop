using AutoMapper;
using MediatR;
using online_shop.Application.Contracts.Persistence;
using online_shop.Application.DTOs.Account.Validators;
using online_shop.Application.Features.Users.Requests.Commands;
using online_shop.Application.Responses;
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

        public RegistrationCommandHander(IUserRepository userRepository, IMapper mapper, IPasswordHelper passwordHelper = null)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _passwordHelper = passwordHelper;
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
                register.CreatedBy = request.RegisterDTO.Email.Split('@')[0];
                register.ActiveCodeEmail = NameGenerator.GenerateUniqCode();
                try
                {
                    register = await _userRepository.AddAsync(register);
                    response.IsSuccess = true;
                    response.Message = "حساب کاربری با موفقعیت ساخت شد";
                    response.Id = register.Id;

                    //ToDo Send Email

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
