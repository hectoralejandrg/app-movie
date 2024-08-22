<template>
  <q-card class="my-card full-height" flat bordered>
    <q-img :src="data?.image">
      <template v-slot:error>
        <div class="absolute-full flex flex-center">Error encountered</div>
      </template>
    </q-img>
    <q-card-section>
      <div class="text-h6 q-mb-xs q-mt-sm">{{ data?.title }}</div>
      <div class="row no-wrap items-center">
        <Rating :vote="item?.vote_average" :count="item?.vote_count" />
      </div>
      <q-btn
        v-if="noLink"
        fab
        color="primary"
        icon="link"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
        :to="`/movie/${item?.id}`"
        ><q-tooltip> Go to details </q-tooltip></q-btn
      >
      <q-btn
        v-if="!isFavorite"
        fab
        color="primary"
        icon="favorite"
        class="absolute"
        :style="iconPosition"
        @click="handleAdd()"
      ><q-tooltip> Add favorite </q-tooltip></q-btn>
      <q-btn
        v-else
        fab
        color="secondary"
        icon="thumb_down"
        class="absolute"
        :style="iconPosition"
        @click="handleRemove()"
      ><q-tooltip> Remove favorite </q-tooltip></q-btn>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { computed, inject } from "vue";
import Rating from "./Rating.vue";

const props = defineProps({
  item: { type: Object },
  noLink: { type: Boolean, default: true },
});

const favorites = inject("favorites");

const data = computed(() => {
  return {
    title: props.item?.title ?? props.item?.name,
    image: `https://image.tmdb.org/t/p/original/${props.item?.backdrop_path}`,
  };
});

const isFavorite = computed(() => {
  return favorites.value?.some((fav) => {
    return fav.id === props?.item?.id;
  });
});

const iconPosition = computed(() => {
  if (props?.noLink) return "top: 0; right: 80px; transform: translateY(-50%)";
  return "top: 0; right: 12px; transform: translateY(-50%)";
});

const handleAdd = () => {
  favorites.value = [...favorites.value, props?.item];
};
const handleRemove = () => {
  favorites.value = favorites.value?.filter(
    (fav) => fav.id !== props?.item?.id
  );
};
</script>
