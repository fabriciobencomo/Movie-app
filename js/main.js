const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      'api_key': API_KEY,
    },
  });

const URL_POSTER_IMG_300 = 'https://image.tmdb.org/t/p/w300'

const URL_TRENDING_MOVIES =  'trending/movie/day' ;
const URL_GENRE_MOVIES = 'genre/movie/list';

async function getTrendingMovies() {
    const { data } = await api(URL_TRENDING_MOVIES);
    
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

async function getGenres() {
    const { data } = await api(URL_GENRE_MOVIES);
    
    const genres = data.genres;

    const categoriesPreviewList = document.querySelector('.categoriesPreview-list');

    genres.forEach(genre => {
        const genresContainer = document.createElement('div');
        genresContainer.classList.add('category-container');

        const genreTitle = document.createElement('h3');
        genreTitle.classList.add('category-title');
        genreTitle.setAttribute('id', 'id' + genre.id);
        const genreTitleText = document.createTextNode(genre.name);

        genreTitle.appendChild(genreTitleText);
        genresContainer.appendChild(genreTitle);
        categoriesPreviewList.appendChild(genresContainer);

    })
}

getTrendingMovies();
getGenres();