<template>
  <div id="app">
  <Showcase v-bind:movie="movie"/>
    <Carrousel
      categoryName="Trending Movies"
      v-bind:items="trending"
    />
        <Carrousel
      categoryName="In Theaters"
      v-bind:items="inTheaters"
    />
  </div>
</template>


<script>
import Carrousel from "../components/Carrousel";
import axios from "axios";
import Showcase from "../components/Showcase";

export default {
  name: "home",
  components: {
    Carrousel,
    Showcase
  },
  data() {
    return {
      trending: [],
      inTheaters: [],
      movie: {}
    };
  },
  created() {
    
    axios
      .get(//Trending Movies
        "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=15d03a7e369cab34e74dc2b5087ab2e2"
      )
      .then(res => (this.trending = res.data.results))
      .catch(err => console.log(err));

      axios
      .get(//In Theaters
        "https://api.themoviedb.org/3/discover/movie?api_key=15d03a7e369cab34e74dc2b5087ab2e2&with_release_type=2|3&region=US"
      )
      .then(res => (this.inTheaters = res.data.results))
      .then(() =>  (this.movie = this.inTheaters[Math.floor(Math.random() * this.inTheaters.length)]))

      .catch(err => console.log(err));

  }
};
</script>


<style scoped>
</style>