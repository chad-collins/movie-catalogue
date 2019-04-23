<template>
    <router-link
      :to="{ 
            name: 'MovieView', 
            params: { 
                id: movie.id,
            } 
        }"
    >
      <img v-bind:src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2//' + movie.poster_path">
    </router-link>
</template>


<script>
export default {
  name: "SingeMovie",
  props: {
    movie: {}
  }
};
</script>



<style scoped>
img {
  height: 350px;
  width: auto;
  margin: 0.1rem;
  padding-bottom: 1rem;
  transition: all 0.1s ease-in-out;
}

img:hover {
  transform: scale(1.03);
}

p {
  color: white;
}
</style>



