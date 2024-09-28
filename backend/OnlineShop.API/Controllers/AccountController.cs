using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace OnlineShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        [HttpPost("Login")]
        [ProducesResponseType(/*type: typeof(AuthResponse),*/ statusCode: (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Login()
        {
            return Ok("در حال تست");
        }

    }
}
