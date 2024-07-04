<template>
<div>
  <div class=" flex justify-between border-b border-[#481E14] bg-gradient-to-b from-[#0C0C0C] from-50% to-[#481E14]">
       <NavBar/>
       <SearchBar/>
      </div>
  <router-view></router-view>
</div>
</template>

<script>
    import NavBar from './components/header/NavBar.vue'
    import SearchBar from './components/header/SearchBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SearchBar
  }
}
</script>

<style>

</style>
