<template>
  <div class="review">
    <div class="review__left">
      <img
        @click="() => $router.push(`/albums/${review.id}`)"
        :src="review.url"
      />
      <div class="review__left__rating">
        <span>{{ review.overall }}</span> from {{ review.ratings }} ratings
      </div>
      <div class="review__left__genres">
        <h2>Genres</h2>
        <div>{{ review.genres }}</div>
      </div>
      <div class="review__left__descriptors">
        <h2>Descriptors</h2>
        <div>{{ review.descriptors }}</div>
      </div>
      <div class="review__left__streaming">
        <img src="@/public/streaming.png" />
      </div>
    </div>
    <div class="review__right">
      <div class="review__right__title">
        {{ review.title }} <span>({{ review.year }})</span>
      </div>
      <div class="review__right__artist">
        {{ review.artist }}
      </div>
      <div class="review__right__rating">
        <stars :rating="review.rating" />
      </div>
      <div class="review__right__description">
        {{ review.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Review } from "@/models/review";
import Stars from "./Stars.vue";

interface PropsI {
  review: Review;
}
const { review } = defineProps<PropsI>();
</script>

<style scoped lang="scss">
@import "~/style/_variables.scss";

$secondary: map-get($colors, secondary);
$grey100: map-get($colors, grey100);
$grey800: map-get($colors, grey800);

.review {
  display: flex;
  max-width: 1000px;
  background: $grey100;
  margin: 20px;
  padding: 20px;
  gap: 20px;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
  &__left {
    img {
      width: 305px;
      cursor: pointer;
    }
    &__rating {
      color: $grey800;
      font-size: 18px;
      text-align: left;
      margin: 20px 0;
      span {
        font-weight: 800;
      }
    }
    &__genres,
    &__descriptors {
      h2 {
        font-size: 14px;
        font-weight: 700;
        color: $grey800;
      }
      div {
        margin-bottom: 30px;
      }
    }
  }
  &__right {
    &__title {
      font-size: 32px;
      color: $secondary;

      span {
        color: $grey800;
        font-size: 24px;
      }
    }
    &__artist {
      color: $secondary;
      font-size: 24px;
      margin: 10px 0 15px 0;
      font-weight: 700;
    }
    &__description {
      margin-top: 40px;
      font-size: 16px;
      color: $grey800;
      margin-right: 50px;
      line-height: 25px;
    }
  }
}
</style>
