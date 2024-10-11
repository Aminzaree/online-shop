
using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using online_shop.Application.Responses;

namespace online_shop.Application.Extensions
{
    public static class ModelStateExtensions
    {
        public static void AddModelState(this ValidationResult result,ModelStateDictionary modelState)
        {
            foreach (var error in result.Errors)
            {
                modelState.AddModelError(error.PropertyName, error.ErrorMessage);
            }
        }
        public static List<string> GetErrors(this ValidationResult result)
        {
            var errors = new List<string>();

            if (result is null)
                return errors;
            foreach (var error in result.Errors)
            {
                errors.Add(error.ErrorMessage);
            }

            return errors;
        }

    }
}
