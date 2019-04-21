<template>
    <div >
        <div class="hero" v-bind:style="{ backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(255, 255, 255, 0) 100%), url(' + 'https://image.tmdb.org/t/p/original' + $route.params.backdrop_path + ')' }">
            <div class="info-wrapper">
                <p class="info--title">{{ this.movie.title }}</h2>
                <p class="info--date">{{ this.$route.params.release_date.substring(0, 4)}}</p>
                <p class="info--date">{{ this.$route.params.vote_average + ' out of 10' + ' (' + this.$route.params.vote_count + ' reviews)'}}</p>
                <p>{{ this.$route.params.overview }}</p>
            </div>
        </div> 
                   
    </div>
</template>

<script>
import Showcase from '../components/Showcase'
    
export default {
    name: "movies",
    components: {
        Showcase
    },
    data() {
    return {
      movie: {},
    };
  },
  created() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/{this.$route.params.id}?api_key=15d03a7e369cab34e74dc2b5087ab2e2'
      )
      .then(res => (this.movie = res.data))
      .catch(err => console.log(err));
  }
};

</script>


<style scoped>

    .hero{
        display: flex;
        align-items: center;
        padding: 2rem;
        width: calc(100vw - 80px);
        height: 70vh;
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(255, 255, 255, 0) 100%);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

    }

    .info-wrapper{
        width: 550px;
    }

      .info-wrapper>*{
        margin-top: 0.4rem;
    }

    .info--title{
        color: white;
        font-size: 3rem;
    }

    p{
        color:rgb(230, 230, 230);
        font-size: 1.1rem;
    }

    </style>
