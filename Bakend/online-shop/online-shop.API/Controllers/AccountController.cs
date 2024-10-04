using MediatR;
using Microsoft.AspNetCore.Mvc;
using online_shop.API.Services.Interface;
using online_shop.Application.DTOs.Account;
using online_shop.Application.Features.Users.Requests.Commands;
using online_shop.Application.Features.Users.Requests.Queries;
using online_shop.Application.Responses;
using System.Net;

namespace online_shop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly ITokenServices _tokenServices;

        public AccountController(IMediator mediator, ITokenServices tokenServices)
        {
            _mediator = mediator;
            _tokenServices = tokenServices;
        }

        [HttpPost("Login")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public IActionResult Login()
        {
            return Ok("تست");
        }
        [HttpPost("Register")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(BaseCommandResponse<UserDTO>))]
        public async Task<IActionResult> Register(RegisterDTO registerDTO)
        {
            var response = await _mediator.Send(new RegistrationCommand() { RegisterDTO = registerDTO });

            if (response.IsSuccess)
            {
                var user = await _mediator.Send(new GetUserByIdRequest() { UserId = response.Id.Value });
                var token = _tokenServices.CreateToken(user);
                response = new BaseCommandResponse<UserDTO>()
                {
                    IsSuccess = response.IsSuccess,
                    Message = response.Message,
                    Value = new UserDTO()
                    {
                        Token = token,
                        UserId = user.Id.ToString(),
                    }
                };

            }

            return Ok(response);
        }
    }
}
