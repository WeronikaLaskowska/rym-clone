<template>
  <div>
    <introduction />
    <counters />
    <review-list />
  </div>
</template>

<script setup lang="ts">
import Introduction from "../components/dashboard/Introduction.vue";
import Counters from "../components/dashboard/Counters.vue";
import ReviewList from "../components/dashboard/ReviewList.vue";
//@ts-ignore
definePageMeta({
  layout: "user",
});
</script>


