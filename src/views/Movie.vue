<template>
  <div>
    <Showcase v-bind:movie="movie"/>
    <Carrousel categoryName="Cast" v-bind:items="items"/>
  </div>
</template>

<script>
import Showcase from "../components/Showcase";
import Carrousel from "../components/Carrousel";
import axios from "axios";

export default {
  name: "movie",
  components: {
    Showcase,
    Carrousel
  },
  data() {
    return {
      movie: {},
      items: []
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
      .then(() => (this.items = this.movie.credits.cast))
      .catch(err => console.log(err));
  }
};
</script>

