import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTIwYjMyYWRlNGQ5NGVjNjg5ZTU1NmIwNTM5NjFhMyIsIm5iZiI6MTcxOTc1MDQxNy4xMDQ1MDksInN1YiI6IjY2N2RkYjAxZmE1MTQzZTNjMWNjOTcwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WTkP_ePjUoqvTVmHrujiMhmblM6y7Ej0JHUTGQy42xE";

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    api_key: '8a20b32ade4d94ec689e556b053961a3',
  },
});
export default apiClient;
