<template>
  <div class="wrapper">
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    </head>
    <main>
      <slot></slot>
    </main>

    <footer>
      <img src="@/public/logo.png" alt="Logo" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "auth",
};
</script>

<style lang="scss" scoped>


.wrapper {
  position: relative;
}

footer {
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  img {
    width: 80px;
    height: 80px;

  }
}
</style>
