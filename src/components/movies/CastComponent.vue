<template>
  <div class="container mx-auto border-b border-[#481E14] px-4 py-4">
      <h2 class="text-4xl font-semibold mb-5">Cast</h2>

      <div class="movie-carousel ml-5 ">
       <div class="movie-carousel-inner flex overflow-x-auto mb-3">
        <div class="mr-6 flex-shrink-0 movie-item-container mb-7" :key="cast.id" v-for="cast in casts">
      <img
        class="rounded-[15px] mr-6 hover:opacity-75 mb-2 transition ease-in-out duration-150"
        :src="castProfileImage(cast)"
        alt=""
      />
      <span class="text-gray-300">{{ cast.name }}</span>
    </div>
  </div>
</div>

  </div>

</template>

<script>
export default {
    props:{
        casts: {
            required: true
        }
    },
    methods:{
        castProfileImage(cast){
            if (cast.profile_path){
             return "https://image.tmdb.org/t/p/w500"+cast.profile_path;
            } else {
            return "https://via.placeholder.com/300x450";
        }
        } 
    }
}
</script>

<style>

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
  width: 170px; /* Default width */
}


</style>