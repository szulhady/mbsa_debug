<template>
  <section
    style="height: calc(100vh - 121px); overflow: auto"
    v-if="showDataAll && showDataMBSA"
  >
    <v-card
      v-for="(location, index) in locations2"
      :key="index"
      class="border2 my-5 mx-5"
      style="display: flex; flex-direction: column"
    >
      <v-card-subtitle
        class="compact"
        style="padding: 5px; text-shadow: 1px 1px #ffffff"
      >
        {{ location.building_id_data }}
      </v-card-subtitle>
      <v-row style="width: 100%; padding-bottom: 15px">
        <v-col
          style="padding-bottom: 0px; display: flex; flex-direction: row"
          cols="7"
        >
          <img src="~/assets/v0mu1i.svg" alt="" height="22" />
          <v-card-subtitle
            v-if="showData"
            class="compact"
            style="padding-left: 10px"
          >
            {{ location.ecacc }} kWH

            <!-- ⟳ {{ location.date }} -->
            <!-- moment(gettime).format("H:mm:ss"); -->
          </v-card-subtitle>
        </v-col>
        <v-col
          style="padding-bottom: 0px; display: flex; flex-direction: row"
          cols="5"
        >
          <img src="~/assets/ub4lok1.svg" alt="" height="22" />
          <v-card-subtitle
            v-if="showData"
            class="compact"
            style="padding-left: 10px"
          >
            {{ location.power }} kW
            <!-- ⟳ {{ location.date }} -->
            <!-- moment(gettime).format("H:mm:ss"); -->
          </v-card-subtitle>
        </v-col>
      </v-row>
      <!-- <v-row style="width: 100%">
        <v-col style="display: flex; flex-direction: row">
          <img src="~/assets/ub4lok1.svg" alt="" height="22" />
          <v-card-subtitle
            v-if="showData"
            class="compact"
            style="padding-left: 10px"
          >
            {{ location.power }} kW
          </v-card-subtitle>
        </v-col>
      </v-row> -->
    </v-card>
  </section>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      showDataAll: true,
      showDataMBSA: false,
      locations2: [
        {
          data: "waiting for data",
          power: "",
          energy: "",
          ts: "",
          id: "",
          lat: "",
          lng: "",
          name: "waiting for data",
        },
      ],
    };
  },
  methods: {
    getDataMBSA: function () {
      // console.log("run here");
      this.$axios
        // .$get("http://178.128.29.241/api/total/latestMBSA", {})
        // .$get("http://68.183.189.84:5000/api/total/latestMBSA", {})
        .$get("https://soap.txio.live/api/total/latestMBSA", {})
        // .$get(`${this.url}/api/total/latestMBSA`, {})
        .then((response) => {
          // console.log("haaa", response);
          for (let i = 0; i < response.length; i++) {
            response[i].date = moment(response[i].date).format(
              " D/MM/YYYY, hh:mm:ss"
            );
          }
          this.locations2 = response;
          // console.log("haaaa sini", this.locations2);
          // for (let i = 0; i < this.locations2.length; i++) {
          //   this.locations2[i].data = "Waiting for data";
          //   this.locations2[i].ts = "Waiting for data";
          // }
          // if (response.length > 0) {
          //   for (let i = 0; i < response.length; i++) {
          //     if (
          //       this.locations2[
          //         this.locations2.findIndex(
          //           (el) => el.id == response[i].building_id_data
          //         )
          //       ]
          //     ) {
          //       this.locations2[
          //         this.locations2.findIndex(
          //           (el) => el.id == response[i].building_id_data
          //         )
          //       ].data = response[i].total + " KWH";
          //       this.locations2[
          //         this.locations2.findIndex(
          //           (el) => el.id == response[i].building_id_data
          //         )
          //       ].ts = "Updated on " + response[i].date;
          //     }
          //   }
          // }
          // else {
          //   this.locations[
          //     this.locations.findIndex((el) => el.id == "MBSA")
          //   ].data = "0 KWH";
          // }
          console.log("hey");
          this.showDataMBSA = true;
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // getDataMBSA2: function () {
    //   console.log("run here");
    //   this.$axios
    //     // .$get("http://178.128.29.241/api/total/latestMBSA", {})
    //     // .$get("http://68.183.189.84:5000/api/total/latestMBSA", {})
    //     // .$get("https://soap.txio.live/api/total/latestMBSA", {})
    //     .$get(`${this.url}/api/total/latestMBSA`, {})
    //     .then((response) => {
    //       console.log(response);
    //       console.log(this.locations);
    //       // window.location.reload();
    //       // for (let i = 0; i < response.length; i++) {
    //       // console.log(this.locations[response[i].building_id - 1]);
    //       // this.locations[response[i].building_id - 1].data = response[i].ec;
    //       // console.log(response);
    //       if (response.length > 0) {
    //         // findIndex((el)=>el.Units=="kW")
    //         console.log(
    //           this.locations[this.locations.findIndex((el) => el.id == "MBSA")]
    //         );
    //         this.locations[
    //           this.locations.findIndex((el) => el.id == "MBSA")
    //         ].data = response[0].total + " KWH, Updated on" + response[0].date;
    //       } else {
    //         this.locations[
    //           this.locations.findIndex((el) => el.id == "MBSA")
    //         ].data = "0 KWH";
    //       }
    //       this.showDataMBSA = true;
    //       // }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
  async mounted() {
    // setTimeout(() => {
    this.getDataMBSA();
    setInterval(() => {
      this.getDataMBSA();
    }, 1000 * 60 * 5);
    // console.log(this.locations);
    // this.location = this.locations;
    // }, 3000);
  },
  computed: mapState({
    url: (state) => state.url,
    locations: (state) => state.locations,
    showData: (state) => state.showData,
  }),
  watch: {
    showData: function () {
      if (this.showData == true) {
        this.getDataMBSA();
      }
    },
  },
};
</script>

<style scoped>
.col {
  /* padding-top: 6px; */
  /* padding-bottom: 6px; */
}
.compact {
  padding: 0;
  color: aliceblue !important;
}
/* ::-webkit-scrollbar {
  margin: 10px;
  width: 15px;
  left: -100px;
} */

/* Track */
/* ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
} */

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #b30000;
} */

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 10px rgb(2, 90, 115);
  /* box-shadow: inset 0 0 10px 10px green; */
  border: solid 3px transparent;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px white;
  /* box-shadow: inset 0 0 10px 10px red; */
  border: solid 3px transparent;
}

.border {
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rebeccapurple;
  width: 200px;
  height: 100px; */
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 10px solid black;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 1s infinite; %7D @keyframes stroke %7B 0%25 %7B filter: invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(94%25) contrast(117%25); %7D 50%25 %7B filter: invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(50%25) contrast(117%25); %7D 100%25 %7B filter: invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(94%25) contrast(117%25); %7D %7D %3C/style%3E%3Cpath d='M0 10 L0 0 L30 0 L27 1 L1 1 L1 10 L 0 15' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M90 0 L100 0 L100 30 L99 25 L99 1 L85 1 L82 0 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 85 L0 100 L15 100 L10 99 L1 99 L1 85 L0 80' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M60 100 L100 100 L100 70 L99 78 L99 99 L68 99 L60 100 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 20 L0 60 L1 54 L1 38 L0 30 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 5 L0 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M100 5 L100 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 0 L95 0' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 100 L95 100' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E %3C/svg%3E")
    2;
  border-image-outset: 1;
}
.border2 {
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rebeccapurple;
  width: 200px;
  height: 100px; */
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 10px solid black;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 1s infinite; %7D @keyframes stroke %7B 0%25 %7B filter: invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(90%25) contrast(119%25); %7D 50%25 %7B filter: invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(70%25) contrast(119%25); %7D 100%25 %7B filter: invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(90%25) contrast(119%25); %7D %7D %3C/style%3E%3Cpath d='M0 10 L0 0 L30 0 L27 1 L1 1 L1 10 L 0 15' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M90 0 L100 0 L100 30 L99 25 L99 1 L85 1 L82 0 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 85 L0 100 L15 100 L10 99 L1 99 L1 85 L0 80' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M60 100 L100 100 L100 70 L99 78 L99 99 L68 99 L60 100 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 20 L0 60 L1 54 L1 38 L0 30 ' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M0 5 L0 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M100 5 L100 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 0 L95 0' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 100 L95 100' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E %3C/svg%3E")
    2;
  border-image-outset: 0.2;
}
</style>
