<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="sidebar"
    >
      <v-card-title class="brand-name" v-show="!miniVariant">
        SALCBEM
      </v-card-title>
      <hr class="horizontal-line" />
      <v-list>
        <!-- <v-list> -->
        <div v-for="(item, i) in items" :key="i">
          <v-list-item :to="item.to" router exact active-class="active_list">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </div>

        <!-- </v-list> -->
      </v-list>

      <template v-slot:append>
        <div v-show="!miniVariant">
          <v-card-subtitle class="logo-heading"> Powered by </v-card-subtitle>
          <div class="brand-logo-top">
            <img
              src="MBSA.png"
              alt="nex-plex-logo"
              class="brand-logo"
              width="25%"
            />
            <img
              src="NEXPLEX.png"
              alt="nex-plex-logo"
              class="brand-logo"
              width="25%"
            />
          </div>
          <div class="brand-logo">
            <v-img
              :src="require('~/assets/UITM.png')"
              height="50px"
              contain
            ></v-img>
          </div>
          <div class="brand-logo">
            <v-img
              :src="require('~/assets/SRI.png')"
              height="75px"
              contain
            ></v-img>
          </div>
          <div class="brand-logo">
            <v-img
              :src="require('~/assets/SEAIC.png')"
              height="40px"
              contain
            ></v-img>
          </div>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-show="$vuetify.breakpoint.mobile"
      />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "MBSA",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "OTHERS",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "SHAH ALAM LOW CARBON BUILDING PROFILING AND ENERGY MONITORING",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
.v-application {
  background-color: blue;
}

/* SIDEBAR */
.v-navigation-drawer {
  max-height: 100vh !important;
  /* color: #71b340; */
  /* width: 250px !important; */
}
.brand-name {
  padding-top: 25px;
  /* padding-bottom: 25px; */
  justify-content: center;
  font-weight: bolder;
  letter-spacing: 3px;
}
.horizontal-line {
  margin: 0px 60px 10px 60px;
}
.v-list {
  padding: 10px 0px;
}
.v-list-item {
  margin: 0 20px 15px 20px;
}
.v-list-item .v-list-item__title {
  font-family: "Montserrat", sans-serif;
  font-size: 0.85rem;
  color: black;
}
.v-icon.v-icon {
  color: black;
}
.v-list-item--active .v-list-item__title {
  /* color: #71b340 !important; */
  color: white !important;
}
.v-list-item--active .v-icon {
  color: white !important;
  /* color: #71b340 !important; */
}
.logo-heading {
  display: flex;
  justify-content: center;
  color: gray;
}
.brand-logo-top {
  display: flex;
  justify-content: space-evenly;
  /* padding-bottom: 10px; */
}
.brand-logo {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
}
/* END OF SIDEBAR */
.slick-list {
  overflow: visible !important;
}
button.slick-prev:before,
button.slick-next:before {
  color: #271f40 !important;
}
.slick-prev {
  margin-left: 15px;
  z-index: 100;
}

.slick-next {
  margin-right: 15px;
  z-index: 100;
}
.slick-dots {
  bottom: -35px !important;
}
@media (min-width: 960px) {
  .container {
    max-width: 96%;
  }
}
</style>
