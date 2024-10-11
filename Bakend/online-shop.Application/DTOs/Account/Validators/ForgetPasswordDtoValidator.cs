using FluentValidation;
using online_shop.Application.Contracts.Persistence;

namespace online_shop.Application.DTOs.Account.Validators
{
    public class ForgetPasswordDtoValidator:AbstractValidator<ForgetPasswordDTO>
    {  
        public ForgetPasswordDtoValidator()
        {
            RuleFor(c => c.Email)
                      .NotEmpty().WithMessage("{PropertyName} نمی تواند خالی باشد")
                     .MaximumLength(200).WithMessage("{PropertyName}نمی تواند بیشتر از {MaxLength} کارکتر باشد")
                     .EmailAddress().WithMessage("{PropertyName}  وارد شد معتبر نیست")
                     .WithName("ایمیل");                     
        }
    }
}
