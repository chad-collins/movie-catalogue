<template>
  <div class="containera">
    <h2>VIDEO</h2>
    <youtube @ready="ready" @playing="playing"></youtube>
  </div>
</template>

export default {
  name: "Video",
  props: {
    videoId: {}
  },
};
</script>

<style scoped>
.containera {
  background-color: blue;
  height: 300px;
  width: 300px;

  top: 0;
  left: 0;
}

h2 {
  color: white;
}

.video {
}
</style>
