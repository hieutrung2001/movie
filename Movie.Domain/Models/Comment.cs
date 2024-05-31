using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Models
{
    public class Comment : BaseEntity
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public bool IsLiked { get; set; }
        [Required]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
        public int? ParentId { get; set; }
        public int? RepliedId { get; set; }
        [Required]
        public int MovieOverviewId { get; set; }
        public MovieOverview MovieOverview { get; set; }
    }
}
