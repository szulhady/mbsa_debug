<template>
  <section>
    <section class="all" v-if="$vuetify.breakpoint.lgAndUp">
      <div class="left">
        <!-- <div> -->
        <div class="top-right border">
          <!-- <Frame class="inside-container"> </Frame> -->
          <!-- <div class="inside-container2"> -->
          <v-card-subtitle class="top-right-header">
            TOTAL KWH
          </v-card-subtitle>
          <v-card-title class="top-right-info mb-3"> {{ total }} </v-card-title>
          <div style="height: 100%">
            <BarChartHorizontal id="bar-chart" />
          </div>
          <!-- </div> -->
        </div>
        <div class="middle-right border">
          <!-- <Frame class="inside-container"> </Frame> -->
          <!-- <div class="inside-container2"> -->
          <v-card-subtitle class="top-right-header">
            TOTAL KWH BY MONTH
          </v-card-subtitle>
          <div style="height: 100%">
            <BarChartVertical id="bar-chart-vertical" />
          </div>
          <!-- </div> -->
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div class="middle border">
        <div class="header-map-container">
          <v-card-subtitle
            style="color: white"
            class="header-map top-right-header"
          >
            MAP
          </v-card-subtitle>
          <div style="display: flex">
            <v-card-subtitle
              style="color: white; padding-right: 20px"
              class="header-map top-right-header"
            >
              SEA-IC
            </v-card-subtitle>
            <v-card-subtitle
              style="color: white"
              class="header-map top-right-header"
              >{{ time2 }}</v-card-subtitle
            >
          </div>
        </div>
        <Maps />
      </div>
      <div class="right">
        <div class="border">
          <v-card-subtitle
            style="color: white; padding: 10px 10px 5px 10px"
            class="header-map top-right-header"
          >
            LATEST DATA
          </v-card-subtitle>
          <DetailBuilding />
        </div>
      </div>
    </section>
    <section v-if="height == true">
      <section v-show="$vuetify.breakpoint.mdAndDown">
        <v-row justify="space-around">
          <v-col cols="auto">
            <!-- <v-card-title v-if="height" style="color: white">HELLo</v-card-title> -->
            <v-scroll-y-transition>
              <div class="layer" v-if="height" id="layer"></div>
            </v-scroll-y-transition>
            <v-scroll-y-transition>
              <v-card class="logout elevation-12" v-if="height">
                <v-card-title>
                  PLEASE ENLARGE BROWSER TO VIEW DASHBOARD
                </v-card-title>
              </v-card>
            </v-scroll-y-transition>
          </v-col>
        </v-row>
      </section>
    </section>
  </section>
</template>

<script>
import Frame from "~/components/Frame2";
import BarChartHorizontal from "~/components/BarChartHorizontal";
import BarChartVertical from "~/components/BarChartVertival";
import Maps from "~/components/Maps";
import DetailBuilding from "~/components/DetailBuilding.vue";
import Button from "~/components/Button.vue";
import moment from "moment";

import { mapState } from "vuex";
export default {
  middleware: ["auth", "isRegistered"],
  layout: "main",
  components: {
    Frame,
    BarChartHorizontal,
    BarChartVertical,
    Maps,
    DetailBuilding,
    Button,
  },
  data() {
    return {
      time2: "",
      dialog: "true",
      total: "",
    };
  },
  methods: {
    getTime: function () {
      let gettime = new Date();
      this.time2 = moment(gettime).format("H:mm:ss");
    },
    getData: function () {
      this.$axios
        .$get("https://soap.txio.live/api/total", {})
        // .$get(`${this.url}/api/total`, {})
        // .$get("http://104.248.158.194/api/total", {})
        .then((response) => {
          console.log(response);
          this.total = response.total;
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    setInterval(() => {
      this.getTime();
    }, 1000);
    this.getData();
    // console.log(this.$auth);
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return false;
        case "xl":
          return false;
      }
    },
    ...mapState({
      url: (state) => state.url,
    }),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&display=swap");

html,
body {
  margin: 0px;
  padding: 0px;
  overflow-y: hidden;
}

.all {
  width: 100vw;
  display: flex;
}
.left {
  width: 27vw;
  height: 100%;
  /* background-color: red; */
  /* padding-top: 15px; */
  padding-left: 5px;
  z-index: 2;
  overflow: hidden;
}
.middle {
  --b: 15px;
  --c: 5px;
  /* padding: var(--b); */
  padding-left: var(--b);
  padding-right: var(--b);
  /* border: calc(2 * var(--c)) solid #0000;
  outline: 2px dotted #dddddd;
  outline-offset: calc(-1.5 * var(--c));
  background: conic-gradient(from 90deg at 1px 1px, #0000 90deg, #dddddd 0); */
  width: 46vw;
  /* height: 100%; */
  /* height: 100vh; */
  /* height: 100vh; */
  /* padding-top: 20px; */
  /* background-color: yellow; */
  z-index: 1;
}
.right {
  width: 27vw;
  height: 100%;
  /* background-color: green; */
  z-index: 2;
}

.top-right {
  /* --b: 5px; */
  /* --c: 5px; */
  /* padding: var(--b);
  border: calc(2 * var(--c)) solid #0000;
  outline: 2px dotted #dddddd;
  outline-offset: calc(-1.5 * var(--c));
  background: conic-gradient(from 90deg at 1px 1px, #0000 90deg, #dddddd 0); */

  /* height: 100px; */
  /* width: 100%; */
  height: 45vh;
  overflow: hidden;
}
.middle-right {
  height: 35vh;
  overflow: hidden;
}
.top-right-header {
  font-weight: bold;
  padding: 5px 0 0 10px;
}
.top-right-info {
  font-weight: bold;
  padding: 0px 0 0 10px;
  font-size: 2rem;
  font-family: "JetBrains Mono" !important;
}
.header-map-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
}
.header-map {
  padding: 0;
}

.border {
  margin: 10px;
  padding: 0px 10px 10px 10px;
  color: azure;
  /* font-size: 24px; */
  border: 5px solid black;
  /* padding: 2rem 1rem; */
  /* min-height: 3em; */
  /* resize: both; */
  /* background: #ffd73e33; */
  /* border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 0.5s  linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23083361' /%3E%3Cstop offset='25%25' stop-color='%23094687' /%3E%3Cstop offset='50%25' stop-color='%231B5DA4' /%3E%3Cstop offset='100%25' stop-color='%230F355D' /%3E%3C/linearGradient%3E %3Cpath d='M0 3 L0 0 L3 0' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M97 0 L100 0 L100 3 ' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M0 97 L0 100 L3 100 ' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M97 100 L100 100 L100 97 ' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M0 10 L1 90' stroke-linecap='square' stroke='url(%23g)' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M99 10 L100 90' stroke-linecap='square' stroke='url(%23g)' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M7 0 L92 1' stroke-linecap='square' stroke='url(%23g)' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M7 100 L92 100' stroke-linecap='square' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E %3C/svg%3E")
    1; */
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 0.5s  linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23083361' /%3E%3Cstop offset='25%25' stop-color='%23094687' /%3E%3Cstop offset='50%25' stop-color='%231B5DA4' /%3E%3Cstop offset='100%25' stop-color='%230F355D' /%3E%3C/linearGradient%3E %3Cpath d='M0 3 L0 0 L3 0' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M97 0 L100 0 L100 3 ' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M0 97 L0 100 L3 100 ' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M97 100 L100 100 L100 97 ' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M0 5 L0 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M100 5 L100 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 0 L95 0' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 100 L95 100' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E %3C/svg%3E")
    2;
}

.inside-container {
  /* position: relative; */
  /* z-index: -1; */
  /* top: 0; */
  /* height: 500px; */
}
.inside-container2 {
  position: absolute;
  width: 30vw;
  top: 0;
  left: 0%;
  /* border: 20px solid; */
  /* background-image: url("~assets/frame.png");
  background-repeat: no-repeat;
  background-size: cover; */
  padding-left: 20px;
  padding-right: 20px;
}
.v-slide-group__wrapper {
  overflow-x: auto; /* Enables the horizontal scrollbar */
  /* Next lines hides scrollbar in different browsers for styling purposes */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.v-slide-group__wrapper::-webkit-scrollbar {
  display: none; /* Chrome opera and Safary */
  width: 0px;
  background: transparent;
}

button.slick-prev:before,
button.slick-next:before {
  color: white !important;
}
.slick-prev {
  margin-left: 9px;
  z-index: 100;
}

.slick-next {
  margin-right: 9px;
  z-index: 100;
}
.GMap__Wrapper {
  height: calc(100vh - 180px);
}
.layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  z-index: 999;
}
.logout {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  /* width: 350px; */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: mymove 1.3s;
  animation-timing-function: linear;
}
@keyframes mymove {
  from {
    bottom: 70%;
  }
  to {
    bottom: 40%;
  }
}
</style>
