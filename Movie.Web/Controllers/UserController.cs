using Microsoft.AspNetCore.Mvc;
using Movie.Domain.Models;
using System.Security.Claims;

namespace Movie.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public ApplicationUser GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var userClaims = identity.Claims;

                return new ApplicationUser
                {
                    UserName = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value,
                    Roles = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value,
                };
            }

            return null;
        }
    }
}
