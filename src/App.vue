<template>
  <div id="app">
    <NavBar/>
    <main>
      <router-view/>
      <Footer/>
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


export default {
  name: "app",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/*<SCROLLBARS>-----*/
/* width */
::-webkit-scrollbar {
  width: 15px;
  height: 18px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #818181;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(108, 84, 197);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(69, 49, 141);
}
/*</Scrollbars>-----*/

body {
  font-family: "Roboto", sans-serif;
  line-height: 1.4;
  background-color: rgb(21, 21, 24);
}

p {
  color: rgb(138, 138, 138);
}

main {
  margin-top: 80px;
}

.links-img {
  width: auto;
  height: 32px;
}

.row-container {
  box-shadow: inset 0 2px 25px #000000;
  padding-top: 1rem;
  margin: 2rem 0;
}

button:hover{
  cursor: pointer;
}

@media (min-width: 600px) {
  main {
    margin-left: 4rem;
    margin-top: 0;
  }
}
</style>
