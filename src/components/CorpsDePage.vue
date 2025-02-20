<template>
  <Systemes :systems="infoSystem" @updateCoordinates="sendEvent" />

  <Vaisseaux :ships="infoVaisseaux" />

  <Biens :biens="infoBiens" />
</template>

<script setup>
import Vaisseaux from "./CorpsDePage/Vaisseaux.vue";
import Systemes from "./CorpsDePage/Systemes.vue";
import Biens from "./CorpsDePage/Biens.vue";

import biens from "@/components/assets/biens.json";
import systemes from "@/components/assets/systemes.json";
import vaisseaux from "@/components/assets/vaisseaux.json";
import { ref } from "vue";

const infoSystem = ref(systemes.systems);
const infoVaisseaux = ref(vaisseaux.ships);
const infoBiens = ref(biens.goods);

const emit = defineEmits(["updateCoordinate"]);
function sendEvent(x, y) {
  emit("updateCoordinate", x, y);
}
</script>

<style>
</style>
