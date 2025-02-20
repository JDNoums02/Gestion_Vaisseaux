<template>
  <hr />
  <br />
  <br /><br /><br />
  <div class="contain bg-danger">
    <h2 class="text-center">Biens et Materiaux</h2>
    <br />
    <div class="container fs-5">
      <div class="row justify-content-evenly">
        <div class="col-3 mb-3 mb-sm-0" v-for="bien in sortedGoods">
          <div class="card bg-dark text-light">
            <div class="card-body text-center">
              <h5 class="card-title fs-5">Nom : {{ bien.name }}</h5>
              <p class="card-text">Symobol : {{ bien.symbol }}</p>
              <p class="card-text">
                Volume par Unité : {{ bien.volumePerUnit }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="mx-5">
          <button type="button" class="btn bg-primary fw-bold" @click="goBack">
            Retour à l’accueil
          </button>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
  <hr />
  <br /><br />
  <br />
  
</template>

<script setup>
import { computed, ref } from "vue";
import Biens from "../assets/biens.json";
import { useRoute, useRouter } from "vue-router";
const infoBiens = ref(Biens.goods);
//const props = defineProps(["biens"]);

const route = useRoute();
const router = useRouter();

const sortedGoods = computed(() => {
  if (route.query.order === "desc") {
    return infoBiens.value.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
  return infoBiens.value.sort((a, b) => (a.name > b.name ? 1 : -1));
});

const goBack = () => {
  router.back();
};


</script>

<style scoped>
h2 {
  font-size: 100px;
}
</style>
