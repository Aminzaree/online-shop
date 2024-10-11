using MediatR;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using online_shop.API.Services.Interface;
using online_shop.Application.DTOs.Account;
using online_shop.Application.Features.Users.Requests.Commands;
using online_shop.Application.Features.Users.Requests.Queries;
using online_shop.Application.Responses;
using online_shop.Domain.User;
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
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(BaseCommandResponse<object>))]
        public async Task<IActionResult> Login(LoginDTO loginDTO)
        {
            var response = await _mediator.Send(new PasswordSignInRequest() { LoginDTO = loginDTO });
            if (response.IsSuccess)
            {
                var user = response.Value as User;
                var token = _tokenServices.CreateToken(user);
                response = new BaseCommandResponse<object>
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

        [HttpPost("AccountActive/{code}", Name ="AccountActive")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(BaseCommandResponse<object>))]
        public async Task<IActionResult> AccountActive(string code)
        {
            var VerfiyAccountDTO = new VerfiyAccountDTO()
            {
                Code = code
            };
            var response = await _mediator.Send(new VerfiyAccountCommand() { VerfiyAccountDTO= VerfiyAccountDTO });
            return Ok(response);
        }

        [HttpPost("ForgetPassword/{email}", Name = "ForgetPassword")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(BaseCommandResponse<object>))]
        public async Task<IActionResult> ForgetPassword(string email)
        {
            var forgetPassword= new ForgetPasswordDTO()
            {
                Email = email
            };
            var response = await _mediator.Send(new ForgetPasswordCommand() { ForgetPasswordDTO = forgetPassword });
            return Ok(response);
        }

        [HttpPost("ResetPassword")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(BaseCommandResponse<object>))]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDTO resetPassword)
        {           
            var response = await _mediator.Send(new RestPasswordCommand() { RestPasswordDTO = resetPassword });
            return Ok(response);
        }
    }
}
