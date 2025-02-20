<template>
  <br />
  <br><br>
  <hr />
  <h2 class="text-center" id="biens">Vaisseaux</h2>

  <div class="container">
    <div class="row justify-content-center">
      <div class="row justify-content-center">
        <label class="col-6" for="speed">Entrez la vitesse de filtrage</label>
        <br />
      </div>

      <input type="text" name="speed" v-model="speed" class="col-md-6 m-3" />
      <br />
      <br />
      <div class="row">
        <div class="col-md-3 my-2" v-for="vaisseau in filteredList">
          <div class="card bg-secondary text-light">
            <div class="card-body">
              <h5 class="card-title">Nom du vaisseau: {{ vaisseau.name }}</h5>
              <router-link :to="{ path: '/vaisseaux/details', query: { name: vaisseau.name } }">
                <button type="button" class="btn btn-danger" @click="getDetails(vaisseau)">
                  Afficher details
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script setup>
//import { parse } from "vue/compiler-sfc";
import DetailsVaisseau from "./DetailsVaisseau.vue";
import vaisseaux from "@/components/assets/vaisseaux.json";
import { computed, ref, watch } from "vue";
//const props = defineProps(["ships"]);

const infoVaisseaux = ref(vaisseaux.ships);

//const ship = ref(props.ships);
const speed = ref("");


let actuelVaisseau = ref();

function getDetails(vaisseau) {
  actuelVaisseau.value = vaisseau;
}

function afficherDetails(vaisseau) {
  return vaisseau === actuelVaisseau.value;
}

const filteredList=computed(()=>{
  
  let filteredShips = [];
  infoVaisseaux.value.forEach((e) => {
    if (e.speed >= parseInt(speed.value) || speed.value === "")
      filteredShips.push(e);
  });
  return filteredShips;

}) 
</script>

<style scoped>
h2 {
  font-size: 100px;
}
</style>
