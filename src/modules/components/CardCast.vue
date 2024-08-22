<template>
  <div class="row q-col-gutter-md q-pa-sm">
    <div
      v-for="item in credits?.cast?.slice(0, 10)"
      :key="item?.id"
      class="col-6 col-sm-3 col-lg-2"
    >
      <q-card class="my-card full-height">
        <q-img :src="getUrl(item.profile_path)">
          <template v-slot:error>
            <div class="absolute-full flex flex-center">Error encountered</div>
          </template>
        </q-img>
        <q-card-section>
          <div class="text-h6">{{ item.name }}</div>
          <div class="text-subtitle2">{{ item.character }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useMovieCreditsQueries } from "../home/services";

const route = useRoute();
const id = ref(null);
onMounted(() => {
  id.value = route.params.id;
  refetchCredits();
});

const { data: credits, refetch: refetchCredits } = useMovieCreditsQueries({
  id,
});

const getUrl = (path) => `https://media.themoviedb.org/t/p/original/${path}`;
</script>
