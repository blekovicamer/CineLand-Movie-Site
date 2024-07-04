<template>
  <div class="mt-4 flex relative mr-[130px]">
    <input
      ref="searchBox"
      type="text"
      class="rounded-full bg-[#9B3922] px-9 w-60 h-10 mr-5 focus:outline-none"
      placeholder="Search"
      @input="debounceSearch"
      @focus="handleFocus"
    />

    <div class="absolute top-0">
      <svg
        class="mt-2 ml-3 mt-3"
        width="17px"
        height="17px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="gray"
      >
        <path
          d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"
        />
      </svg>
    </div>

    <div
      ref="searchResultsContainer"
      class="z-50 absolute mt-12 ml-2 rounded bg-[#9B3922] w-60"
      @click.self="hideSearchResults"
    >
      <ul class="mt-3" v-if="showSearchResult">
        <li
          :key="index"
          v-for="(movie, index) in searchResult"
          class="flex items-center border-b border-[#481E14] p-1"
        >

        <router-link :to="`/movie/${movie.id}`" @click="shoowSearchResults = false">
          <img :src="posterPath(movie.poster_path)" alt="" class="w-20 p-1" />
          <span class="ml-3">{{ movie.title }}</span>
        </router-link>

        </li>
      </ul>
      <ul class="px-3 v-else">
        <li v-if="noResultFound">No result found</li>
      </ul>
    </div>

      <AccountDropdown/>
  </div>
</template>

<script>
import AccountDropdown from './AccountDropdown.vue'

export default {


  components: {
    AccountDropdown
  },
  data() {
    return {
      searchResult: [],
      showSearchResult: false,

    }
  },

  mounted() {
    this.keyboardEvents()
    window.addEventListener('click', this.handleClickOutside)
  },

  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  },
  

  methods: {

    async fetchSearch(term) {
  try {
    const response = await this.$http.get('/search/movie?query=' + term);
    console.log('Search Results Response:', response.data);
    this.searchResult = response.data.results;
    this.showSearchResult = response.data.results ? true : false;
  } catch (error) {
    console.log('Error fetching search results:', error);
  }
},

    handleFocus() {
      if (this.searchTerm != '') {
        this.showSearchResult = true
      }
    },

    keyboardEvents() {
      let windowObj = this

      window.addEventListener('keypress', (e) => {
        if (e.keyCode == '47') {
          e.preventDefault()
          windowObj.$refs.searchBox.focus()
        }
      })
      window.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
          this.showSearchResult = false
        }
      })
    },

    debounceSearch(event) {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        if (event.target.value.length >= 2) {
          this.fetchSearch(event.target.value)
        }
      }, 100)
    },


    posterPath(poster_path) {
      if (poster_path) {
        return `https://image.tmdb.org/t/p/w500` + poster_path
      } else {
        return `https://via.placeholder.com/500x750`
      }
    },

    hideSearchResults() {
      this.showSearchResult = false
    },

    handleClickOutside(event) {
      if (
        this.showSearchResult &&
        !this.$refs.searchResultsContainer.contains(event.target)
      ) {
        this.hideSearchResults()
      }
    }
  }
}
</script>

<style></style>
