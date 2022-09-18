import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '6f3a72a470b06bab99f8d69f54b4e2d3';

export const getFetchTrending = async () => {
  const response = await axios('/trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });

  return response.data.results;
};

export const getFetchSearchMovies = async query => {
  const response = await axios('/search/movie', {
    params: {
      api_key: KEY,
      include_adult: false,
      query,
    },
  });

  return response.data.results;
};

export const getFetchMovieDetails = async movieId => {
  const response = await axios(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
};

export const getFetchMovieCast = async movieId => {
  const response = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
};

export const getFetchMovieReviews = async movieId => {
  const response = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return response.data;
};
