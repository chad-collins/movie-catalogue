<template>
  <div id="app">
    <Showcase v-bind:movie="movie" v-bind:videoId="videoId"/>
    <!-- <Carrousel categoryName="Trending Movies" v-bind:items="trending"/> -->
    <MovieRow categoryName="Now In Theaters" v-bind:movies="inTheaters"/>
    <MovieRow categoryName="Best of 90's Action" v-bind:movies="ninetiesAction"/>
  </div>
</template>


<script>
import MovieRow from "../components/MovieRow";
import axios from "axios";
import Showcase from "../components/Showcase";

export default {
  name: "home",
  components: {
    Showcase,
    MovieRow
  },
  data() {
    return {
      trending: [],
      inTheaters: [],
      ninetiesAction: [],
      movie: {},
      videoId:{}
    };
  },
  created() {
    // axios
    //   .get(
    //     //Trending Movies
    //     "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=15d03a7e369cab34e74dc2b5087ab2e2"
    //   )
    //   .then(res => (this.trending = res.data.results))
    //   .catch(err => console.log(err));

    axios
      .get(
        //In Theaters
        "https://api.themoviedb.org/3/discover/movie?api_key=15d03a7e369cab34e74dc2b5087ab2e2&with_release_type=2|3&region=US&append_to_response=videos"
      )
      .then(res => (this.inTheaters = res.data.results))
      .then(
        () =>
          (this.movie = this.inTheaters[
            Math.floor(Math.random() * this.inTheaters.length)
          ])
      )
      .then(() =>(axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.movie.id +
          "/videos?api_key=15d03a7e369cab34e74dc2b5087ab2e2"
      )
      .then(res => (this.videoId = res.data.results[0]))))
      .catch(err => console.log(err));

    axios
      .get(
        //In Theaters
        "https://api.themoviedb.org/3/discover/movie?api_key=15d03a7e369cab34e74dc2b5087ab2e2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28&append_to_response=videos"
      )
      .then(res => (this.ninetiesAction = res.data.results))
      .catch(err => console.log(err));

    
  }
};
</script>
