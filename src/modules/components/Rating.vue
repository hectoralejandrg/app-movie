<template>
  <q-rating
    size="18px"
    v-model="stars"
    :max="5"
    color="primary"
    :icon-half="iconHalf"
  />
  <span class="text-caption text-grey q-ml-sm"
    >{{ stars.toString().substring(0, 4) }} ({{ count }})</span
  >
</template>
<script setup>
import { computed } from 'vue';


const props = defineProps({
  vote: { type: Number },
  count: { type: Number },
});

const stars = computed(() => {
  return (props.vote * 5) / 10;
});

const iconHalf = computed(() => {
  return Math.round(stars.value) > stars.value ? "star_half" : "star_outline";
});

</script>
