<template>
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 class="uppercase ml-9 mt-5 mb-5 text-[#F2613F] text-[25px] font-semibold">
          Upcoming Movies
        </h2>
          <div class="movie-carousel ml-5 gap-4">
        <div class="movie-carousel-inner flex mb-7">
          <div v-for="(movie, i) in upcomingMovies" :key="i" class="mr-6 movie-item-container">
              <router-link :to="`/movie/${movie.id}`" class="text-blue-500 hover:underline">
            <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title" class="rounded-[15px]" />
            <h3 class="mt-2 text-white">{{ movie.title }}</h3>
            </router-link>
          </div>
        </div>
          </div>
  


          
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          upcomingMovies: [],
        };
      },
      mounted() {
        this.fetchUpcomingMovies();
      },
      methods: {
        async fetchUpcomingMovies() {
  const response = await this.$http.get("https://api.themoviedb.org/3/movie/upcoming");
  this.upcomingMovies = response.data.results.slice(0, 10); // Adjusting this will show more or less movies, (:
},

      },
    };
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

@media (max-width: 767px) {
  .movie-item-container {
    width: 140px; 
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .movie-item-container {
    width: 130px; 
  }
}

@media (min-width: 992px) {
  .movie-item-container {
    width: 170px; 
  }
}


  </style>
  