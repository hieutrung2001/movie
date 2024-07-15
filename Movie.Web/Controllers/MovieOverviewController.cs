using Microsoft.AspNetCore.Mvc;
using Movie.Core.Services.MovieOverviews;

namespace Movie.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MovieOverviewController : ControllerBase
    {
        private MovieOverviewService _movieOverviewService;

        public MovieOverviewController(MovieOverviewService movieOverviewService)
        {
            _movieOverviewService = movieOverviewService;
        }


        [HttpGet]
        public object Get()
        {
            return new object();
        }

    }
}
