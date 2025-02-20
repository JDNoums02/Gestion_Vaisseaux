import Vaisseaux from "@/components/CorpsDePage/Vaisseaux.vue";
import Systemes from "@/components/CorpsDePage/Systemes.vue";
import Biens from "@/components/CorpsDePage/Biens.vue";
import Accueil from "@/components/CorpsDePage/Accueil.vue";
import CorpsSpatiaux from "@/components/CorpsDePage/CorpsSpatiaux.vue";
import DetailsVaisseau from "@/components/CorpsDePage/DetailsVaisseau.vue";
import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

const routes = [
  { path: "/",
     name: "Accueil",
      component: Accueil 
    },
  {
    path: "/systemes/",
    name: "Systemes",
    component: Systemes,
  },
  {
    path: "/vaisseaux",
    name: "Vaisseaux",
    component: Vaisseaux,
  },
  {
    path: "/biens",
    name: "Biens",
    component: Biens,
  },
  {
    path: "/systemes/:symbol",
    name: "CorpsSpatiaux",
    component: CorpsSpatiaux,
  },
  {
    path:"/vaisseaux/details",
    name:"DetailsVaisseaux",
   
    component:DetailsVaisseau
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
