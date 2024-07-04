<template>
    <div>
      <h2 class="text-[35px] mt-10 mb-5 font-semibold mb-4">Images</h2>
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(image, index) in images" :key="index" class="mb-10">
          <img
            :src="`https://image.tmdb.org/t/p/w500${image.file_path}`"
            :alt="image.file_path"
            class="w-full h-auto rounded-lg"
          />
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import SwiperCore, { Navigation, Pagination } from 'swiper/core'
  
  SwiperCore.use([Navigation, Pagination])
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        modules: [Navigation, Pagination],
      }
    },
  }
  </script>