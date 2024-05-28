
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Movie.Domain.Models;

namespace Movie.Domain.Configurations
{
    public class UserProfileConfig : IEntityTypeConfiguration<UserProfile>
    {
        void IEntityTypeConfiguration<UserProfile>.Configure(EntityTypeBuilder<UserProfile> builder)
        {
            builder.ToTable("UserProfiles");
            builder.HasKey(x => x.Id);
        }
    }
}
