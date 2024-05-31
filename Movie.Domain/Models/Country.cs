
namespace Movie.Domain.Models
{
    public class Country : BaseEntity
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; } 
        public ICollection<MovieOverview>? MovieOverviews { get; set; }
    }
}
