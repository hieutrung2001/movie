using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Movie.Domain.Models;

namespace Movie.Persistence.Contexts
{
    public class MovieDbContext : IdentityDbContext<ApplicationUser>
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
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
    }
}
