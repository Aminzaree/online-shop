using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace online_shop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public IActionResult Login()
        {
            return Ok("تست");
        }
        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public IActionResult Register()
        {
            return Ok("تست");
        }
    }
}
