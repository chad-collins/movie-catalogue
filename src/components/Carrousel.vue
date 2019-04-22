<template>
  <div class="container">
    <h4>{{ categoryName }}</h4> -->
    <carousel :navigationEnabled="true" :mouse-drag="false" :perPage="10">
      <slide v-bind:key="item.id" v-for="item in items">
        <Item v-bind:item="item"/>
      </slide>
    </carousel>
  </div>
</template>


<script>
import Item from "./Item.vue";


export default {
  name: "Carrousel",
  components: { Item },
  

  props: {
    categoryName: String,
    items: []
  },

}

</script>


<style scoped>
h4 {
  color: white;
}

.container{
  width: calc(100vw - 92px);
}

</style>