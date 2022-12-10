<template>
  <section
    style="
      height: calc(100vh - 100px);
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <h1 style="text-shadow: 2px 2px #000000">
      Please contact admin to activate account
    </h1>
  </section>
</template>

<script>
export default {
  middleware: ["auth"],
  layout: "main",
  mounted() {
    console.log(this.$auth.$state.user);
  },
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
  overflow-y: hidden;
}
</style>
