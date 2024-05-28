using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Models
{
    public class UserProfile : BaseEntity
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public GenderType Gender { get; set; }
        public int Age { get; set; }
        [Required]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }

    public enum GenderType
    {
        None,
        Male,
        Female,
        Other
    }
}
