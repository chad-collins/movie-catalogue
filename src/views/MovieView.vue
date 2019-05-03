<template>
  <div>
    <Showcase v-bind:movie="movie" v-bind:videoId="videoId"/>

    <div class="movie-nav">
      <button class="button" @click="element = 'info'">
        <i class="material-icons">info</i>&nbsp;info
      </button>
      <button class="button" @click="element = 'photos'">
        <i class="material-icons">camera_alt</i>&nbsp;photos
      </button>
    </div>

    <!--OVERVIEW SECTION-->
    <div>
      <div class="info-container" v-if="element=='info'">
        <img
          class="movie-poster"
          v-bind:src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2//' + movie.poster_path"
        >

        <div class="info-wrapper">
          <h2>Synopsis</h2>
          <p>{{movie.overview}}</p>
          <ul class="stat-list">
            <li class="stat">
              <p class="stat--label">Runtime:</p>
              <p class="stat--content">{{ movie.runtime }} minutes</p>
            </li>
            <li class="stat">
              <p class="stat--label">Genres:</p>
              <p class="stat--content" v-bind:key="genre" v-for="genre in movie.genres">
                {{ genre.name }}
                &nbsp;
              </p>
            </li>
            <li class="stat">
              <p class="stat--label">Directed by:</p>
              <p class="stat--content" v-bind:key="director" v-for="director in directors">
                {{ director.name }}
                &nbsp;
              </p>
            </li>
            <li class="stat">
              <p class="stat--label">Budget:</p>
              <p class="stat--content">${{ formatNumber(movie.budget) }}</p>
            </li>
            <li class="stat">
              <p class="stat--label">Revenue:</p>
              <p class="stat--content">${{ formatNumber(movie.revenue) }}</p>
            </li>
            <li class="stat">
              <p class="stat--label">Production:</p>
              <p
                class="stat--content"
                v-bind:key="prod"
                v-for="prod in movie.production_companies"
              >{{ prod.name }}&nbsp;</p>
            </li>
          </ul>
        </div>
      <CastRow v-bind:cast="cast"/>
      </div>
      <div class="temp" v-if="element=='photos'">FEATURE COMING SOON</div>
    </div>
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
      directors: [],
      videoId: {},
      element: "info",
      element: "photos"
    };
  },
  methods: {
    formatNumber: function(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
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
      .then(
        () =>
          (this.directors = this.movie.credits.crew.filter(
            entry => entry.job === "Director"
          ))
      )
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

<style scoped>
.temp{
  text-align: center;
  margin: 3rem;
  color: white;
  font-size: 3rem;
}
.info-container {
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
}


@media (min-width: 600px) {
 .movie-poster {
  min-width: 320px;
  height: min-content;
  margin-right: 1rem;
}
  }
@media (max-width: 599px) {
  .movie-poster {
    display: none;
  }
}

.movie-nav {
  display: flex;
  justify-content: center;
}

.info-wrapper {
  flex: 1;
  flex-shrink: unset;
}
.info-wrapper > * {
  margin: 1rem;
}

button {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  margin: 1rem;
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


.stat--splitter {
  color: orange;
}
</style>