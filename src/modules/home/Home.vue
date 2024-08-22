<template>
  <div>
    <div v-if="isLoading">
      <div class="q-pa-md flex flex-center">
        <q-spinner color="primary" size="3em" :thickness="10" />
      </div>
    </div>
    <div v-else-if="isError">Error: {{ error?.message }}</div>
    <div v-else class="row q-col-gutter-md">
      <div class="col-12">
        <InputSearch />
      </div>
      <div v-if="!viewSearch" class="row q-col-gutter-md">
        <div
          v-for="item in data.results"
          :key="item.id"
          class="col-12 col-sm-4 col-md-3"
        >
          <Cards :item="item" />
        </div>
        <div class="q-pa-lg flex flex-center col-12">
          <q-pagination v-model="page" :max="data.total_pages" input />
        </div>
      </div>
      <div v-else class="row q-col-gutter-md">
        <div
          v-for="item in dataSearch.results"
          :key="item.id"
          class="col-12 col-sm-4 col-md-3"
        >
          <Cards :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, provide, ref, watch } from "vue";
import Cards from "../components/CardMovies.vue";
import InputSearch from "../components/InputSearch.vue";
import { useMoviesQueries, useSearchMoviesQueries } from "./services";

const inputSearch = ref("");
const page = ref(1);

provide("inputSearch", inputSearch);

const { data: dataSearch, refetch } = useSearchMoviesQueries({
  query: inputSearch
});

const { data, isLoading, isError, error } = useMoviesQueries({
  page,
});

const viewSearch = computed(() => {
  return Boolean(inputSearch.value);
});

watch(inputSearch, () => {
  if (viewSearch.value) refetch();
});
</script>
