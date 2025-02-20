<script setup>
const props =defineProps(['coordinatesX','coordinatesY']);
</script>

<template>
<div class="conatiner">
<!-- <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="./assets/Untitled.png" alt="Bootstrap" width="60" height="48">
    </a>
  </div>
  <h2 class="nav-item">{{ coordinate }}</h2> 
</nav> -->
<nav class="navbar fixed-top bg-body-tertiary">
  <div class="container-fluid">
  
    <a class="navbar-brand" href="#">
    <img src="./assets/logo.png"   class="d-inline-block align-top col-4" alt="">
    
  </a>
  <ul class="nav">
    <li class="nav-item">
  <router-link to="/"> <p class="nav-link ">Accueil</p></router-link>
 
  </li>

  <li class="nav-item">
    <router-link to="/systemes"><p class="nav-link">Systèmes spaciaux</p></router-link>
  </li>
  
  <li class="nav-item">
  <router-link to="/vaisseaux"> <p class="nav-link">Vaisseaux</p></router-link>
  </li>
  <li class="nav-item">
  <router-link to="/biens"><p class="nav-link">Biens et Materiaux</p></router-link>
    
  </li>
  <li class="nav-item">

  </li>
</ul>
<h1 class="nav-item disabled m-4" href="#">TP1-VueJs</h1>
<h4 class="nav-item text-dark" >coordonée-X: {{ coordinatesX }} coordonée-Y: {{ coordinatesY }}</h4> 


<p></p>
  </div>
</nav>

</div>




</template>

<style scoped>
h1{
    font-size: 50px;
    text-align: center;
    font-family: "Open Sans", sans-serif;
}
p:hover{
border-bottom: 2px;
border-left: 2px;
border-radius: 5px;
}

</style>