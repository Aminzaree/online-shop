using FluentValidation;

namespace online_shop.Application.DTOs.Account.Validators
{
    public class VerfiyAccountDtoValidator:AbstractValidator<VerfiyAccountDTO>
    {
        public VerfiyAccountDtoValidator()
        {
            RuleFor(c => c.Code)
                   .NotEmpty().WithMessage("{PropertyName} نمی تواند خالی باشد");                 
        }
    }
}
