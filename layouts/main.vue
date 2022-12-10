<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      height="46px"
      color="rgba(64, 86, 107, 1)"
    >
      <!-- <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-show="$vuetify.breakpoint.mobile"
      /> -->
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn> -->
      <img src="selangor.svg" alt="nex-plex-logo" width="30px" />
      <v-toolbar-title v-text="title" class="title-main font-shadow" />
      <v-spacer />
      <div class="user-name-container" v-if="loggedInUser">
        <!-- <v-icon>mdi-account-circle</v-icon> -->
        <h4 class="user-name-title font-shadow" style="color: white">
          {{ loggedInUser.username }}
        </h4>
        <!-- <h4>{{loggedInUser.topics}}</h4> -->
      </div>
      <div class="logout-container">
        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon v-if="loggedInUser" color="success">mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-scroll-y-transition>
        <div class="layer" v-if="rightDrawer" id="layer"></div>
      </v-scroll-y-transition>
      <v-scroll-y-transition>
        <v-dialog v-model="rightDrawer" max-width="290" class="logout">
          <v-card class="logout-card">
            <v-card class="logout-card2">
              <v-card-title style="color: #eee" class="text-h5">
                Logout?
              </v-card-title>

              <v-card-text style="color: #eee">
                Are you sure you want to logout?
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="red darken-1" text @click="logout"> Yes </v-btn>

                <v-btn color="green darken-1" text @click="cancel"> No </v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
        </v-dialog>
        <!-- <v-card class="logout elevation-12" v-if="rightDrawer">
          <v-card-title> Logout </v-card-title>
          <hr class="hr" />
          <v-card-subtitle> Are you sure? </v-card-subtitle>
          <div class="btn-div">
            <v-btn @click="logout" class="success logout-btn">Yes</v-btn>
            <v-btn @click="cancel" class="error logout-btn">Cancel</v-btn>
          </div>
        </v-card> -->
      </v-scroll-y-transition>
      <v-layout>
        <nuxt />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
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
      title:
        "SHAH ALAM LOW CARBON BUILDING PROFILING AND ENERGY MONITORING (SALCBEM)",
    };
  },
  methods: {
    ...mapMutations({
      setBuildingDetailClear: "setBuildingDetailClear",
    }),
    logout: async function () {
      this.setBuildingDetailClear();
      await this.$auth.logout();
      // this.setDetailActive("");
      // this.doUnSubscribe();
      // this.resetState()
      this.rightDrawer = false;
    },
    cancel: function () {
      this.rightDrawer = false;
      this.dialog2 = true;
    },
    track: function () {
      window.onclick = (event) => {
        const modal = document.getElementById("layer");
        if (event.target == modal) {
          this.rightDrawer = false;
        }
      };
    },
  },
  computed: {
    ...mapGetters(["loggedInUser", "isAuthenticated"]),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nova+Square&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

.v-application::before {
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
.v-application {
  /* background-color: rgba(88, 104, 124, 1); */
  background-color: #273136;
  /* background-image: ; */
  /* background: url("~assets/bg.jpg") no-repeat cover; */
  /* background: url("~assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
  /* require(`../assets/${icon}`) */
  /* background-color: #e5e5f7; */
  /* background-color: #273136; */
  /* opacity: 0.8; */
  z-index: 1;
}
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
.title-main {
  font-size: 1rem;
  color: white;
  padding-left: 20px;
}

/* logout */
.logout {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 300px;
}

.hr {
  margin: 0 20px;
  border-top: 10px solid rgb(189, 199, 199);
}

.btn-div {
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.logout-btn {
  width: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
}

/* layer */

.layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  z-index: 999;
}

.logout-card {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}
.logout-card2 {
  background-color: rgba(0, 0, 0, 0);
  /* backdrop-filter: blur(2px); */
  border: 3px solid rgba(64, 86, 107, 1);
}
</style>

<style>
.font-shadow {
  text-shadow: 2px 2px #000000;
}
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
