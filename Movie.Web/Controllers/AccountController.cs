using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Movie.Core.Services.Accounts;
using Movie.Domain.Models;

namespace Movie.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public static ApplicationUser user = new ApplicationUser();

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public IActionResult Login([FromBody] UserDto userLogin)
        {
            var user = _accountService.Authentication(userLogin);

            if (user != null)
            {
                var token = _accountService.Generate(user);
                return Ok(token);
            }

            return NotFound("User not found");
        }

    }
}
