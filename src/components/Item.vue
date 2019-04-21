<template>
  <div>
    <router-link
      :to="{ 
            name: 'movies', 
            params: { 
                id: item.id,
                adult: item.adult,
                backdrop_path: item.backdrop_path,
                genre_ids: item.genre_ids,
                original_language: item.original_language,
                original_title: item.original_title,
                overview: item.overview,
                popularity: item.popularity,
                poster_path: item.poster_path,
                release_date: item.release_date,
                title: item.title,
                video: item.video,
                vote_average: item.vote_average,
                vote_count: item.vote_count
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
}

p {
  color: white;
}
</style>


