
using Microsoft.EntityFrameworkCore;
using Movie.Core.Dtos;
using Movie.Core.Extensions;
using Movie.Domain.Models;
using Movie.Persistence.Contexts;

namespace Movie.Core.Services.Genres
{
    public interface IGenreService
    {
        PagedResult<GenreDto> Get(int currentPage, int pageSize);
        object Create(GenreDto genre);
        object Update(int id, GenreDto genre);
        object Remove(int id);
        object Get(int id);
    }

    public class GenreService : IGenreService
    {
        private readonly MovieDbContext _movieDbContext;

        public GenreService(MovieDbContext movieDbContext)
        {
            _movieDbContext = movieDbContext;
        }

        public object Get(int id)
        {

            var item = _movieDbContext.Genres.AsNoTracking().FirstOrDefault(i => i.Id == id);
            if (id <= 0 || item == default)
            {
                throw new Exception("Item not found");
            }

            return new GenreDto
            {
                Id = item.Id,
                Name = item.Name,  
                Slug = item.Slug
            };
        }

        public PagedResult<GenreDto> Get(int currentPage, int pageSize)
        {
            var query = _movieDbContext.Genres.Where(i => !i.IsDeleted);

            if (currentPage <= 0 || pageSize <= 0)
            {
                throw new Exception("Page is null");
            }

            query = query.Paginate(currentPage, pageSize, out var totalCount);

            var items = query.Select(x => new GenreDto
            {
                Id = x.Id,
                Name = x.Name,
                Slug = x.Slug
            }).ToList();

            return items.GetPagedData(currentPage, pageSize, totalCount);
        }

        public object Create(GenreDto genre)
        {
            var existing = _movieDbContext.Genres.AsNoTracking().FirstOrDefault(i => i.Slug == genre.Slug);
            if (existing != default)
            {
                throw new Exception("Genre already exists");
            }
            var newGenre = new Genre
            {
                Name = genre.Name,
                Slug = genre.Slug,
            };
            _movieDbContext.Add(newGenre);
            _movieDbContext.SaveChanges();

            return new
            {
                Id = newGenre.Id
            };
        }

        public object Update(int id, GenreDto genre)
        {
            var existing = _movieDbContext.Genres.FirstOrDefault(i => i.Id == id && !i.IsDeleted);
            if (existing == default)
            {
                throw new Exception("Genre not found!");
            }
            existing.Name = genre.Name;
            existing.Slug = genre.Slug;
            _movieDbContext.SaveChanges();
            return new
            {
                Id = existing.Id,
            };
        }

        public object Remove(int id)
        {
            var existing = _movieDbContext.Genres.FirstOrDefault(i => i.Id == id && !i.IsDeleted);
            if (existing == default)
            {
                throw new Exception("Genre not found!");
            }
            _movieDbContext.Remove(existing);
            _movieDbContext.SaveChanges();
            return new
            {
                Id = existing.Id,
            };
        }
    }
}
