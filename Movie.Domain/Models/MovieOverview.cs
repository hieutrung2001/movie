
namespace Movie.Domain.Models
{
    public class MovieOverview : BaseEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string? Description { get; set; }
        public DayOfWeek ShowTimes { get; set; }
        public int YearOfRelease { get; set; }
        public string Slug { get; set; }
        public IList<string> Authors { get; set; }
        public int? TotalOfEpisodes { get; set; }
        public int CountryId { get; set; }
        public Country Country { get; set; }
        public ICollection<MovieOverviewGenre> MovieOverviewGenres { get; set; }
        public ICollection<Episode>? Episodes { get; set; }
        public ICollection<Comment>? Comments { get; set; }
    }

    public enum DayOfWeek
    {
        Sunday,
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday
    }
}
