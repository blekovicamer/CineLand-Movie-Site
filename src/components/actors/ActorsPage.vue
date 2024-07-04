<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="uppercase ml-9 mt-5 mb-5 text-[#F2613F] text-[25px] font-semibold">Popular Actors</h2>

    <div class="grid grid-cols-1 sm:grids-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        <ActorItem :key="actor.id" v-for="actor in this.actors" :actor="actor" />
  </div>
  </div>
</template>

<script>
import ActorItem from "../items/ActorItem.vue"

export default {
    data(){
        return{
            actors: []
        }
    },


    components:{
        ActorItem
    },

    mounted(){
        this.fetchActors(2)
    },

    methods: {
        async fetchActors(page) {
        try {
            const response = await this.$http.get(`/person/popular?page=${page}`);
            this.actors = response.data.results;
        } catch (error) {
            console.log(error);
        }

    }
}
}
</script>

<style>

</style>