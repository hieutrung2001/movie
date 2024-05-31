
namespace Movie.Domain.Models
{
    public class MovieOverviewGenre : BaseEntity
    {
        public int GenreId { get; set; }
        public Genre Genre { get; set; }
        public int MovieOverviewId { get; set; }
        public MovieOverview MovieOverview { get; set; }
    }
}
