<template>
    <br><br><br><br><br>
  <h1>Corps spatiale</h1>
  <div class="container">
    <div class="card p-2 m-3 text-center bg-light">
      <h5 class="fw-bold fs-3">Système spacial : {{ corpsSpatial.name }}</h5>
      <p class="fw-bold fs-4">Symbol du système : {{ corpsSpatial.symbol }}</p>
      <p class="fw-bold fs-4">Nombre de planets : {{ corpsSpatial.planets.length }}</p>
      <div class="row p-3 justify-content-center">
        <div
          class="card bg-dark text-light col-4 m-2"
          v-for="planet in corpsSpatial.planets"
          style="width: 30%"
        >
          <div class="card-body">
            <div class="card-title fw-bold fs-4">Nom de planet : {{ planet.name }}</div>
            <button
              type="button"
              class="btn bg-danger fw-bold"
              @click="sendCoordinates(planet.x, planet.y)"
              :disabled="isSelected(planet.x, planet.y)"
            >
              Coordonées
            </button>
          </div>
        </div>
      </div>
      <router-link to="/systemes">
        <button type="button" class="btn bg-primary fw-bold ">Retour à la liste des Corps spatiaux</button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import systemes from "@/components/assets/systemes.json";
import { ref } from "vue";

const route = useRoute();
console.log(route.params.symbol)
let corpsSpatial = systemes.systems.find(
  (x) => x.symbol === route.params.symbol
);


const emit = defineEmits(["updateCoordinates"]);
const cordx = ref();
const cordy = ref();

function sendCoordinates(x, y) {
  cordx.value = x;
  cordy.value = y;
  emit("updateCoordinates", x, y);
}

function isSelected(x, y) {
  return cordx.value === x && cordy.value === y;
}

</script>
