<template>
  <div>
    <Showcase v-bind:movie="movie" v-bind:videoId="videoId"/>
    <CastRow v-bind:cast="cast"/>
  </div>
</template>

<script>
import Showcase from "../components/Showcase";
import CastRow from "../components/CastRow";
import axios from "axios";

export default {
  name: "MovieView",
  components: {
    Showcase,
    CastRow
  },
  data() {
    return {
      movie: {},
      cast: [],
      videoId: {}
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.$route.params.id +
          "?api_key=15d03a7e369cab34e74dc2b5087ab2e2&append_to_response=credits"
      )
      .then(res => (this.movie = res.data))
      .then(() => (this.cast = this.movie.credits.cast))
      .catch(err => console.log(err));

    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.$route.params.id +
          "/videos?api_key=15d03a7e369cab34e74dc2b5087ab2e2"
      )
      .then(res => (this.videoId = res.data.results[0]))
      .catch(err => console.log(err));
  }
};
</script>

