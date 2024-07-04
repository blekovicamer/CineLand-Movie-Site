import apiClient from './axios';

export default {
  getPopularMovies() {
    return apiClient.get('/movie/popular');
  },
  getMovieDetails(movieId) {
    return apiClient.get(`/movie/${movieId}`);
  },
  searchMovies(query) {
    return apiClient.get('/search/movie', {
      params: {
        query: query,
      },
    });
  },
};
