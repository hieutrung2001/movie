using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Movie.Domain.Configurations;
using Movie.Domain.Models;

namespace Movie.Persistence.Contexts
{
    public class MovieDbContext : IdentityDbContext<ApplicationUser>
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new UserProfileConfig());
            base.OnModelCreating(builder);
        }

        public DbSet<UserProfile> UserProfiles { get; set; }
    }
}
