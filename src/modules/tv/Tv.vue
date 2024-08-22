<template>
  <div>
    <div v-if="isLoading">
      <div class="q-pa-md flex flex-center">
        <q-circular-progress
          indeterminate
          size="75px"
          :thickness="0.6"
          color="lime"
          center-color="blue-8"
          class="q-ma-md"
        />
      </div>
    </div>
    <div v-else-if="isError">Error: {{ error.message }}</div>
    <div v-else class="row q-col-gutter-md">
      <div
        v-for="item in data.results"
        :key="item.id"
        class="col-12 col-sm-4 col-md-3"
      >
        <Cards :item="item" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Cards from "../components/CardMovies.vue";
import { useTvQueries } from "./services";

const { data, isLoading, isError } = useTvQueries({ params: { page: 1 } });
</script>
