
using Microsoft.AspNetCore.Identity;

namespace Movie.Domain.Models
{
    public class ApplicationUser : IdentityUser, IBaseEntity
    {
        public string Role { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime DeletedAt { get; set; }
    }

    public enum Role
    {
        Admin,
        User,
        Guest
    }
}
