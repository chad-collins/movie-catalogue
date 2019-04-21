<template>
  <div class="swiper-container">
    <h4>{{ categoryName }}</h4>
    <swiper :options="swiperOptions">
      <swiper-slide v-bind:key="item.id" v-for="item in items.results">
        <Item v-bind:item="item"/>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>


<script>
import Item from "./Item.vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Carrousel",
  components: { Item },
  swiper,
  swiperSlide,

  props: {
    categoryName: String,
    items: [],
    swiperOptions: {}
  }
};
</script>


<style scoped>
h4 {
  color: white;
}

swiper {
  display: flex;
}

swiper-slide {
  margin: 0 0.2rem;
}

.swiper-container {
  height: 400px;
}

</style>