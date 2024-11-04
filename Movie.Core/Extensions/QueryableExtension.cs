using Movie.Core.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Core.Extensions
{
    public static class QueryableExtension
    {
        public static PagedResult<T> GetPagedData<T>(this IList<T> items, int currentPage, int pageSize, int totalCount)
        {
            return new PagedResult<T>
            {
                CurrentPage = currentPage,
                PageSize = pageSize,
                Items = items,
                TotalPages = (int)(totalCount / pageSize) + (totalCount % pageSize == 0 ? 0 : 1)
            };
        }

        public static IQueryable<T> Paginate<T>(this IQueryable<T> query, int currentPage, int pageSize, out int totalCount)
        {
            var start = (currentPage - 1) * pageSize;
            totalCount = query.Count();
            return query.Skip(start).Take(pageSize);
        }
    }
}
