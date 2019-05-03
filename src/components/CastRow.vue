<template>
  <div class="row-container">
    <h3 class="row-title">Cast</h3>
    <div class="cast-row-wrapper">
      <SingleCastMember v-bind:castMember ="castMember" v-bind:key="castMember.id" v-for="castMember in cast"/>
    </div>
  </div>
</template>


<script>
import SingleCastMember from "./SingleCastMember.vue";

export default {
  name: "CastRow",
  components: { SingleCastMember },

  props: {
    categoryName: String,
    cast: []
  }
};
</script>


<style scoped>

.row-title {
  color: white;
  size: 2rem;
  margin-left: 1.5rem; 
}

.cast-row-wrapper > * {
  margin-left: 1.5rem;
}

.cast-row-wrapper > *:last-child {
  padding-right:1.5rem;
}

.cast-row-wrapper{
  display: flex;
  width: 100%;
  height: auto;
  overflow-y: hidden; /* Hide horizontal scrollbar */
  overflow-x: scroll; /* Add vertical scrollbar */
}

</style>