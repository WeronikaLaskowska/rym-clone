<template>
  <footer>
    <img class="desktop" src="@/public/footer.png" alt="Logo" />
    <img class="mobile" src="@/public/footer-mobile.png" alt="Logo" />
  </footer>
</template>

<style lang="scss" scoped>
@import "~/style/_variables.scss";
$grey950: map-get($colors, grey950);

.desktop {
  display: block;
  @media screen and (max-width: 1000px) {
    display: none;
  }
}
.mobile {
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
  }
}

footer {
  text-align: center;
  width: 100%;
  background: $grey950;
  padding-bottom: 150px;
  img {
    max-width: 1000px;
    margin: auto;
  }
}
</style>
