using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Core.Services.Accounts
{
    public interface IAccountService
    {
        string Get();
    }

    public class AccountService : IAccountService
    {
        public string Get()
        {
            return "Hello, guys";
        }
    }
}
