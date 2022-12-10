<template>
  <div>
    <v-card-subtitle class="color no-padding"
      >BUILDING REGISTERED</v-card-subtitle
    >
    <v-card class="elevation-12 card-border card-color">
      <v-data-table
        :single-select="singleSelect"
        :headers="headers"
        :items="data"
        :items-per-page="3"
        :search="search"
        item-key="id"
        show-select
        v-model="selected"
        :custom-filter="filter"
        @click:row="handleClick"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search for building"
            class="mx-4"
          ></v-text-field>
        </template>
        <template v-if="selected.length > 0" v-slot:footer>
          <v-btn @click="box = true" class="error logout-btn mt-2 ml-5"
            >Delete</v-btn
          >
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="box" persistent max-width="290">
      <v-card>
        <v-card-title> Action </v-card-title>
        <hr class="hr" />
        <v-card-subtitle
          >Are you sure you want to delete the building?</v-card-subtitle
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="btn-div">
            <v-btn @click="deleteBuilding" class="error logout-btn"
              >Delete</v-btn
            >
            <v-btn @click="cancel" class="success logout-btn">Cancel</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editBox" persistent max-width="290">
      <v-card v-if="editBox" id="logout">
        <v-card-title> Action </v-card-title>
        <hr class="hr" />

        <v-form
          @submit.prevent=""
          style="padding-left: 2vw; padding-right: 2vw"
        >
          <div class="field">
            <!-- <label class="label">Email</label> -->
            <div class="control">
              <v-text-field
                type="text"
                class="input"
                label="Building"
                v-model="building"
              >
              </v-text-field>
            </div>
            <div class="control">
              <v-text-field
                type="text"
                class="input"
                label="Owner"
                v-model="owner"
              >
              </v-text-field>
            </div>
            <div class="control">
              <v-text-field
                type="text"
                class="input"
                label="Category"
                v-model="category"
              >
              </v-text-field>
            </div>
            <div class="control">
              <v-text-field
                type="text"
                class="input"
                label="Latitude"
                v-model="latitude"
              >
              </v-text-field>
            </div>
            <div class="control">
              <v-text-field
                type="text"
                class="input"
                label="Longitude"
                v-model="longitude"
              >
              </v-text-field>
            </div>
          </div>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="btn-div">
            <v-btn @click="updateBuilding" class="error logout-btn">Edit</v-btn>
            <v-btn @click="cancel" class="success logout-btn">Cancel</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      box: false,
      editBox: false,
      search: "",
      singleSelect: false,
      selected: [],
      data: [],
      id: "",
      building: "",
      owner: "",
      category: "",
      latitude: "",
      longitude: "",
    };
  },
  computed: {
    ...mapState({
      count: (state) => state.adminCount,
      // data: (state) => state.admin.allBuilding,
    }),
    headers() {
      return [
        // headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Building", value: "name" },
        { text: "Owner", value: "owner" },
        { text: "Category", value: "category" },
        { text: "Latitude", value: "lat" },
        { text: "Longitude", value: "lng" },
      ];
    },
  },
  methods: {
    filter(value, search, item) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value
          .toString()
          .toLocaleLowerCase()
          .indexOf(search.toLocaleLowerCase()) !== -1
      );
    },
    handleClick(row) {
      // console.log(row);
      // console.log(this.selected);
      // this.date = row.date;
      // this.userID = row.userID;
      this.id = row.id;
      console.log(row);
      this.building = row.name;
      this.owner = row.owner;
      this.category = row.category;
      this.latitude = row.lat;
      this.longitude = row.lng;
      // (this.topics = row.topics), (this.deviceID = row.deviceID);
      this.editBox = true;
      // console.log(this.userID, this.topics)
    },
    cancel() {
      this.box = false;
      this.editBox = false;
    },
    getAllBuilding: function () {
      this.$axios
        .$get("https://debug2.qwazx.one:5000/api/data/admin/building")
        .then((response) => {
          console.log(response);
          this.data = response;
          // this.setBuildingData(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateBuilding: function () {
      this.$axios
        .$put(`https://debug2.qwazx.one:5000/api/data/admin/building`, null, {
          params: {
            id: this.id,
            name: this.building,
            owner: this.owner,
            category: this.category,
            latitude: this.latitude,
            longitude: this.longitude,
          },
        })
        // .$get("http://104.248.158.194/api/total/latest", {})
        // .$get("https://debug2.qwazx.one:5000/api/total/latest", {})
        .then((response) => {
          console.log(response);
          this.editBox = false;
          this.getAllBuilding();
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
          alert("Please select valid building id");
        });
    },
    deleteBuilding() {
      let api = "https://debug2.qwazx.one:5000/api/data/admin/building";
      console.log(this.selected);
      this.$axios
        .$delete(api, {
          data: {
            id: this.selected,
          },
        })
        .then((response) => {
          // this.getUserDataWithTopic(response)
          // this.getAllUserWithTopic()
          this.box = false;
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllBuilding();
  },
  watch: {
    count: function () {
      console.log(this.count);
      this.getAllBuilding();
    },
  },
};
</script>

<style>
/* .card-border {
  border-radius: 8px;
}

.card-color {
  border-radius: 8px !important;
  background: rgb(238, 248, 248) !important;
}

.v-data-table {
  background: rgb(240, 244, 230);
}

.hr {
  margin: 0 20px;
  border-top: 1px solid rgb(189, 199, 199);
}

.card-subtitle {
  padding-left: 20px;
}

.flex-card {
  display: flex;
  padding: 0;
  padding-top: 12px;
  padding-left: 10px;
}

.v-card__subtitle {
  padding: 12px;
}

.no-padding {
  padding-bottom: 5px;
}

.v-input.mx-4.theme--light.v-text-field.v-text-field--is-booted {
  background-color: rgb(238, 248, 248);
  margin: 0 !important;
  padding: 6px 20px;
} */

.v-data-footer__select {
  display: none;
}

.v-data-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
