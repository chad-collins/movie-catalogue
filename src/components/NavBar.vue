<template>
  <div class="navbar">
    <ul>
        <li><router-link to="/"><i class="fas fa-home"></i></router-link></li>
        <li><router-link to="/movies"><i class="fas fa-film"></i></router-link></li>
        <li><router-link to="/shows"><i class="fas fa-tv"></i></router-link></li>
        <li><router-link to="/"><i class="fas fa-search"></i></router-link></li>
    </ul>
    <ul>
        <li><router-link to="/about"><i class="fas fa-info-circle"></i></router-link></li>
    </ul>
  </div>
</template>



<script>

</script>

<style scoped>
    .navbar{
        background-color: black;
        border-right:1px solid rgb(46, 46, 46);
        width: 80px;
        height: 100vh;
        left:0;
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    ul{
        list-style: none;
    }

    li {
        margin: 3rem 0;
    }

    a{
        text-decoration: none;
        color: white;
        font-size: 2.3rem;
    }

    a:hover{
        -webkit-stroke-width: 5.3px;
        -webkit-stroke-color: #FFF;
        -webkit-fill-color: #FFF;
        text-shadow: 1px 0px 20px rgb(255, 255, 238); 
    }
</style>
