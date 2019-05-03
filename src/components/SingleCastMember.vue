<template>
    <div class="castmember">
  <router-link
    :to="{ 
            name: 'SingleActorView', 
            params: { 
                id: castMember.id,
                castMember: castMember
            } 
        }"
  >
      <img
        class="castmember-headshot"
        v-bind:src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2//' + castMember.profile_path"
        v-bind:alt="'Photo of ' + castMember.name"
      >
  </router-link>
      <p class="castmember-name">{{ castMember.name }}</p>
      <p class="castmember-role">{{ castMember.character }}</p>
    </div>
</template>


<script>
export default {
  name: "SingeCastMember",
  props: {
    castMember: {}
  }
};
</script>



<style scoped>
.castmember {
  height: auto;
  width: auto;
  margin: 1rem;
}

.castmember-headshot {
  width: auto;
  height: 200px;
  transition: all 0.1s ease-in-out;
}

.castmember-headshot:hover {
  transform: scale(1.03);
}

.castmember-name {
  color: white;
}
</style>



