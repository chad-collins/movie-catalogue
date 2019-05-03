<template>
  <div>
    <div class="hero">
      <img
        v-bind:src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2//' + actor.profile_path"
        v-bind:alt="'Photo of ' + actor.name"
      >
      <div class="info-wrapper">
        <h2>{{ actor.name }}</h2>
        <ul class="stat-list">
          <li class="stat">
            <p class="stat--label">Birthday:</p>
            <p class="stat--content">{{ actor.birthday }}</p>
          </li>
          <li class="stat" v-if="actor.deathday != null">
            <p class="stat--label">Died:</p>
            <p class="stat--content">{{ actor.deathday }}</p>
          </li>
          <li class="stat" v-if="actor.place_of_birth != null">
            <p class="stat--label">Birthplace:</p>
            <p class="stat--content">{{ actor.place_of_birth }}</p>
          </li>
        </ul>
        <article>
          {{ actor.biography.substring(0, 500)}}
          <span
            v-if="actor.biography.length > 500 && expanded === false"
          >...</span><span v-if="expanded===true">{{ actor.biography.substring(500)}}</span>
        </article>
        <button v-if="actor.biography.length > 500 && expanded === false" @click="expanded = true">show more</button>
        <button v-if="actor.biography.length > 500 && expanded === true" @click="expanded = false">show less</button>
      </div>
    </div>
    <MovieRow categoryName="Acting Credits:" v-bind:movies="movies"/>
  </div>
</template>


<script>
import SingleMovie from "../components/SingleMovie.vue";
import MovieRow from "../components/MovieRow.vue";
import axios from "axios";

export default {
  name: "SingleActorView",
  components: { SingleMovie, MovieRow },
  data() {
    return {
      movies: [],
      actor: {},
      expanded: false
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/person/" +
          this.$route.params.id +
          "/movie_credits?api_key=15d03a7e369cab34e74dc2b5087ab2e2"
      )
      .then(res => (this.movies = res.data.cast))
      .catch(err => console.log(err));

    axios
      .get(
        "https://api.themoviedb.org/3/person/" +
          this.$route.params.id +
          "?api_key=15d03a7e369cab34e74dc2b5087ab2e2"
      )
      .then(res => (this.actor = res.data))
      .catch(err => console.log(err));
  }
};
</script>


<style scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: #45484d;
  background: -moz-linear-gradient(top, #45484d 0%, #000000 100%);
  background: -webkit-linear-gradient(top, #45484d 0%, #000000 100%);
  background: linear-gradient(to bottom, #45484d 0%, #000000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 );
}
.info-wrapper > * {
  margin: 1rem;
  max-width: 700px;
}

.hero img {
  height: 400px;
  width: auto;
}

article {
  color: white;
  max-width: 1000px;
}

li {
  margin: 0.5rem 0;
}

.stat {
  display: flex;
}

.stat--label {
  width: 100px;
  color: white;
}

.stat--content {
}
</style>
