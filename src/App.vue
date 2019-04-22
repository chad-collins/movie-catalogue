<template>
  <div id="app">
    <NavBar />
    <main>
    <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar    
  }
}
</script>

<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.4;
    background-color: rgb(21, 21, 24);
  }

p{
  color: rgb(136, 136, 136);
}

  main {
    margin-top: 80px;
  }

@media (min-width: 600px) {
  main {
    margin-left: 80px;
    margin-top: 0;
  }
}

</style>
