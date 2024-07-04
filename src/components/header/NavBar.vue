<template>
    <div class="flex sm:ml-20 md:ml-30 lg:ml-40 mb-5">
      <router-link to="/">
        <img class="mt-1" src="@/assets/images/logo2.png" alt="" width="100px" >
      </router-link>

      <ul class="flex mt-6">
        <li>
          <router-link to="/" class="ml-8">
            Movies
          </router-link>
        </li>
        <li>
          <router-link to="actors" class="ml-8">
            Actors
          </router-link>
        </li>
        <li>
          <router-link to="profile" class="ml-8">
            Profile
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>./NavBar.vue