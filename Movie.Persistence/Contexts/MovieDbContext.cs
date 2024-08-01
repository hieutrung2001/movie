using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Movie.Domain.Models;

namespace Movie.Persistence.Contexts
{
    public class MovieDbContext : IdentityDbContext<ApplicationUser>
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<Country> Countries { get; set; }
        public DbSet<MovieOverview> MovieOverviews { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Episode> Episodes { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<MovieOverviewGenre> MovieOverviewGenres { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            DataSeeding(builder);
            RegisterModels(builder);
        }

        public void DataSeeding(ModelBuilder builder)
        {
            builder.Entity<ApplicationUser>().HasData([
                    new ApplicationUser
                    {
                        UserName = "admin",
                        PasswordHash = "$2y$10$ZaOZSoOJYb8cJ5l4ZrhgA.wvDYTuWpLlknt4twj7ZinkLY6DpuAlC",
                        Roles = "Admin",
                        CreatedAt = DateTime.Now,
                    }
                ]);
        }

        public int SaveChanges(bool acceptAllChangeOnSuccess = true, bool allowHardDelete = false, bool allowCreatedNow = true)
        {
            UpdateEntityState(allowHardDelete, allowCreatedNow);
            return base.SaveChanges(acceptAllChangeOnSuccess);
        }

        public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default, bool allowHardDelete = false, bool allowCreatedNow = true)
        {
            UpdateEntityState(allowHardDelete, allowCreatedNow);
            return base.SaveChangesAsync(cancellationToken);
        }

        private void UpdateEntityState(bool allowHardDelete = false, bool allowTimeNow = true)
        {
            var now = DateTime.UtcNow;

            foreach (var changedEntity in ChangeTracker.Entries())
            {
                if (changedEntity.Entity is IBaseEntity entity)
                {
                    switch (changedEntity.State)
                    {
                        case EntityState.Added:
                            if (!allowTimeNow)
                                break;
                            entity.CreatedAt = now;
                            entity.UpdatedAt = now;
                            break;
                        case EntityState.Modified:
                            Entry(entity).Property(x => x.CreatedAt).IsModified = false;
                            entity.UpdatedAt = now;
                            break;
                        case EntityState.Deleted:
                            if (allowHardDelete)
                                break;
                            entity.IsDeleted = true;
                            entity.DeletedAt = now;
                            changedEntity.State = EntityState.Modified;
                            break;
                    }
                }
            }
        }

        public static void RegisterModels(ModelBuilder builder)
        {
            builder.Entity<MovieOverviewGenre>().HasKey(e => new
            {
                e.MovieOverviewId,
                e.GenreId
            });
        }
    }
}
