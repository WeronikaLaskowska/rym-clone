<template>
  <div class="intro-box">
    <div class="intro-box__logo">
      <img style="width: 120px" src="@/public/logo.png" alt="Logo" />
    </div>
    <div class="intro-box__text">
      <div class="intro-box__text--header">
        Welcome to <span class="gradient">Rate Your Music</span>
      </div>
      <div class="intro-box__text--p">
        RYM is one of the largest music databases and communities online, which
        you can use in endless ways to discover new music.
        <span style="color: #275d8c"
          >Learn about some of the ways you can use RYM for music
          discovery.</span
        >
      </div>
    </div>
    <div class="intro-box__socials">
      <img style="width: 250px" src="@/public/socials.png" alt="Logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/style/_variables.scss";
$grey900: map-get($colors, grey900);

.intro-box {
  display: flex;
  padding: 20px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  &__text {
    &--header {
      font-size: 32px;
      color: $grey900;
    }
    &--p {
      margin-top: 20px;
      max-width: 800px;
      font-weight: 200;
    }
  }
  &__socials {
    align-self: flex-start;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    &__socials {
      align-self: center;
    }
  }
}
</style>
