<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="icon" full-width>
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Videos</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-video :ratio="16 / 9" :src="urlVideo" />
          <div class="q-pa-lg flex flex-center col-12">
            <q-pagination v-model="page" :max="data?.results?.length" input />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useGetVideoMovieQueries } from "../home/services";
import { useRoute } from "vue-router";

const icon = ref(false);
const id = ref(null);
const page = ref(1);

const route = useRoute();
onMounted(() => {
  id.value = route.params.id;
  refetch();
});

const { data, refetch } = useGetVideoMovieQueries({ id });

const urlVideo = computed(() => {
  const video = data?.value?.results[page.value - 1];
  if (video?.site?.toUpperCase() === "vimeo")
    return `https://vimeo.com/${video?.key}`;
  return `https://www.youtube.com/embed/${video?.key}`;
});

const viewButtonVideos = computed(() => {
  return data.value?.results?.length > 0;
});

defineExpose({
  icon,
  viewButtonVideos,
});
</script>
