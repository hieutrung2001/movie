using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

//using Microsoft.IdentityModel.Tokens;
using Movie.Core.Helpers;
using Movie.Core.Services.Accounts;
using Movie.Domain.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Movie.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public static ApplicationUser user = new ApplicationUser();

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost("register")]
        public ActionResult<UserDto> Register(UserDto request)
        {
            string passwordHash = Utils.PasswordHash(request.Password);

            user.UserName = request.Username;
            user.PasswordHash = passwordHash;

            return Ok(user);
        }

        [HttpPost("login")]
        public ActionResult<ApplicationUser> Login(UserDto request)
        {
            if (user.UserName != request.Username)
            {
                return BadRequest("User not found!");
            }

            if (!Utils.Verify(request.Password, user.PasswordHash))
            {
                return BadRequest("Wrong password!");
            }

            string token = _accountService.CreateToken(user);

            return Ok(token);
        }

    }
}
