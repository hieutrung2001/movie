using System.Collections.Generic;

namespace Movie.Core.Dtos
{
    public class PagedResponseDto<T>
    {
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int TotalPages { get; set; }
        public IList<T> Items { get; set; } = new List<T>();
    }
}
