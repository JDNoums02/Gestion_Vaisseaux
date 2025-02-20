<script setup>
import { ref } from "vue";
import Entete from "./components/Entete.vue";
import CorpsDePage from "./components/CorpsDePage.vue";
import PiedPage from "./components/PiedPage.vue";
import { RouterView } from "vue-router";
const varX = ref(0);
const varY = ref(0);
function mettreAJourCoordonees(x, y) {
  varX.value = x;
  varY.value = y;
}
</script>

<template>
  <Entete :coordinatesX="varX" :coordinatesY="varY" />
  <main>
  <RouterView @updateCoordinates="mettreAJourCoordonees" />
  </main>
 
  <PiedPage />
</template>

<style scoped></style>
