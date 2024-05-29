using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Movie.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize(Roles = "Admin")]
    public class TestController : ControllerBase
    {
        public string Get()
        {
            return "Hello, guys!";
        }
    }
}
