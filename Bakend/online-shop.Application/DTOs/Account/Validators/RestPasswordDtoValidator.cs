using FluentValidation;

namespace online_shop.Application.DTOs.Account.Validators
{
    public class RestPasswordDtoValidator:AbstractValidator<ResetPasswordDTO>
    {
        public RestPasswordDtoValidator()
        {
            RuleFor(c => c.Code)
                  .NotEmpty().WithMessage("{PropertyName} نمی تواند خالی باشد");

            RuleFor(c => c.Password)
              .NotEmpty().WithMessage("{PropertyName} نمی تواند خالی باشد")
             .MaximumLength(100).WithMessage("{PropertyName}نمی تواند بیشتر از {MaxLength} کارکتر باشد")
             .MinimumLength(8).WithMessage("{PropertyName}نمی تواند کمتر از {MinLength} کارکتر باشد")
             .Equal(p => p.RePassword).WithMessage("{PropertyName} باهم مغایرت دارند")
             .WithName("پسورد");

            RuleFor(u => u.RePassword)
               .NotEmpty().NotNull().WithMessage("{PropertyName} نمی تواند خالی باشد")
               .WithName("تکرار پسورد");
        }
    }
}
