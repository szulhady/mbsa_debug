<template>
  <section style="display: flex">
    <div class="left">
      <div v-for="(detail, index) in buildingDetails" :key="index" class="flex">
        <v-card
          class="elevation-5 rounded-lg card"
          :id="index"
          style="
            height: 13vh;
            width: 100vw;
            margin-bottom: 3vh;
            display: flex;
            background: rgba(0, 0, 0, 0.4);
          "
          @click="editDetails"
        >
          <div
            style="
              width: 35%;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <img :src="detail.image" width="70%" />
          </div>
          <div
            style="
              width: 65%;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              font-size: 1em;
              text-transform: uppercase;
            "
          >
            <v-card-subtitle
              style="
                font-size: 1em;
                text-transform: uppercase;
                text-overflow: ellipsis;
                overflow: hidden;
                width: 100%;
                white-space: nowrap;
              "
            >
              {{ detail.desc }}
            </v-card-subtitle>
            <v-card-subtitle
              style="
                font-size: 1.2em;
                text-transform: uppercase;
                text-overflow: ellipsis;
                overflow: hidden;
                width: 100%;
                white-space: nowrap;
              "
            >
              {{ detail.data }}
            </v-card-subtitle>
          </div>
        </v-card>
      </div>
      <div class="button-container">
        <v-btn
          class="neon"
          style="
            width: 40%;
            height: 7vh;
            font-size: 0.7em;
            display: flex;
            justify-content: center;
            text-align: center;
          "
          to="/"
        >
          Back
        </v-btn>
        <!-- <v-btn
          class="neon"
          style="
            width: 40%;
            height: 7vh;
            font-size: 0.7em;
            display: flex;
            justify-content: center;
            text-align: center;
          "
          @click="dialog2 = true"
        >
          Add data
        </v-btn> -->
        <v-btn
          class="neon"
          style="
            width: 40%;
            height: 7vh;
            font-size: 0.7em;
            display: flex;
            justify-content: center;
            text-align: center;
          "
          @click="details = !details"
        >
          {{ details ? "Details" : "Trends" }}
        </v-btn>
      </div>
    </div>
    <div class="right">
      <transition name="fade" mode="out-in">
        <div class="map-con border" v-if="details" key="first">
          <v-card-title>TRENDS</v-card-title>

          <v-row
            class="data-box"
            style="padding-bottom: 5px; padding-left: 1vw; padding-right: 1vw"
          >
            <v-col cols="12" class="col-sm-6">
              <v-card style="background: rgba(0, 0, 0, 0.2)">
                <!-- <MultipleLineChart
                title="ENERGY USAGE"
                data="10"
                yAxis="10"
                :max="energyMax"
                :min="energyMin"
                :avg="energyAvg"
                :time="energyYear"
                id="energy"
              /> -->
                <SingleLineChart
                  title="ENERGY USAGE"
                  :data="energy"
                  yAxis="KWH"
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
                <!-- <MultipleLineChart
                  title="BUILDING ENERGY INDEX (BEI)"
                  data="10"
                  yAxis="10"
                  :max="beiMax"
                  :min="beiMin"
                  :avg="beiAvg"
                  :time="beiYear"
                  id="bei"
                /> -->
                <SingleLineChart
                  title="BUILDING ENERGY INDEX (BEI)"
                  :data="bei"
                  yAxis="KWH/sq m"
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
                <!-- <MultipleLineChart
                  title="ENERGY EFFICIENCY INDEX (EEI)"
                  data="10"
                  yAxis="10"
                  :max="eeiMax"
                  :min="eeiMin"
                  :avg="eeiAvg"
                  :time="eeiYear"
                  id="eei"
                /> -->
                <SingleLineChart
                  title="ENERGY EFFICIENCY INDEX (EEI)"
                  :data="eei"
                  yAxis="KWH/occupant"
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
                <!-- <MultipleLineChart
                  title="CARBON EMISSION INTENSITY (CEI)"
                  data="10"
                  yAxis="10"
                  :max="ceiMax"
                  :min="ceiMin"
                  :avg="ceiAvg"
                  :time="ceiYear"
                  id="cei"
                /> -->
                <SingleLineChart
                  title="CARBON EMISSION INTENSITY (CEI)"
                  :data="cei"
                  yAxis="tcO2e/sq m"
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
        <div class="map-con border" v-else key="second">
          <v-select
            :items="items2"
            label="Year"
            @input="changedLabel"
            solo
            v-model="selected"
            style="position: absolute; right: 4vw; top: 6vh; width: 100px"
          ></v-select>
          <v-card-title>DETAILS</v-card-title>
          <v-row
            class="data-box"
            style="
              padding-bottom: 5px;
              padding-left: 1vw;
              padding-right: 1vw;
              margin-top: 2vh;
            "
          >
            <v-col cols="12" class="col-sm-6">
              <v-card style="background: rgba(0, 0, 0, 0.2); height: 37vh">
                <v-card-title class="mb-4"> Summary</v-card-title>

                <v-card-subtitle>
                  Minimum Energy Usage : {{ ecMonthlyMin }} KWH, ({{
                    ecMonthlyMinMonth
                  }})</v-card-subtitle
                >
                <v-card-subtitle>
                  Maximum Energy Usage : {{ ecMonthlyMax }} KWH, ({{
                    ecMonthlyMaxMonth
                  }})</v-card-subtitle
                >
                <v-card-subtitle>
                  Average Energy Usage : {{ ecMonthlyAvg }} KWH</v-card-subtitle
                >
                <v-card-subtitle>
                  Total Energy Usage Latest Month : {{ ecMonthlyCurrent }} KWH,
                  ({{ ecMonthlyCurrentMonth }})
                </v-card-subtitle>
                <!-- <v-card-subtitle> Last Two Month : </v-card-subtitle> -->
                <!-- <v-card-subtitle> Last Month : </v-card-subtitle> -->
                <!-- <v-card-subtitle> Current Month : </v-card-subtitle> -->
                <!-- <v-card-subtitle> Prediction for Next Month : </v-card-subtitle> -->
              </v-card>
            </v-col>
            <v-col cols="12" class="col-sm-6">
              <v-card style="background: rgba(0, 0, 0, 0.2)">
                <SingleLineChart2
                  title="ENERGY USAGE"
                  :data="ecMonthly"
                  yAxis="KWH"
                  :max="energyMax"
                  :min="energyMin"
                  :avg="energyAvg"
                  :time="monthMonthly"
                  id="energyUsage"
                />
                <!-- <div class="loading" v-if="loading1" :loading1="loading1">
                Loading...
              </div> -->
              </v-card>
            </v-col>
            <v-col cols="12" class="col-sm-6">
              <v-card style="background: rgba(0, 0, 0, 0.2)">
                <BarChartHorizontal2
                  id="bar-chart2"
                  :data="energyTotalYear"
                  yAxis="10"
                  :max="energyMax"
                  :min="energyMin"
                  :avg="energyAvg"
                  :time="yearTotalYear"
                />
                <!-- <div class="loading" v-if="loading2" :loading1="loading1">
                Loading...
              </div> -->
              </v-card>
            </v-col>
            <v-col cols="12" class="col-sm-6">
              <v-card style="background: rgba(0, 0, 0, 0.2)">
                <MultipleLineChart3
                  title="COMPARISON WITH TOTAL AVERAGE OF OTHER BUILDINGS"
                  data="10"
                  yAxis="KWH"
                  :name="loggedInUser.building_id"
                  :max="ecall"
                  :min="ec"
                  :time="ecMonth"
                  id="ec"
                />
                <!-- <div class="loading" v-if="loading3" :loading1="loading1">
                Loading...
              </div> -->
              </v-card>
            </v-col>
          </v-row>
        </div>
      </transition>
    </div>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="40%">
        <v-card>
          <v-card-title class="text-h5">
            Update building details?
          </v-card-title>
          <template>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form
                @submit.prevent="submit"
                style="padding-left: 2vw; padding-right: 2vw"
                class="pb-4"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="Owner"
                  rules="required"
                >
                  <v-text-field
                    v-model="owner"
                    :error-messages="errors"
                    label="Owner"
                    required
                  ></v-text-field>
                </validation-provider>
                <!-- <validation-provider
                  v-slot="{ errors }"
                  name="No of floor"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="nooffloor"
                    :error-messages="errors"
                    label="No of floor"
                    required
                  ></v-text-field>
                </validation-provider> -->
                <validation-provider
                  v-slot="{ errors }"
                  name="Net floor area"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="netfloorarea"
                    :error-messages="errors"
                    label="Net floor area"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="No of occupants"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="noofoccupants"
                    :error-messages="errors"
                    label="No of occupants"
                    required
                  ></v-text-field>
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  name="Grid electricity emission factor"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="carbonemissionintensity"
                    :error-messages="errors"
                    label="Grid electricity emission factor"
                    required
                  ></v-text-field>
                </validation-provider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="mr-4"
                    type="submit"
                    :disabled="invalid"
                    @click="submit2"
                  >
                    submit
                  </v-btn>
                  <v-btn @click="clear"> clear </v-btn>
                  <v-btn @click="dialog = false"> Cancel </v-btn>
                </v-card-actions>
              </form>
            </validation-observer>
          </template>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog2" persistent max-width="40%">
        <v-card>
          <v-card-title class="text-h5"> Add Data? </v-card-title>
          <template>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form
                @submit.prevent="submit"
                style="padding-left: 2vw; padding-right: 2vw"
                class="pb-4"
              >
                <div>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      :active-picker.sync="activePicker"
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substr(0, 10)
                      "
                      min="1950-01-01"
                      @change="save"
                    ></v-date-picker>
                  </v-menu>
                </div>
                <validation-provider
                  v-slot="{ errors }"
                  name="select"
                  rules="required"
                  v-if="loggedInUser.userId == 1"
                >
                  <v-select
                    v-model="select"
                    :items="items"
                    :error-messages="errors"
                    label="Select"
                    data-vv-name="select"
                    required
                  ></v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Energy Usage"
                  rules="required"
                >
                  <v-text-field
                    v-model="energyusage"
                    :error-messages="errors"
                    label="Energy Usage"
                    required
                  ></v-text-field>
                </validation-provider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="mr-4"
                    type="submit"
                    :disabled="invalid"
                    @click="submitEnergy"
                  >
                    submit
                  </v-btn>
                  <v-btn @click="clear"> clear </v-btn>
                  <v-btn @click="dialog2 = false"> Cancel </v-btn>
                </v-card-actions>
              </form>
            </validation-observer>
          </template>
        </v-card>
      </v-dialog>
    </v-row>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

// import MultipleLineChart from "~/components/MultipleLineChart";

export default {
  layout: "main",
  middleware: ["auth"],
  computed: {
    ...mapState({
      buildingDetails: (state) => state.buildingDetails,
    }),
    ...mapGetters(["loggedInUser", "isAuthenticated"]),
  },
  methods: {
    ...mapMutations({
      setBuildingDetail: "setBuildingDetail",
    }),
    changedLabel(event) {
      this.selected = event;
      console.log("select event", event);
      this.getEnergyMonth(this.loggedInUser.building_id, this.selected);
      this.getDataYearly(this.loggedInUser.building_id, this.selected);
      this.getEnergyAll(
        this.loggedInUser.building_id,
        this.loggedInUser.category,
        this.selected
      );
      // this.getEnergy(this.loggedInUser.building_id, this.selected);
    },
    submit2() {
      // console.log(this.nooffloor);
      this.updateOwner();
    },
    editDetails: function () {
      // console.log("here");
      this.dialog = true;
    },
    getYear: function (id) {
      this.$axios
        .$get(`https://debug2.qwazx.one:5000/api/data/building/year`, {
          params: {
            building_id: id,
          },
        })
        .then((response) => {
          console.log(response);
          this.items2 = [];
          for (let i = 0; i < response.length; i++) {
            this.items2.push(response[i].year);
          }
          this.selected = this.items2[0];
          // window.location.reload();
          // this.getEnergy(this.loggedInUser.building_id, this.selected);
          this.getEnergyMonth(this.loggedInUser.building_id, this.selected);
          this.getDataYearly(this.loggedInUser.building_id, this.selected);
          this.getEnergyAll(
            this.loggedInUser.building_id,
            this.loggedInUser.category,
            this.selected
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDetails: function (id) {
      this.$axios
        .$get(`https://debug2.qwazx.one:5000/api/data/building/details`, {
          params: {
            building_id: id,
          },
        })
        .then((response) => {
          console.log(response);
          let payload = {
            owner: response[0].owner,
            floor: response[0].floor,
            cei: response[0].grid_electricity_emission_factor,
            net_floor_area: response[0].net_floor_area,
            no_of_floors: response[0].no_of_floors,
            no_of_hospital_beds: response[0].no_of_hospital_beds,
            no_of_occupants: response[0].no_of_occupants,
          };
          this.setBuildingDetail(payload);
          this.owner = this.buildingDetails[0].data;
          this.netfloorarea = this.buildingDetails[1].data;
          this.noofoccupants = this.buildingDetails[2].data;
          this.carbonemissionintensity = this.buildingDetails[3].data;
          this.getBei(this.loggedInUser.building_id);
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateDetail: function () {
      this.$axios
        .$post(
          `https://debug2.qwazx.one:5000/api/data/building/details`,
          null,
          {
            params: {
              building_id: this.loggedInUser.building_id,
              // nooffloor: this.nooffloor,
              netfloorarea: this.netfloorarea,
              noofoccupants: this.noofoccupants,
              carbonemissionintensity: this.carbonemissionintensity,
            },
          }
        )
        // .$get("http://104.248.158.194/api/total/latest", {})
        // .$get("https://debug2.qwazx.one:5000/api/total/latest", {})
        .then((response) => {
          console.log(response);
          // this.getDetails(this.loggedInUser.userId);
          this.getDetails(this.loggedInUser.building_id);
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateOwner: function () {
      this.$axios
        .$put(`https://debug2.qwazx.one:5000/api/data/building/owner`, {
          params: {
            id: this.loggedInUser.userId,
            owner: this.owner,
          },
        })
        // .$get("http://104.248.158.194/api/total/latest", {})
        // .$get("https://debug2.qwazx.one:5000/api/total/latest", {})
        .then((response) => {
          console.log(response);
          this.updateDetail();
          this.dialog = false;
          this.clear();
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDataYearly: function (id, year) {
      this.$axios
        .$get(`https://debug2.qwazx.one:5000/api/data/yearly/building`, {
          params: {
            building_id: id,
            year: year,
          },
        })
        .then((response) => {
          console.log(response);
          this.energyTotalYear = [];
          this.yearTotalYear = [];
          for (let i = 0; i < response.length; i++) {
            this.energyTotalYear.push(response[i].totalec);
            this.yearTotalYear.push(response[i].totalec);
          }
          // let payload = {
          //   owner: response[0].owner,
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
    updateData: function () {
      this.$axios
        .$post(`https://debug2.qwazx.one:5000/api/data/building/data`, null, {
          params: {
            building_id: this.loggedInUser.userId,
            floor: this.select,
            ec: this.energyusage,
            bei: this.energyusage / this.buildingDetails[2].data,
            eei: this.energyusage / this.buildingDetails[3].data,
            cei: this.energyusage * this.buildingDetails[4].data,
            date: this.date,
            no_of_floors: this.buildingDetails[1].data,
            net_floor_area: this.buildingDetails[2].data,
            no_of_occupants: this.buildingDetails[3].data,
            no_of_hospital_beds: null,
            carbon_emission_intensity: this.buildingDetails[4].data,
          },
        })
        // .$get("http://104.248.158.194/api/total/latest", {})
        // .$get("https://debug2.qwazx.one:5000/api/total/latest", {})
        .then((response) => {
          console.log(response);
          // this.updateDetail();
          // this.dialog = false;
          // this.clear();
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submit() {
      this.$refs.observer.validate();
    },
    submitEnergy() {
      let data = {
        building_id: this.loggedInUser.building_id,
        floor: this.select,
        ec: this.energyusage,
        bei: this.energyusage / this.buildingDetails[2].data,
        eei: this.energyusage / this.buildingDetails[3].data,
        cei: this.energyusage * this.buildingDetails[4].data,
        date: this.date,
        no_of_floors: this.buildingDetails[1].data,
        net_floor_area: this.buildingDetails[2].data,
        no_of_occupants: this.buildingDetails[3].data,
        no_of_hospital_beds: "",
        carbon_emission_intensity: this.buildingDetails[4].data,
      };
      // alert(data);
      // console.log(data);
      this.updateData();
      // this.dialog2 = false;
    },
    clear() {
      this.owner = "";
      this.nooffloor = "";
      this.netfloorarea = "";
      this.noofoccupants = "";
      this.carbonemissionintensity = "";
      this.$refs.observer.reset();
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    getEnergy: function (id) {
      this.$axios
        .$get(`https://debug2.qwazx.one:5000/api/data/building/energy`, {
          params: {
            building_id: id,
          },
        })
        .then((response) => {
          // console.log(id);
          console.log("getenergy", response);
          this.energy = [];
          this.energyMax = [];
          this.energyMin = [];
          this.energyAvg = [];
          this.energyYear = [];
          // this.items2 = [];
          for (let i = 0; i < response.length; i++) {
            this.energy.push(response[i].totalec);
            this.energyMax.push(response[i].maxec);
            this.energyMin.push(response[i].minec);
            this.energyAvg.push(response[i].avgec);
            this.energyYear.push(response[i].year);
            // this.items2.push(response[i].year);
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
    getEnergy2: function (id) {
      this.$axios
        .$get(`https://debug2.qwazx.one:5000/api/data/building/energy`, {
          params: {
            building_id: id,
          },
        })
        .then((response) => {
          console.log(response);
          for (let i = 0; i < response.length; i++) {
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
    getEnergyMonth: function (id, year) {
      this.$axios
        .$get(`https://debug2.qwazx.one:5000/api/data/building/energy/month`, {
          params: {
            building_id: id,
            year,
          },
        })
        .then((response) => {
          console.log(id);
          console.log(response);
          this.ecMonthly = [];
          // this.ecall = [];
          this.monthMonthly = [];
          for (let i = 0; i < response.length; i++) {
            this.ecMonthly.push(response[i].totalec);
            this.monthMonthly.push(response[i].month);
          }
          this.ecMonthlyCurrent = this.ecMonthly[this.ecMonthly.length - 1];
          this.ecMonthlyMin = Math.min(...this.ecMonthly);
          let indexMin = this.ecMonthly.indexOf(this.ecMonthlyMin);
          this.ecMonthlyMinMonth = this.monthMonthly[indexMin];
          // console.log("sini ha", this.ecMonth);
          this.ecMonthlyMax = Math.max(...this.ecMonthly);
          let indexMax = this.ecMonthly.indexOf(this.ecMonthlyMax);
          this.ecMonthlyMaxMonth = this.monthMonthly[indexMax];
          this.ecMonthlyAvg =
            this.ecMonthly.reduce((a, b) => a + b, 0) / this.ecMonthly.length;
          this.ecMonthlyCurrentMonth =
            this.monthMonthly[this.monthMonthly.length - 1];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getEnergyAll: function (id, category, year) {
      this.$axios
        .$get(`https://debug2.qwazx.one:5000/api/data/building/energy/all`, {
          params: {
            building_id: id,
            category: category,
            year: year,
          },
        })
        .then((response) => {
          // console.log(id);
          // console.log(response);
          this.ec = [];
          this.ecall = [];
          this.ecMonth = [];
          for (let i = 0; i < response.length; i++) {
            this.ec.push(response[i].totalec);
            this.ecall.push(response[i].totalecall);
            this.ecMonth.push(response[i].month);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getBei: function (id) {
      this.$axios
        .$get(`https://debug2.qwazx.one:5000/api/data/building/bei`, {
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
  components: {
    ValidationProvider,
    ValidationObserver,
    // MultipleLineChart,
  },

  data() {
    return {
      dialog: false,
      dialog2: false,
      details: true,
      select: null,
      items: [
        "LG2",
        "LG1",
        "G",
        "1",
        "2",
        "3",
        "5",
        "15",
        "17",
        "21",
        "22",
        "25",
        "26",
        "28",
      ],
      owner: "",
      nooffloor: "",
      netfloorarea: "",
      noofoccupants: "",
      carbonemissionintensity: "",
      energyusage: "",
      activePicker: null,
      date: null,
      menu: false,
      ec: [],
      ecall: [],
      ecMonth: [],
      ecMonthly: [],
      ecMonthlyMin: 0,
      ecMonthlyMinMonth: "",
      ecMonthlyMax: "",
      ecMonthlyMaxMonth: "",
      ecMonthlyAvg: "",
      ecMonthlyCurrent: "",
      ecMonthlyCurrentMonth: "",
      monthMonthly: [],
      energy: [],
      energySum: [],
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
      bei: [],
      cei: [],
      eei: [],
      year: [],
      items2: [],
      selected: null,
      energyTotalYear: [],
      yearTotalYear: [],
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  mounted() {
    // this.updateDetail();
    console.log(this.loggedInUser);
    this.getYear(this.loggedInUser.building_id);
    this.getDetails(this.loggedInUser.building_id);
    this.getEnergy(this.loggedInUser.building_id);
    // this.getEnergyMonth(this.loggedInUser.building_id);

    this.owner = this.buildingDetails[0].data;
    this.netfloorarea = this.buildingDetails[1].data;
    this.noofoccupants = this.buildingDetails[2].data;
    this.carbonemissionintensity = this.buildingDetails[3].data;
    this.getBei(this.loggedInUser.building_id);
    // this.getEei(this.loggedInUser.building_id);
    // this.getCei(this.loggedInUser.building_id);
    // this.getDataYearly(this.loggedInUser.userId);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
html,
body {
  margin: 0px;
  padding: 0px;
  overflow-y: hidden;
}

.v-image__image,
.v-image__placeholder {
  width: 80%;
  height: 80%;
}

.v-list-item .v-list-item__title {
  color: white;
}
</style>
<style scoped>
.left {
  width: 22vw;
  height: calc(100vh - 90px) !important;
  padding-left: 1vw;
  padding-right: 1vw;
  margin-top: 3vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.right {
  width: 78vw;
  height: calc(100vh - 50px) !important;
  padding: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card:hover {
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.map-con {
  width: 100%;
  height: 100%;
}
</style>
