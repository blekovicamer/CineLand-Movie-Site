<template>
    <div>
      <router-link :to="`/actor/${this.actor.id}`">
        <img :src="profileImage" alt="Actor Image" class="rounded-[15px]">
      </router-link>

      <h3>{{ actor.name }}</h3>
      <p class="text-gray-400">{{knownFor}}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      actor: {
        required: true,
      },
    },
  
    computed: {
      profileImage() {
        const baseUrl = 'https://image.tmdb.org/t/p/w235_and_h235_face';
        const imagePath = this.actor.profile_path || '/default-actor-image.png';
        return `${baseUrl}${imagePath}`;
      },
      knownFor() {
                let knownStr = ""
                for (let i; i < this.actor.known_for.length - 1;i++) {
                    knownStr += this.actor.known_for[i].title;
                }
                return knownStr
  }
}
  }
  </script>

<style>

</style>