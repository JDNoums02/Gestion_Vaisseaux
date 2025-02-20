<template>
  <br />
  <footer id="piedPage" class="conteneur bg-dark text-light text-center">
    <div class="band"></div>
    <br />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 mx-auto">
          <h4>Astronautique</h4>
        </div>
        <div class="col-3 mx-auto">
          <h4>À propos</h4>
        </div>
        <div class="col-3 mx-auto">
          <h4>Contacter nous</h4>
        </div>
      </div>
      <hr />
      <div class="row justify-content-center fs-3">
        <h5 class="col-6">Jordan Noumedem</h5>
        <h5 class="col-6">Thiam Mouhamadou Rassoulilahi</h5>
      </div>
      <div class="row justify-content-center">
        <img v-if="actualHour >= 8 && actualHour <= 17" src="./assets/soleil.jpg" alt="" class="col-2" />
        <img v-else src="./assets/lune.jpg" alt="nothing" class="col-2" />
      </div>
      <br />
      <div class="row justify-content-center">
        Copywright &copy; Automne 2024
      </div>
      <br />
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";

const actualHour = ref(new Date().getHours());

</script>

<style>
footer {
  width: 99, 5%;
  height: 10%;
  position: relative;
  margin: auto;
}
.band {
  width: 100%;
  height: 30px;
  background-color: rgb(61, 43, 43);
}
img {
  width: 30px;
}
</style>
