<template>
  <section style="display: flex">
    <div
      style="
        width: 30vw;
        height: calc(100vh - 100px) !important;

        position: relative;
      "
    >
      <div style="margin-left: 1vw">
        <div>
          <v-card-title>Select category</v-card-title>
          <ClassList />
        </div>
        <div>
          <div style="border-bottom: 4px dashed white; margin: 2vh 2vw"></div>
          <v-btn
            class="neon3"
            style="width: 29vw; height: 7vh; font-size: 0.8em"
            to="/"
            >BACK</v-btn
          >
        </div>
      </div>
    </div>
    <div
      style="width: 70vw; height: calc(100vh - 100px) !important; padding: 1vw"
    >
      <div class="map-con border">
        <v-card-title>Trends</v-card-title>
        <v-row
          class="data-box"
          style="padding-bottom: 5px; padding-left: 1vw; padding-right: 1vw"
        >
          <v-col cols="12" class="col-sm-6">
            <v-card style="background: rgba(0, 0, 0, 0.2)">
              <SingleLineChart
                title="ENERGY USAGE"
                :data="energy"
                yAxis="10"
                :max="energyMax"
                :min="energyMin"
                :avg="energyAvg"
                :time="energyYear"
                id="energy"
              />
            </v-card>
          </v-col>
          <v-col cols="12" class="col-sm-6">
            <v-card style="background: rgba(0, 0, 0, 0.2)">
              <SingleLineChart
                title="BUILDING ENERGY INDEX (BEI)"
                :data="bei"
                yAxis="10"
                :max="energyMax"
                :min="energyMin"
                :avg="energyAvg"
                :time="year"
                id="bei"
              />
              <!-- <div class="loading" v-if="loading1" :loading1="loading1">
                Loading...
              </div> -->
            </v-card>
          </v-col>
          <v-col cols="12" class="col-sm-6">
            <v-card style="background: rgba(0, 0, 0, 0.2)">
              <SingleLineChart
                title="ENERGY EFFICIENCY INDEX (EEI)"
                :data="eei"
                yAxis="10"
                :max="energyMax"
                :min="energyMin"
                :avg="energyAvg"
                :time="year"
                id="eei"
              />
              <!-- <div class="loading" v-if="loading2" :loading1="loading1">
                Loading...
              </div> -->
            </v-card>
          </v-col>
          <v-col cols="12" class="col-sm-6">
            <v-card style="background: rgba(0, 0, 0, 0.2)">
              <SingleLineChart
                title="CARBON EMISSION INTENSITY (CEI)"
                :data="cei"
                yAxis="10"
                :max="energyMax"
                :min="energyMin"
                :avg="energyAvg"
                :time="year"
                id="cei"
              />
              <!-- <div class="loading" v-if="loading3" :loading1="loading1">
                Loading...
              </div> -->
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
import ClassList from "~/components/ClassList.vue";
import SingleLineChart from "~/components/SingleLineChart";
import MultipleLineChart from "~/components/MultipleLineChart";
import { mapState } from "vuex";
export default {
  layout: "main",
  middleware: ["auth"],
  components: {
    ClassList,
    SingleLineChart,
    MultipleLineChart,
  },
  data() {
    return {
      energy: [],
      enerySum: [],
      energyMax: [],
      energyMin: [],
      energyAvg: [],
      energyYear: [],
      beiSum: [],
      beiMax: [],
      beiMin: [],
      beiAvg: [],
      beiYear: [],
      eeiSum: [],
      eeiMax: [],
      eeiMin: [],
      eeiAvg: [],
      eeiYear: [],
      ceiSum: [],
      ceiMax: [],
      ceiMin: [],
      ceiAvg: [],
      ceiYear: [],
      try4: false,
      bei: [],
      eei: [],
      cei: [],
      year: [],
    };
  },
  methods: {
    getEnergy: function (id) {
      this.$axios
        .$get(`https://soap.txio.live/api/data/building/energy`, {
          params: {
            building_id: id,
          },
        })
        .then((response) => {
          console.log(id);
          console.log(response);
          this.energy = [];
          this.energyMax = [];
          this.energyMin = [];
          this.energyAvg = [];
          this.energyYear = [];
          for (let i = 0; i < response.length; i++) {
            this.energy.push(response[i].totalec);
            this.energyMax.push(response[i].maxec);
            this.energyMin.push(response[i].minec);
            this.energyAvg.push(response[i].avgec);
            this.energyYear.push(response[i].year);
          }
          // let payload = {
          //   owner: response[0].owner,
          //   floor: response[0].floor,
          //   cei: response[0].carbon_emission_intensity,
          //   net_floor_area: response[0].net_floor_area,
          //   no_of_floors: response[0].no_of_floors,
          //   no_of_hospital_beds: response[0].no_of_hospital_beds,
          //   no_of_occupants: response[0].no_of_occupants,
          // };
          // this.setBuildingDetail(payload);
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getBei: function (id) {
      this.$axios
        .$get(`https://soap.txio.live/api/data/building/bei`, {
          params: {
            building_id: id,
          },
        })
        .then((response) => {
          console.log(response);
          this.bei = [];
          this.eei = [];
          this.cei = [];
          this.year = [];

          for (let i = 0; i < response.length; i++) {
            this.bei.push(response[i].totalec / response[i].net_floor_area);
            this.eei.push(response[i].totalec / response[i].no_of_occupants);
            this.cei.push(
              response[i].totalec * response[i].grid_electricity_emission_factor
            );
            this.year.push(response[i].year);
          }
          // let payload = {
          //   owner: response[0].owner,
          //   floor: response[0].floor,
          //   cei: response[0].carbon_emission_intensity,
          //   net_floor_area: response[0].net_floor_area,
          //   no_of_floors: response[0].no_of_floors,
          //   no_of_hospital_beds: response[0].no_of_hospital_beds,
          //   no_of_occupants: response[0].no_of_occupants,
          // };
          // this.setBuildingDetail(payload);
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    ...mapState({
      id: (state) => state.id,
    }),
  },
  watch: {
    id: function () {
      console.log(this.id);
      this.getEnergy(this.id);
      this.getBei(this.id);
      // this.getBei(this.id);
      // this.getEei(this.id);
      // this.getCei(this.id);
    },
  },
  mounted() {
    // this.getEnergy(this.id);
    this.try4 = false;
    // this.getBei(this.id);
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
.border {
  border: 5px solid black;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 0.5s  linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23083361' /%3E%3Cstop offset='25%25' stop-color='%23094687' /%3E%3Cstop offset='50%25' stop-color='%231B5DA4' /%3E%3Cstop offset='100%25' stop-color='%230F355D' /%3E%3C/linearGradient%3E %3Cpath d='M0 3 L0 0 L3 0' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M97 0 L100 0 L100 3 ' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M0 97 L0 100 L3 100 ' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M97 100 L100 100 L100 97 ' stroke-linecap='butt' stroke='%23eee' stroke-width='3' stroke-dasharray='388' /%3E%3Cpath d='M0 5 L0 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E%3Cpath d='M100 5 L100 95' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 0 L95 0' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388'/%3E%3Cpath d='M5 100 L95 100' stroke-linecap='butt' stroke='%23eee' stroke-width='1' stroke-dasharray='388' /%3E %3C/svg%3E")
    2;
}

.map-con {
  width: 100%;
}
</style>
