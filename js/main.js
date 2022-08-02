// consts

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

//Utils

function createMovies(movies, container){
    container.innerHTML = '';

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', URL_POSTER_IMG_300 + movie.poster_path);

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);

    });
}

function createGenres(genres, container){
    container.innerHTML = '';
    genres.forEach(genre => {
        const genresContainer = document.createElement('div');
        genresContainer.classList.add('category-container');

        const genreTitle = document.createElement('h3');
        genreTitle.classList.add('category-title');
        genreTitle.setAttribute('id', 'id' + genre.id);
        genreTitle.addEventListener('click', () => location.hash = '#genre=' + genre.id + '-' + genre.name)
        const genreTitleText = document.createTextNode(genre.name);

        genreTitle.appendChild(genreTitleText);
        genresContainer.appendChild(genreTitle);
        container.appendChild(genresContainer);

    })
}
// Api calls

async function getTrendingMovies() {
    const { data } = await api(URL_TRENDING_MOVIES);
    
    const movies = data.results;

    const trendingPreviewMovieList = document.querySelector('.trendingPreview-movieList');

    createMovies(movies, trendingPreviewMovieList)
}

async function getGenres() {
    const { data } = await api(URL_GENRE_MOVIES);
    
    const genres = data.genres;

    const categoriesPreviewList = document.querySelector('.categoriesPreview-list');

    createGenres(genres, categoriesPreviewList);
}

async function getMoviesByGenre(id) {
    const { data } = await api('discover/movie', {
      params: {
        with_genres: id,
      },
    });
    const movies = data.results;

    createMovies(movies, genericSection)
}

getTrendingMovies();
getGenres();

