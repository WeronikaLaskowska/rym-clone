<template>
  <div class="wrapper">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <Header />
    <main style="margin-top: 60px">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/navigation/Header.vue";
import Footer from "../components/navigation/Footer.vue";
export default {
  name: "user",
  components: { Header, Footer },
};
</script>

<style lang="scss" scoped>

.wrapper {
  position: relative;
}

</style>
