<template>
  <q-input
    filled
    bottom-slots
    v-model="inputSearch"
    label="Search"
    :dense="dense"
    debounce="1000"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon name="close" @click="inputSearch = ''" class="cursor-pointer" />
    </template>
  </q-input>
</template>
<script setup>
import { inject, ref } from "vue";
const dense = ref(false);

const inputSearch = inject("inputSearch")

</script>
