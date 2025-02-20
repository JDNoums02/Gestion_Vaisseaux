<script setup>
// defineProps({details:Object});
import { ref } from "vue";
import { useRoute } from "vue-router";
import vaisseaux from "../assets/vaisseaux.json";
const route = useRoute();
console.log(route);
const details = vaisseaux.ships.find((x) => x.name === route.query.name);
console.log();
</script>
<template>
  <br />
  <br />
  <br /><br /><br /><br />
  <div class="container">
    <div class="row justify-content-center">
      <div class="card col-md-5 bg-dark text-light">
        <h2 class="text-center fw-bolder">Details du vaisseau</h2>
        <ol class="fs-4">
          <li>Nom: {{ details.name }}</li>
          <li>Class: {{ details.class }}</li>
          <li>type: {{ details.type }}</li>
          <li>Manufacturer: {{ details.manufacturer }}</li>
          <li>Max Cargo: {{ details["maximum cargo"] }}</li>
          <li>Plating: {{ details.plating }}</li>
          <li>Vitesse: {{ details.speed }}</li>
          <li>Armes: {{ details.weapons }}</li>
        </ol>
        <router-link to="/vaisseaux">
          <button type="button" class="btn bg-primary fw-bold">
            Retour à la liste des vaisseaux
          </button>
        </router-link>
        <br>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
