<template>
  <div>
    <PopularMovies />
    <UpcomingMovies />
    <PageFooter />
  </div>
</template>

<script>
import PopularMovies from './PopularMovies.vue'
import UpcomingMovies from './UpcomingMovies.vue'
import PageFooter from '@/components/footer/PageFooter.vue'

export default {
  components: {
    PopularMovies,
    UpcomingMovies,
    PageFooter
  },
  name: 'HomePage'
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
