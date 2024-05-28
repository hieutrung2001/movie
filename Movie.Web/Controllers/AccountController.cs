using Microsoft.AspNetCore.Mvc;
using Movie.Core.Services.Accounts;

namespace Movie.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet]
        public string Get()
        {
            return _accountService.Get();
        }
    }
}
