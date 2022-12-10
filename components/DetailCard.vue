<template>
  <section>
    <v-card class="right elevation-10" style="border-radius: 20px">
      <v-card-title class="inner-right"> {{ title }} </v-card-title>
      <v-card-title class="description" style="padding-top: 10 !important">
        {{ description }}
      </v-card-title>
      <div class="icon">
        <div class="brand-logo" style="z-index: 100, overflow:visible">
          <img
            :src="require(`../assets/${icon}`)"
            alt="nex-plex-logo"
            class="brand-logo"
            width="100%"
            style="overflow: visible"
          />
        </div>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
  props: ["title", "icon", "description"],
};
</script>

<style scoped>
.v-card__title {
  padding: 10px;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 136px;
  overflow: visible;
}

.inner-right {
  width: 68%;
  justify-content: flex-end;
  font-size: 1rem;
  white-space: unset !important;
}

.description {
  font-size: 1.4rem;
}

.icon {
  position: absolute;
  top: -30px;
  left: 40px;
  width: 80px;
  height: 80px;

  /* background-color: red; */
}

/* @media (max-width: 1250px) {

  .icon {
    position: absolute;
    top: 50px;
    left: 30px;
    width: 60px;
    height: 30px;
  }
  .inner-right {
    width: 100%;
    justify-content: flex-end;
    font-size: 1rem;
    white-space: unset !important;
  }
}

@media (max-width: 800px) {
  .icon {
    display: none;
  }
  .inner-right {
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
}

@media (max-width: 440px) {
  .icon {
    display: none;
  }
}
@media (max-width: 440px) {
  .icon {
    display: none;
  }
} */
@media (max-width: 1000px) {
  .icon {
    position: absolute;
    top: -20px;
    left: 20px;
    width: 60px;
    height: 60px;
  }
  .inner-right {
    width: 100%;
    justify-content: flex-end;
    font-size: 1rem;
    white-space: unset !important;
  }
}
@media (max-width: 850px) {
  .icon {
    display: none;
  }
  .inner-right {
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
}

@media (max-width: 660px) {
  .description {
    font-size: 1.1rem;
  }
}
@media (max-width: 580px) {
  .description {
    font-size: 1.2rem;
  }
}
</style>
