<template>
  <div>
    <v-card-subtitle class="color no-padding">USER REGISTERED</v-card-subtitle>
    <v-card class="elevation-12 card-border card-color">
      <v-data-table
        :single-select="singleSelect"
        :headers="headers"
        :items="data"
        :items-per-page="3"
        :search="search"
        item-key="user_id"
        show-select
        v-model="selected"
        :custom-filter="filter"
        @click:row="handleClick"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search for user"
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
          >Are you sure you want to delete the user?</v-card-subtitle
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="btn-div">
            <v-btn @click="deleteUser" class="error logout-btn">Delete</v-btn>
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
                label="Building ID"
                v-model="buildingId"
              >
              </v-text-field>
            </div>
          </div>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="btn-div">
            <v-btn @click="updateBuildingId" class="error logout-btn"
              >Edit</v-btn
            >
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
      user_id: "",
      buildingId: "",
    };
  },
  computed: {
    ...mapState({
      // data: (state) => state.admin.allBuilding,
    }),
    headers() {
      return [
        // headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "user_id",
        },
        { text: "Username", value: "username" },
        { text: "Email", value: "email" },
        { text: "Building_ID", value: "building_id_users" },
        { text: "Role", value: "role" },
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
      this.user_id = row.user_id;
      // (this.topics = row.topics), (this.deviceID = row.deviceID);
      this.editBox = true;
      // console.log(this.userID, this.topics)
    },
    cancel() {
      this.box = false;
      this.editBox = false;
    },
    getAllUser: function () {
      this.$axios
        .$get("https://soap.txio.live/api/data/admin/user")
        .then((response) => {
          console.log(response);
          this.data = response;
          // this.setBuildingData(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteBuilding() {
      let api = "https://soap.txio.live/api/data/admin/building";
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
    updateBuildingId: function () {
      this.$axios
        .$put(`https://soap.txio.live/api/data/admin/user`, null, {
          params: {
            user_id: this.user_id,
            building_id: this.buildingId,
          },
        })
        // .$get("http://104.248.158.194/api/total/latest", {})
        // .$get("https://soap.txio.live/api/total/latest", {})
        .then((response) => {
          console.log(response);
          this.editBox = false;
          this.getAllUser();
          this.buildingId = "";
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
          alert("Please select valid building id");
        });
    },
    deleteUser() {
      let api = "https://soap.txio.live/api/data/admin/user";
      this.$axios
        .$delete(api, {
          data: {
            user_id: this.selected,
          },
        })
        .then((response) => {
          // this.getUserDataWithTopic(response)
          // this.getAllUserWithTopic()
          this.box = false;
          this.getAllUser();
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getAllUser();
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

tr {
  cursor: pointer;
}
</style>
