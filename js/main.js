const URL_POSTER_IMG_300 = 'https://image.tmdb.org/t/p/w300/'

const URL_TRENDING_MOVIES =  'https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY;

async function getTrendingMovies() {
    const res = await fetch(URL_TRENDING_MOVIES);
    const data = await res.json();
    
    const movies = data.results;

    const trendingPreviewMovieList = document.querySelector('.trendingPreview-movieList');

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', URL_POSTER_IMG_300 + movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingPreviewMovieList.appendChild(movieContainer);

    })
}

getTrendingMovies();