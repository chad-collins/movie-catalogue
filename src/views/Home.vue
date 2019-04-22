<template>
  <div id="app">
    <Showcase v-bind:movie="movie"/>
    <Carrousel categoryName="Trending Movies" v-bind:items="trending"/>
    <Carrousel categoryName="Now In Theaters" v-bind:items="inTheaters"/>
    <Carrousel categoryName="Best of 90's Action" v-bind:items="ninetiesAction"/>
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
      ninetiesAction: [],
      movie: {}
    };
  },
  created() {
    axios
      .get(
        //Trending Movies
        "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=15d03a7e369cab34e74dc2b5087ab2e2"
      )
      .then(res => (this.trending = res.data.results))
      .catch(err => console.log(err));

    axios
      .get(
        //In Theaters
        "https://api.themoviedb.org/3/discover/movie?api_key=15d03a7e369cab34e74dc2b5087ab2e2&with_release_type=2|3&region=US"
      )
      .then(res => (this.inTheaters = res.data.results))
      .then(
        () =>
          (this.movie = this.inTheaters[
            Math.floor(Math.random() * this.inTheaters.length)
          ])
      )

      .catch(err => console.log(err));

    axios
      .get(
        //In Theaters
        "https://api.themoviedb.org/3/discover/movie?api_key=15d03a7e369cab34e74dc2b5087ab2e2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28"
      )
      .then(res => (this.ninetiesAction = res.data.results))
      .catch(err => console.log(err));
  }
};
</script>


<style scoped>
</style>