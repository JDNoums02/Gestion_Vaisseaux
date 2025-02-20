<template>
  <br />
  <br /><br />
  <br />
  <br />

  <div class="conteneur bg-dark text-light">
    <h2 class="text-center">Systèmes Spatiaux</h2>
    <br />
    <div class="container fs-5">
      <div class="row p-3" v-for="system in infoSystem">
        <div class="container">
          <router-link :to="{name:'CorpsSpatiaux',params:{symbol:system.symbol }}"> 
          <div class="card p-2 m-3 text-center bg-light">
           <h5 class="fw-bold fs-4">Système spacial : {{ system.name }}</h5> 
            <p class="fw-bold fs-4">Symbol du système : {{ system.symbol }}</p>
            <p class="fs-3">Nombre de planets : {{ system.planets.length }}</p>
            <!-- <div class="row p-3">
              <div
                class="card bg-dark text-light col-4 m-2"
                v-for="planet in system.planets"
                style="width: 30%"
              >
                <div class="card-body">
                  <div class="card-title">
                    Nom de planet : {{ planet.name }}
                  </div>
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
            </div> -->
          </div>
        </router-link> 
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
// defineProps({
//   systems: Array,
// });
const route=useRoute()
import systemes from "@/components/assets/systemes.json";
const infoSystem = ref(systemes.systems);

// const emit = defineEmits(["updateCoordinates"]);
// const cordx = ref();
// const cordy = ref();

// function sendCoordinates(x, y) {
//   cordx.value = x;
//   cordy.value = y;
//   emit("updateCoordinates", x, y);
// }

// function isSelected(x, y) {
//   return cordx.value === x && cordy.value === y;
// }
</script>

<style scoped>
h2 {
  font-size: 100px;
}
*{
  text-decoration: none;
  font-weight: bold;
}
</style>
