<template>
  <div v-show="loader" style="width: fit-content; margin: 150px auto" class="">
    <spinner />
  </div>

  <div
    style="text-align: center"
    v-if="!reviews || !reviews.data || reviews.data.length === 0"
  >
    No data to display
  </div>

  <div style="margin: 0 auto; width: fit-content" v-else-if="!loader">
    <div style="font-size: 24px; margin-bottom: 40px" class="gradient">
      Featured reviews
    </div>
    <review-card
      v-for="review in reviews.data"
      :key="review.id"
      :review="review"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Spinner from "../common/Spinner.vue";
import { useReviewsList } from "../../hooks/useReviewsList";
import ReviewCard from "./ReviewCard.vue";

let reviews = ref();
let loader = ref(false);

onMounted(async () => {
  loader.value = true;
  const list = await useReviewsList();
  setTimeout(() => {
    //simulating api download time - to show loader
    loader.value = false;
  }, 2000);
  reviews.value = list;
});
</script>
