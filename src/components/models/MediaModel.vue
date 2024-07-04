<template>
    <div
      v-if="show"
      class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto z-50 backdrop-blur-sm"
    >
      <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
        <div class="bg-[#521f14] rounded-[30px] backdrop-blur-sm">
          <div class="flex justify-end pr-4 pt-2">
            <button @click="closeModal" class="text-3xl leading-none hover:text-gray-300">
              &times;
            </button>
          </div>
          <div class="modal-body px-8 py-8">
            <div
              class="responsive-container overflow-hidden relative"
              :style="isVideo ? { 'padding-top': '56.25%' } : {}"
            >
              <img :src="mediaURL" v-if="!isVideo" />
              <iframe
                v-else
                class="responsive-iframe absolute top-0 left-0 w-full h-full"
                style="border: 0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                :src="mediaURL"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      mediaURL: {
        type: String,
        required: true,
      },
      isVideo: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      openModal() {
        this.show = true;
      },
      closeModal() {
        this.show = false;
      },
    },
  };
  </script>
  
  <style></style>