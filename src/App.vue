<template>
  <q-layout view="hhh lpR lfr">
    <q-header class="bg-primary text-white q-px-sm" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          App Movies
        </q-toolbar-title>

        <q-btn @click="openFav()" flat round dense icon="favorite">
          <q-badge color="red" floating>{{ favorites.length }}</q-badge
          ><q-tooltip
            class="bg-purple text-body2"
            anchor="center left"
            self="center right"
          >
            Open favorite
          </q-tooltip></q-btn
        >
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/movie" label="Movies" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <div class="q-pa-sm">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
  <Favorites ref="dialogFav" />
</template>

<script setup>
import Favorites from "./modules/components/Favorites.vue";
import { onMounted, provide, ref, watch } from "vue";

const favorites = ref([]);
const dialogFav = ref(null);

provide("favorites", favorites);

onMounted(() => {
  favorites.value = JSON.parse(localStorage.getItem("favorites"));
});

watch(favorites, (newFav) => {
  localStorage.setItem("favorites", JSON.stringify(newFav));
});

const openFav = () => {
  dialogFav.value.dialog = true;
};
</script>

<style scoped></style>
