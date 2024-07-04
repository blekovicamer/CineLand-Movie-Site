<template>
  <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div class="relative">
      <div class="bg-cover bg-center" :style="{ backgroundImage: `url(${backdropImageUrl})` }">
        <div class="absolute inset-0 overlay"></div>
      </div>
      <div class="relative py-20">
        <div class="flex items-start">
          <img :src="posterPath" alt="" class="w-64 rounded-[15px] mr-10">
          <div>
            <h1 class="text-4xl font-semibold mb-2">{{ movie.title }}</h1>
            <span class="text-gray-500 text-sm flex">
              <svg class="w-4 mr-1" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                <path fill="yellow" d="M7.4541,1.6942 C7.65606,1.20862 8.34393,1.20862 8.5459,1.6942 L10.1307,5.50456 C10.1667,5.59112 10.2481,5.65026 10.3416,5.65776 L14.4552,5.98754 C14.9794,6.02957 15.192,6.68377 14.7926,7.0259 L11.6584,9.71062 C11.5872,9.77161 11.5561,9.8673 11.5779,9.95849 L12.5354,13.9727 C12.6574,14.4842 12.1009,14.8885 11.6521,14.6144 L8.13031,12.4633 C8.05031,12.4144 7.94969,12.4144 7.86969,12.4633 L4.34786,14.6144 C3.89906,14.8885 3.34256,14.4842 3.46458,13.9727 L4.42211,9.95849 C4.44387,9.8673 4.41277,9.77161 4.34158,9.71062 L1.20744,7.0259 C0.80804,6.68377 1.0206,6.02957 1.54482,5.98754 L5.65843,5.65776 C5.75188,5.65026 5.83328,5.59112 5.86928,5.50456 L7.4541,1.6942 Z"/>
              </svg>
              {{ movie.vote_average * 10 }} | {{ movie.release_date }}
            </span>
            <span v-for="(item, index) in movie.genres" :key="index">
              {{ item.name }}
              <span v-if="index !== movie.genres.length - 1">,</span>
            </span>
            <p class="mt-5">{{ movie.overview }}</p>
            <div class="mt-5">
              <span class="font-semibold">Featured Cast</span>
              <div class="flex">
                <div :key="index" v-for="(crew, index) in crewData">
                  <div v-if="index < 2" class="flex flex-col mt-5 mr-5">
                    <span>{{ crew.name }}</span>
                    <span class="text-gray-500">{{ crew.job }}</span>
                  </div>
                </div>
              </div>
              <div class="mt-5 mb-5">
                <a v-if="openYouTubeModel" @click.prevent="openModal" class="rounded bg-[#F2613F] px-5 py-3 inline-flex" target="blank">                           <svg fill="white" width="20px" height="20px" viewBox="0 -6 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-play">
                    <path d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.031 1.031 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.746 1.997l-9.921 6.031c-1.425.867-3.3.44-4.186-.951A2.918 2.918 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448l9.921 6.032c1.425.866 1.862 2.696.975 4.088-.246.386-.58.712-.975.952z" />
                  </svg>
                  <span class="ml-3">Play Trailer</span>
                </a>
                <a href="#" class="ml-5 rounded bg-[#F2613F] px-5 py-3 inline-flex">
                  <svg fill="white" width="20px" height="20px" viewBox="0 -3 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/>
                  </svg>
                  <span class="ml-3">Favourite</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto border-b border-[#481E14] pb-2">
      <CastComponentVue :casts="castData" />
      <ImagesComponentVue :images="backdropImages" />
    </div>
    <MediaModel
  ref="mediaModal"
  :mediaURL="youtubeVideo"
  :isVideo="true"
/>
  </div>
</template>


<script>
import CastComponentVue from './CastComponent.vue'
import ImagesComponentVue from './ImagesComponent.vue'
import MediaModel from '../models/MediaModel.vue'


export default {
  data() {
    return {
      movie: [],
      modelOpen: null
    }
  },

  components: {
    CastComponentVue,
    ImagesComponentVue,
    MediaModel,
  },

  mounted() {
    this.fetchMovie(this.$route.params.id)
  },

  methods: {

    
    async fetchMovie(movieId) {
      const response = await this.$http.get(`/movie/${movieId}?append_to_response=credits,videos,images`)
      console.log(response.data) // Log the API response data
      this.movie = response.data
    },
    openModal() {
      this.$refs.mediaModal.openModal();
    },
    openYouTubeModel(){
      this.modelOpen = true,
      this.isVideo = true
    },
    openImageModel(){
      this.modelOpen = true,
      this.isVideo = false
    }

  },

  computed: {
    posterPath() {
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`
    },

    castData() {
      return this.movie.credits && this.movie.credits.cast ? this.movie.credits.cast : []
    },

    backdropImages() {
      const images = this.movie.images && this.movie.images.backdrops ? this.movie.images.backdrops : []
      console.log(images) 
      return images
    },

    backdropImageUrl() {
      if (this.backdropImages.length > 0) {
        const firstImageUrl = `https://image.tmdb.org/t/p/original${this.backdropImages[0].file_path}`
        console.log(firstImageUrl) 
        return firstImageUrl
      }
      return null
    },

    crewData() {
      return this.movie.credits ? this.movie.credits.crew : []
    },

    youtubeVideo() {
      const videos = this.movie.videos?.results;
      if (Array.isArray(videos) && videos.length > 0) {
        return `https://youtube.com/embed/${videos[0].key}`;
      }
      return null;
    }
  }
}
</script>

<style>
.bg-cover {
  background-size: cover;
  background-position: center;
  min-height: 500px; 
  position: absolute;
  width: 100vw; 
  left: 50%; 
  right: 50%; 
  margin-left: -50vw; 
  margin-right: -50vw; 
}

.overlay {
  background: linear-gradient(to top, rgba(12, 12, 12, 1), rgba(72, 30, 20, 0.5));
}
</style>