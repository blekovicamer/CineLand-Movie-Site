<template>
  <div class="relative w-full h-[350px] flex flex-col">
    <div class="absolute inset-0 bg-[url(@/assets/images/bgimg.jpg)]">
      <div class="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] to-transparent"></div>
    </div>
    <div class="relative z-10 mt-[120px] mb-10 px-4 sm:px-0 sm:ml-64">
      <h1 class="text-3xl sm:text-5xl font-semibold text-white">Welcome.</h1>
      <h2 class="text-2xl sm:text-4xl font-semibold text-white">Millions of movies, TV shows and people to discover. Explore now.</h2>
    </div>

  </div>

  

  <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <h2 class="uppercase ml-9 mt-5 mb-5 text-[#F2613F] text-[25px] font-semibold">
      Popular Movies
    </h2>

    <div class="movie-carousel ml-5">
      <div class="movie-carousel-inner flex mb-7">
        <MovieItem v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
          :genres="genres"
          class="mr-6 movie-item-container"
        />
      </div>
    </div>
  </div>

  
</template>

<script>
import MovieItem from './items/MovieItem.vue';
import api from '@/services/api';

export default {
  components: {
    MovieItem,
  },

  data: function () {
    return {
      movies: [],
      genres: [],
    }
  },

  async mounted() {
    this.fetchGenres();
    try {
      const response = await this.$http.get("/movie/popular");
      this.movies = response.data.results;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async fetchGenres() {
      try {
        const response = await this.$http.get("genre/movie/list");
        this.genres = response.data.genres;
      } catch (error) {
        console.log(error);
      }
    },

    async created() {
      try {
        const response = await api.getPopularMovies();
        this.movies = response.data.results;
      } catch (error) {
        console.error(error);
      }
    },
  }
}
</script>

<style scoped>


.movie-carousel {
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  background-image: url('@/assets/images/dotsa.png');
  background-size: cover; 
  background-position: center; 
  padding: 20px;
}


.movie-carousel-inner {
  display: flex;
}

.movie-item-container {
  flex: 0 0 auto;
  width: 170px; 
}


/* SMALL SCREENS */
@media (max-width: 767px) {
  .movie-item-container {
    width: 140px; 
  }
}

/* MEDIUM */
@media (min-width: 768px) and (max-width: 991px) {
  .movie-item-container {
    width: 130px; 
  }
}

/* LARGE */
@media (min-width: 992px) {
  .movie-item-container {
    width: 170px; 
  }
}



</style>
