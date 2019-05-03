<template>
  <div class="container">
    <div class="search-header">
      <div class="searchbar-wrapper">
        <div class="icon-wrapper">
          <i class="material-icons">search</i>
        </div>
        <input
          id="search"
          type="text"
          placeholder="Movie Title or Actor Name"
          v-model="query"
          v-on:input="runSearch(query)"
        >
    <h3 v-if="query.length >=2">Results for: "{{ query }}"</h3>
      </div>
    </div>
    <div class="list">
      <SingleCastMember
        v-bind:castMember="castMember"
        v-bind:key="castMember.id"
        v-for="castMember in actors"
      />
    </div>
    <div class="list">
      <SingleMovie
        class="movie"
        v-bind:movie="movie"
        v-bind:key="movie.id"
        v-for="movie in movies"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleMovie from "../components/SingleMovie.vue";
import SingleCastMember from "../components/SingleCastMember.vue";

export default {
  name: "SearchView",
  components: {
    SingleMovie,
    SingleCastMember
  },
  data() {
    return {
      query: "",
      movies: [],
      actors: []
    };
  },
  methods: {
    runSearch: function(query) {
      this.movies = [];
      this.actors = [];
      if (query.length > 2) {
        axios
          .get(
            "https://api.themoviedb.org/3/search/person?api_key=15d03a7e369cab34e74dc2b5087ab2e2&query=" +
              query
          )
          .then(res => (this.actors = res.data.results))
          .catch(err => console.log(err));

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



h3 {
  color: white;
  padding: 2rem;
  text-align: center;
}
.movie {
  margin: 0.3rem;
}

.search-header {
  display: flex;
  justify-content: center;
  padding: 3rem;
  align-items: center;
}
.searchbar-wrapper {
  padding: 0 0.8rem;
  display: grid;
  border-radius: 4px;
  background-color: rgb(61, 60, 68);
  height: 50px;
  width: 90vw;
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

.list {
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
