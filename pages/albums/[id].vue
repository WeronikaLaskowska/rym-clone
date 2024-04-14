<template>
  <div v-show="loader" style="width: fit-content; margin: 150px auto" class="">
    <spinner />
  </div>

  <div style="margin: 0 auto; width: fit-content" v-if="!loader && review">
    <review-card :review="review" />
  </div>
</template>

<script setup lang="ts">
import { useReviewsList } from "~/hooks/useReviewsList";
import Spinner from "../../components/common/Spinner.vue";
import ReviewCard from "../../components/dashboard/ReviewCard.vue";

const route = useRoute();
const { id } = route.params;
let review = ref();
let loader = ref(false);

onMounted(async () => {
  loader.value = true;
  const list = await useReviewsList();
  setTimeout(() => {
    //simulating api download time - to show loader
    loader.value = false;
  }, 2000);
  const found = list?.data.find((el) => id.toString() === el.id.toString());
  if (!found) return;

  review.value = found;
});

//@ts-ignore
definePageMeta({
  layout: "user",
});
</script>
