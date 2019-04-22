<template>
  <div class="container">
    <h4>{{ categoryName }}</h4>
    <carousel :navigationEnabled="true" :mouse-drag="false" :perPage="10" :spacePadding="0" :loop="true" :paginationEnabled="false" :scrollPerPage="false">
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
  margin: 1rem 0;
}

slide{
  margin: 1rem;
}

</style>