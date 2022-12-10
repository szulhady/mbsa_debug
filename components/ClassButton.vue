<template>
  <v-btn class="neon3" style="width: 9vw; height: 7vh; font-size: 0.8em">{{
    detail
  }}</v-btn>
</template>

<script>
export default {
  mounted() {},
  methods: {},
  props: ["detail"],
};
</script>

<style scoped>
.neon3 {
  /* margin-top: -150px; */
  font-size: var(--font-size);
  /* display: inline-block; */
  position: relative;
  cursor: pointer;
  border: var(--clr-neon) 0.125em solid;

  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.2em #fff7, 0 0 0.3em var(--clr-neon);
  box-shadow: inset 0 0 0.5em var(--clr-neon), 0 0 0.5em var(--clr-neon);
}

.neon3::before {
  content: "";
  position: absolute;
  top: 90%;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-neon);
  transform: perspective(1.2em) rotateX(5deg) scale(1, 0);
  filter: blur(0.5em);
  opacity: 0.6;
  pointer-events: none;
  transition: opacity 100ms linear;
}

.neon3::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--clr-neon);
  box-shadow: 0 0 2em var(--clr-neon);
  z-index: -1;
  opacity: 0;
  transition: opacity 100ms linear;
}

.neon3:hover::after {
  opacity: 1;
}
.neon3:hover,
.neon3:focus {
  color: white;
}
.neon3:hover::before {
  opacity: 0.8;
}
</style>
