<template>
  <div>
    <div class="search-header">
      <div class="searchbar-wrapper">
        <div class="icon-wrapper">
          <i class="material-icons">search</i>
        </div>
        <input
          id="search"
          type="text"
          placeholder="Movie Title"
          v-model="query"
          v-on:input="runSearch(query)"
        >
      </div>
    </div>
    <div class="container">
      <div class="list">
        <SingleMovie
          class="movie"
          v-bind:movie="movie"
          v-bind:key="movie.id"
          v-for="movie in movies"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleMovie from "../components/SingleMovie.vue";

export default {
  name: "SearchView",
  components: { SingleMovie },
  data() {
    return {
      query: "",
      movies: []
    };
  },
  methods: {
    runSearch: function(query) {
      if (query.length > 3) {
        this.movies = [];
        axios
          .get(
            "https://api.themoviedb.org/3/search/movie?api_key=15d03a7e369cab34e74dc2b5087ab2e2&language=en-US&query=" +
              query
          )
          .then(res => (this.movies = res.data.results))
          .catch(err => console.log(err));
      }
    }
  }
};
</script>

<style scoped>
.movie {
  margin: 0.3rem;
}
.container {
  margin: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.search-header {
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-items: center;
}
.searchbar-wrapper {
  padding: 0 0.8rem;
  display: grid;
  border-radius: 4px;
  background-color: rgb(61, 60, 68);
  height: 50px;
  width: 80vw;
}
input {
  color: white;
  height: inherit;
  padding: 0 2rem;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: -1;
  z-index: 34;
  background: none;
  border: none;
}

.icon-wrapper {
  display: flex;
  height: inherit;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: -1;
  z-index: 34;
}
.material-icons {
  color: white;
}
</style>
