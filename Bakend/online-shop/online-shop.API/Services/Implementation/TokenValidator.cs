using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using online_shop.API.Services.Interface;
using online_shop.Application.Contracts.Persistence;
using online_shop.Application.Features.Users.Requests.Queries;
using System.Security.Claims;

namespace online_shop.API.Services.Implementation
{
    public class TokenValidator : ITokenValidator
    {
        private readonly IMediator _mediator;

        public TokenValidator(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task Execute(TokenValidatedContext context)
        {
            var claimsIdentity = context.Principal.Identity as ClaimsIdentity;
            if (claimsIdentity?.Claims == null || !claimsIdentity.Claims.Any())
            {
                context.Fail("Claims not found ....");
                return;
            }
            var userId = claimsIdentity?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var userDB = await _mediator.Send(new GetUserByIdRequest() { UserId = Guid.Parse(userId) });
            if (userDB.IsActive)
            {
                context.Fail("حساب کاربری شما فعال نیست");
                return;
            }
            if (userDB.IsBlocked)
            {
                context.Fail("حساب کاربری شما بلاک شده است");
            }

        }
    }
}
