<template>
  <div id="app">
    <Showcase v-bind:movie="movie" v-bind:videoId="videoId"/>
    <!-- <Carrousel categoryName="Trending Movies" v-bind:items="trending"/> -->
    <MovieRow categoryName="Now Trending" v-bind:movies="trending"/>
    <MovieRow categoryName="Best of 90's Action" v-bind:movies="row2"/>
  </div>
</template>


<script>
import MovieRow from "../components/MovieRow";
import axios from "axios";
import Showcase from "../components/Showcase";
import { apiKey } from "../utils/Store.js"
import { get90sAction } from "../utils/GetMovies.js"

export default {
  name: "home",
  components: {
    Showcase,
    MovieRow
  },
  data() {
    return {
      trending: [],
      row2: [],
      movie: {},
      videoId: {}
    };
  
  },
  created() {
  

    axios
      .get(
        //Popular
        "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&with_release_type=2|3&region=US&append_to_response=videos"
      )
      .then(res => (this.trending = res.data.results))
      .then(
        () =>
          (this.movie = this.trending[
            Math.floor(Math.random() * this.trending.length)
          ])
      )
      .then(() =>
        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              this.movie.id +
              "/videos?api_key=" + apiKey
          )
          .then(res => (this.videoId = res.data.results[0]))
      )
      .catch(err => console.log(err));

      

    axios
    .get(
      //90s Action
      "https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28&append_to_response=videos"
    )
    .then(res => (this.row2 = res.data.results))
    .catch(err => console.log(err));
  }
};
</script>
