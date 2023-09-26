import axios from 'axios';

const END_POINT = {
  tranding: '/trending/movie/day',
  movieById: '/movie/',
  searchMovie: 'search/movie',
};

const options = {
  method: 'GET',
  baseURL: 'https://api.themoviedb.org/3/',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODkwOTU0MWQ1MjM2ZGRhNDNmOWVhNGI5N2VlZDA1NCIsInN1YiI6IjY1MDA0MWFmZTBjYTdmMDBjYmVhN2YxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KMhjiI3nUTqduooQ-82TXACriU726sX4ViPAF8iUjDs',
  },
};

export async function getTrending(controller) {
  const { data } = await axios.request(`${END_POINT.tranding}`, {
    ...options,
    signal: controller.signal,
  });
  return data.results;
}

export async function getMovieById(movieId, controllerRef) {
  const { data } = await axios.request(`${END_POINT.movieById}${movieId}`, {
    ...options,
    signal: controllerRef.signal,
  });
  return data;
}

export async function getMovieCast(movieId, controller) {
  const { data } = await axios.request(
    `${END_POINT.movieById}${movieId}/credits`,
    { ...options, signal: controller.signal }
  );
  return data;
}

export async function getMovieReviews(movieId, controller) {
  const { data } = await axios.request(
    `${END_POINT.movieById}${movieId}/reviews`,
    { ...options, signal: controller.signal }
  );
  return data;
}

export async function getSearchMovies(query, controllerRef) {
  const { data } = await axios.request(`${END_POINT.searchMovie}`, {
    ...options,
    params: {
      query: query,
      include_adult: 'false',
      page: '1',
    },
    signal: controllerRef.signal,
  });
  return data.results;
}
