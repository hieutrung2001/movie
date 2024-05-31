using Microsoft.Extensions.DependencyInjection;
using Movie.Core.Services.Accounts;
using Movie.Core.Services.Genres;
using Movie.Core.Services.MovieOverviews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Core.Configurations
{
    public static class ApplicationServicesRegistration
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IAccountService, AccountService>();           
            services.AddScoped<IGenreService, GenreService>();
            services.AddScoped<IMovieOverviewService, MovieOverviewService>();
            return services;
        }
    }
}
