<template>
  <section>
    <v-main class="section2">
      <!-- <v-container> -->
      <nuxt />
      <!-- </v-container> -->
    </v-main>
  </section>
</template>

<script>
export default {
  mounted: function () {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = "hidden";
  },
};
</script>

<style>
/* html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}


html::-webkit-scrollbar {
  width: 0;
  height: 0;
} */

.v-main__wrap::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -5;
  background: linear-gradient(180deg, rgba(50, 70, 80, 0.9) 0, #0d101b 100%);
}

.v-main__wrap::after {
  content: "";
  position: fixed;
  top: 0;
  height: 100%;
  left: 0;
  right: 0;
  z-index: -10;
  background-color: #273136;
  background-image: linear-gradient(
    180deg,
    rgba(50, 70, 80, 0.9) 0,
    #0d101b 100%
  );
  background-image: url("/cover.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: initial;
  height: 100%;
  transition: background 0.2s linear;
  background-size: cover;
}
.section2 {
  min-height: 100vh;
  min-width: 100vw;
  /* background: grey; */
  /* background-image: url("/52-Converted-01.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  /* background-size: 300px; */
  overflow: hidden;
  background: 0 0;
  position: relative;
  z-index: 1;
}

.section2::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
  background-image: url(~/assets/pattern.png);
  background-size: 4.6875rem;
  background-repeat: repeat;
  background-attachment: initial;
}
.section2 {
  /* background-color: rgba(88, 104, 124, 1); */
  background-color: #273136;
}
</style>
