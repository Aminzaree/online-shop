using FluentValidation;
using online_shop.Application.Contracts.Persistence;

namespace online_shop.Application.DTOs.Account.Validators
{
    public class RegisterDtoValidator:AbstractValidator<RegisterDTO>
    {
        private readonly IUserRepository _userRepository;

        public RegisterDtoValidator(IUserRepository userRepository)
        {
            _userRepository = userRepository;
            RuleFor(c => c.Email)
                   .NotEmpty().WithMessage("{PropertyName} نمی تواند خالی باشد")
                  .NotNull()
                  .MaximumLength(200).WithMessage("{PropertyName}نمی تواند بیشتر از {PropertyValue} کارکتر باشد")
                  .EmailAddress().WithMessage("{PropertyName}  وارد شد معتبر نیست")
                  .WithName("ایمیل")
                  .MustAsync(async (email, token) =>
                  {
                      var existsEmail = await _userRepository.ExistsEmail(email);
                      return !existsEmail;
                  }).WithMessage("{PropertyName} تکراری می باشد");

            RuleFor(c => c.Password)
                .NotEmpty().WithMessage("{PropertyName} نمی تواند خالی باشد")
               .NotNull()
               .MaximumLength(100).WithMessage("{PropertyName}نمی تواند بیشتر از {PropertyValue} کارکتر باشد")
               .MinimumLength(8).WithMessage("{PropertyName}نمی تواند کمتر از {PropertyValue} کارکتر باشد")
               .Equal(p=>p.RePassword).WithMessage("{PropertyName} باهم مغایرت دارند")
               .WithName("پسورد");

            RuleFor(u => u.RePassword)
               .NotEmpty().NotNull().WithMessage("{PropertyName} نمی تواند خالی باشد")
               .WithName("تکرار پسورد");
               
            

           
        }
    }
}
