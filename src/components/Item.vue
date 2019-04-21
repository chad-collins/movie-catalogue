<template>
  <div>
    <router-link
      :to="{ 
            name: 'movie', 
            params: { 
                id: item.id,
            } 
        }"
    >
      <img v-bind:src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2//' + item.poster_path">
    </router-link>
    <p>{{item.title}}</p>
  </div>
</template>


<script>
export default {
  name: "Item",
  props: {
    item: {}
  }
};
</script>



<style scoped>
img {
  width: auto;
  height: 350px;
  transition: all .1s ease-in-out;
}

img:hover { 
  transform: scale(1.1); 
  }

p {
  color: white;
}
</style>



