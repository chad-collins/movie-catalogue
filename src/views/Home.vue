<template>
  <div id="app">
    <Carrousel
      categoryName="Trending Movies"
      v-bind:items="items"
      v-bind:swiperOptions="swiperOptions"
    />
  </div>
</template>


<script>
import Carrousel from "../components/Carrousel";
import axios from "axios";

export default {
  name: "home",
  components: {
    Carrousel
  },
  data() {
    return {
      items: [],
      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  created() {
    //Trending Movies
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=15d03a7e369cab34e74dc2b5087ab2e2"
      )
      .then(res => (this.items = res.data))
      .catch(err => console.log(err));
  }
};
</script>


<style scoped>
</style>
