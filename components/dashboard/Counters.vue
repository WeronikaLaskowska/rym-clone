<template>
  <div class="counters">
    <div class="counters__element"><span>1,729,153</span> Artists</div>
    <div class="counters__element"><span>6,089,834</span> Releases</div>
    <div class="counters__element"><span>136,400</span> Labels</div>
    <div class="counters__element"><span>131,734,068</span> Ratings</div>
    <div class="counters__element"><span>3,173,924</span> Reviews</div>
    <div class="counters__element"><span>744,851</span> Lists</div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/style/_variables.scss";
$grey350: map-get($colors, grey350);
$grey400: map-get($colors, grey400);

.counters {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  font-weight: 800;
  padding: 10px 0;
  border-top: 1px solid $grey350;
  border-bottom: 1px solid $grey350;
  margin-bottom: 50px;
  span {
    color: $grey400;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
