<template>
  <div
    class="hero"
    v-bind:style="{ backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(255, 255, 255, 0) 100%), url(' + 'https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')' }"
  >
    <div v-if="!isHidden" class="vid-container">
      <button class="close-btn" @click="isHidden = !isHidden">X</button>
      <div class="vid-wrapper">
        <youtube :video-id="videoId.key" @ready="ready" @playing="playing" :player-vars="{ autoplay: 1 }"></youtube>
      </div>
    </div>
    <div class="info-wrapper">
      <p class="info--title">{{ movie.title }}</p>
      <p class="info--date">{{ movie.release_date.substring(0, 4)}}</p>
      <p class="info--date">{{ movie.vote_average + '/10' + ' (' + movie.vote_count + ' reviews)'}}</p>
      <p>{{ movie.tagline }}</p>
      <p>{{ movie.overview.substring(0, 250)}}...</p>
      <div class="video-container">
        <button class="show-btn" @click="isHidden = !isHidden"><i class="material-icons">play_arrow</i>Watch Trailer</button>
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
  },
  data() {
    return { isHidden: true };
  }
};
</script>


<style scoped>
.vid-container {
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 900000;
}

.vid-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.close-btn {
  border: none;
  color: white;
  background-color: inherit;
  font-size: 1.5rem;
  position: absolute;
  padding: 1rem;
  top: 0;
  z-index: 900001;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
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

.show-btn{
  background-color:rgb(108, 84, 197);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  color: white;
  margin-top: 2rem;
  padding: 0.7rem 1.2rem;
}

.material-icons{
  margin-right: 0.6rem;
}



.info-wrapper {
  max-width: 650px;
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
@media (min-width: 600px) {
}
</style>
