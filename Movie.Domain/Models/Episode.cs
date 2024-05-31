
namespace Movie.Domain.Models
{
    public class Episode : BaseEntity
    {
        public int Id { get; set; }
        public string Video { get; set; }
        public double Rate { get; set; } = 0;
        public string Slug { get; set; }
        public int EpisodeNumber { get; set; }
        public int MovieOverviewId { get; set; }
        public MovieOverview MovieOverview { get; set; }
    }
}
