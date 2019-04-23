<template>
  <div
    class="hero"
    v-bind:style="{ backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(255, 255, 255, 0) 100%), url(' + 'https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')' }"
  >
    <div class="info-wrapper">
      <p class="info--title">{{ movie.title }}</p>
      <p class="info--date">{{ movie.release_date.substring(0, 4)}}</p>
      <p
        class="info--date"
      >{{ movie.vote_average + ' out of 10' + ' (' + movie.vote_count + ' reviews)'}}</p>
      <p>{{ movie.tagline }}</p>
      <p>{{ movie.overview }}</p>
      <div class="video-container">
      <youtube :video-id="videoId.key" @ready="ready" @playing="playing"></youtube>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Showcase",
  props: {
    movie: {},
    videoId: {}
  }
};
</script>


<style scoped>
.hero {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  height: 70vh;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 18%,
    rgba(255, 255, 255, 0) 100%
  );
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.video-container {

}

.info-wrapper {
  width: 550px;
}

.info-wrapper > * {
  margin-top: 0.4rem;
}

.info--title {
  color: white;
  font-size: 3rem;
}

p {
  color: rgb(230, 230, 230);
  font-size: 1.1rem;
}

@media (min-width: 600px) {
  .hero {
  }
}
</style>
