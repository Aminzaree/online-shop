using FluentValidation;

namespace online_shop.Application.DTOs.Account.Validators
{
    public class LoginDtoValidator:AbstractValidator<LoginDTO>
    {
        public LoginDtoValidator()
        {
            RuleFor(c => c.Email)
                   .NotEmpty().WithMessage("{PropertyName} نمی تواند خالی باشد")
                  .NotNull()                  
                  .EmailAddress().WithMessage("{PropertyName}  وارد شد معتبر نیست")
                  .WithName("ایمیل");
                

            RuleFor(c => c.Password)
                .NotEmpty().WithMessage("{PropertyName} نمی تواند خالی باشد")
               .NotNull()                        
               .WithName("پسورد");
        }
    }
}
