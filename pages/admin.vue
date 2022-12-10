<template>
  <section>
    <section style="display: flex">
      <section class="left">
        <v-btn
          class="neon3"
          style="width: 15vw; height: 7vh; font-size: 0.8em"
          @click="dialog = true"
          >Add Building</v-btn
        >
      </section>
      <section class="right">
        <section style="height: 40vh; max-height: 40vh; min-height: 40vh">
          <BuildingTable />
        </section>
        <section
          style="
            height: 40vh;
            padding-top: 8vh;
            max-height: 40vh;
            min-height: 40vh;
          "
        >
          <UserTable />
        </section>
      </section>
    </section>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="40%">
        <v-card>
          <v-card-title class="text-h5"> Add Data </v-card-title>
          <template>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form
                @submit.prevent="submit"
                style="padding-left: 2vw; padding-right: 2vw"
                class="pb-4"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="Building ID"
                  rules="required"
                >
                  <v-text-field
                    v-model="buildingId"
                    :error-messages="errors"
                    label="Building ID"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Building Name"
                  rules="required"
                >
                  <v-text-field
                    v-model="buildingName"
                    :error-messages="errors"
                    label="Building Name"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Building Owner"
                  rules="required"
                >
                  <v-text-field
                    v-model="buildingOwner"
                    :error-messages="errors"
                    label="Building Owner"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Building Category"
                  rules="required"
                >
                  <v-text-field
                    v-model="buildingCategory"
                    :error-messages="errors"
                    label="Building Category"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Building Latitude"
                  rules="required"
                >
                  <v-text-field
                    v-model="buildingLat"
                    :error-messages="errors"
                    label="Building Latitude"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Building Longitude"
                  rules="required"
                >
                  <v-text-field
                    v-model="buildingLng"
                    :error-messages="errors"
                    label="Building Longitude"
                    required
                  ></v-text-field>
                </validation-provider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="mr-4"
                    type="submit"
                    :disabled="invalid"
                    @click="addBuilding"
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
  </section>
</template>

<script>
import BuildingTable from "~/components/Admin/BuildingTable.vue";
import UserTable from "~/components/Admin/UserTable.vue";

import { mapMutations } from "vuex";

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

export default {
  middleware: ["auth", "isAdmin"],
  layout: "main",
  components: {
    BuildingTable,
    UserTable,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      dialog: false,
      menu: false,
      buildingId: "",
      buildingName: "",
      buildingOwner: "",
      buildingCategory: "",
      buildingLat: "",
      buildingLng: "",
      count: 0,
    };
  },
  methods: {
    ...mapMutations({
      setBuildingData: "setBuildingData",
      setAdminCount: "setAdminCount",
    }),
    clear() {
      this.buildingId = "";
      this.buildingName = "";
      this.buildingOwner = "";
      this.buildingCategory = "";
      this.buildingLat = "";
      this.buildingLng = "";
      this.$refs.observer.reset();
    },
    submit() {
      this.$refs.observer.validate();
    },
    getAllBuilding: function () {
      this.$axios
        .$get("https://debug2.qwazx.one/api/data/admin/building")
        .then((response) => {
          // console.log(response);
          this.setBuildingData(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addBuilding: function () {
      console.log(this.buildingName);
      this.$axios
        .$post(`https://debug2.qwazx.one/api/data/admin/building`, null, {
          params: {
            id: this.buildingId,
            name: this.buildingName,
            owner: this.buildingOwner,
            category: this.buildingCategory,
            lat: this.buildingLat,
            lng: this.buildingLng,
          },
        })
        .then((response) => {
          this.dialog = false;
          this.getAllBuilding();
          this.count = this.count + 1;
          this.setAdminCount(this.count);
          this.clear();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    // this.getAllBuilding();
  },
};
</script>

<style scoped>
.left {
  width: 20vw;
  height: calc(100vh - 100px) !important;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.right {
  width: 80vw;
  height: calc(100vh - 100px) !important;
  padding-right: 3vw;
}
</style>
