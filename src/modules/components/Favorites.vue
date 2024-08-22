<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="dialog" position="right" full-height>
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-center q-mt-lg" v-if="favorites?.length===0">
            <div class="text-h6 text-weight-light">Empty favorite</div>
          </div>
          <div class="row q-col-gutter-md" v-else>
            <div v-for="item in favorites" :key="item?.id" class="col-12">
              <Cards :item="item" :noLink="false" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import Cards from "../components/CardMovies.vue";
import { inject, ref } from "vue";

const dialog = ref(false);
const favorites = inject("favorites");

defineExpose({
  dialog,
});
</script>
