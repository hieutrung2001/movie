
namespace Movie.Domain.Models
{
    public class Genre : BaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public ICollection<MovieOverviewGenre>? MovieOverviewGenres { get; set; }
    }
}
