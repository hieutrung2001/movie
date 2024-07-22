using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Movie.Domain.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Core.Services.Accounts
{
    public interface IAccountService
    {
        string Get();
        string Generate(ApplicationUser user);
        ApplicationUser Authentication(UserDto user);
    }

    public class AccountService : IAccountService
    {
        private readonly IConfiguration _configuration;

        public AccountService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string Get()
        {
            return "Hello, guys";
        }


        public string Generate(ApplicationUser user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserName),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public ApplicationUser Authentication(UserDto userLogin)
        {
            var currentUser = userLogin.Username.Equals("admin") && userLogin.Password.Equals("admin");
            if (currentUser)
            {
                return new ApplicationUser
                {
                    UserName = userLogin.Username,
                    PasswordHash = userLogin.Password,
                    Role = "Guest"
                };
            }
            return null;
        }
    }
}
