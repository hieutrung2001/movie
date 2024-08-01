using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Movie.Core.Helpers;
using Movie.Domain.Models;
using Movie.Persistence.Contexts;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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
        private readonly MovieDbContext _movieDbContext;

        public AccountService(IConfiguration configuration, MovieDbContext movieDbContext)
        {
            _configuration = configuration;
            _movieDbContext = movieDbContext;
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
                new Claim(ClaimTypes.Role, user.Roles)
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
            var item = _movieDbContext.Users.AsNoTracking().FirstOrDefault(i => i.UserName.Equals(userLogin.Username.Trim()));
            if (item == default)
            {
                return null;
            }
            if (!Utils.Verify(userLogin.Password.Trim(), item.PasswordHash))
            {
                return null;
            }
            return new ApplicationUser
            {
                UserName = userLogin.Username,
                Roles = item.Roles,
            };
        }
    }
}
