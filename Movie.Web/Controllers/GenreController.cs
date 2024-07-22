using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Movie.Core.Services.Genres;

namespace Movie.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin, Guest")]
    public class GenreController : ControllerBase
    {
        private readonly IGenreService _genreService;

        public GenreController(IGenreService genreService)
        {
            _genreService = genreService;
        }

        [HttpGet]
        public object Get([FromQuery] int currentPage, [FromQuery] int pageSize)
        {
            try
            {
                return _genreService.Get(currentPage, pageSize);
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);  
            }
        }

        [HttpPost]
        public object Create([FromBody] GenreDto genreDto)
        {
            return _genreService.Create(genreDto);
        }

        [HttpPut("{id}")]
        public object Update(int id, [FromBody] GenreDto genreDto)
        {
            try
            {
                return _genreService.Update(id, genreDto);
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public object Remove(int id)
        {
            try
            {
                return _genreService.Remove(id);
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);  
            }
        }
    }
}
