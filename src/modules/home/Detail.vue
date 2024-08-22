<template>
  <div class="row q-pa-sm">
    <div class="col-12 col-sm-4 col-lg-3">
      <q-card class="my-card" flat bordered>
        <q-img :src="data?.image">
          <template v-slot:error>
          <div class="absolute-full flex flex-center">Error encountered</div>
        </template>
        </q-img>
      </q-card>
    </div>
    <div class="col-12 col-sm-8 q-pt-lg q-pl-lg q-pr-lg">
      <div class="text-h6 text-weight-bolder">
        {{ data?.title }} ({{ data?.year }})
      </div>
      <div class="row no-wrap items-center">
        <Rating :vote="item?.vote_average" :count="item?.vote_count" />
      </div>
      <div class="text-h6 q-my-md">{{ data?.overview }}</div>
      <div class="q-my-md">
        <div class="text-h6 text-weight-bolder">Genres</div>
        <div class="row q-col-gutter-md">
          <div v-for="(genre, index) in item?.genres" :key="index" class="">
            <div class="col">
              <q-chip outline color="teal" text-color="white" icon="bookmark">
                {{ genre.name }}
              </q-chip>
            </div>
          </div>
        </div>
      </div>
      <div class="q-mt-lg">
        <q-btn
          v-if="dialoger?.viewButtonVideos"
          label="Videos"
          icon="play_circle"
          color="red"
          @click="openDialog()"
        />
        <q-btn
          v-if="!isFavorite"
          label="Add favorite"
          icon="favorite"
          color="primary"
          @click="handleAdd"
          class="q-ml-sm"
        />
        <q-btn
          v-else
          label="Remove favorite"
          icon="delete"
          color="secondary"
          @click="handleRemove"
          class="q-ml-sm"
        />
        <ModalVideo ref="dialoger" />
      </div>
    </div>
  </div>
  <div>
    <div class="text-h6 text-weight-bolder q-pa-sm">Cast</div>
    <CardCast />
  </div>
</template>
<script setup>
import { computed, inject, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useMovieByIdQueries } from "./services";
import Rating from "../components/Rating.vue";
import CardCast from "../components/CardCast.vue";
import ModalVideo from "../components/ModalVideo.vue";

const route = useRoute();

const id = ref(null);
const dialoger = ref(null);

const favorites = inject("favorites");

onMounted(() => {
  id.value = route?.params?.id;
  refetch();
});

const { data: item, refetch } = useMovieByIdQueries({ id });

const data = computed(() => {
  const year = new Date([item?.value?.release_date]).getFullYear();
  return {
    year,
    title: item?.value?.title ?? item?.value?.name,
    image: `https://image.tmdb.org/t/p/original/${item?.value?.poster_path}`,
    overview: item?.value?.overview,
  };
});
const isFavorite = computed(() => {
  return favorites?.value?.some((fav) => {
    return fav.id === Number(id.value);
  });
});
const openDialog = () => {
  dialoger.value.icon = true;
};

const handleAdd = () => {
  favorites.value = [...favorites?.value, item?.value];
};
const handleRemove = () => {
  favorites.value = favorites?.value?.filter(
    (fav) => fav.id !== Number(id?.value)
  );
};
</script>
