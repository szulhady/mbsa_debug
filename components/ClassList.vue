<template>
  <div class="level">
    <div style="display: flex; max-width: 30vw; height: 30vh">
      <div class="right2">
        <div v-if="categories">
          <v-row style="justify-content: space-evenly">
            <v-col
              v-for="(category, index) in categories"
              :key="index"
              style="flex-grow: 0"
            >
              <v-btn
                class="neon3"
                :class="{ active: index === activeCategory }"
                style="width: 9vw; height: 7vh; font-size: 0.8em"
                @click="selectCategory(index)"
                >{{ category.category }}</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <div style="border-bottom: 4px dashed white; margin: 1vh 2vw"></div>
    <div style="display: flex; max-width: 30vw; height: 40vh">
      <div class="right2">
        <div v-if="categories">
          <v-card-title>Select building</v-card-title>
          <v-row style="justify-content: space-evenly">
            <v-col
              v-for="(location, index) in categories[activeCategory].locations"
              :key="index"
              style="flex-grow: 0"
            >
              <v-btn
                class="neon3"
                :class="{ active: index === activeBuilding }"
                style="width: 12vw; height: 7vh; font-size: 0.8em"
                @click="selectBuilding(index)"
                >{{ location.name }}</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassButton from "~/components/ClassButton";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      categories: [
        {
          category: "",
          locations: [
            {
              name: "",
            },
          ],
        },
      ],
      activeCategory: 0,
      activeBuilding: 0,
    };
  },
  mounted() {
    this.getCategory();
    // this.setId(1);
  },
  updated() {},
  components: {
    ClassButton,
  },
  methods: {
    ...mapMutations({
      setId: "setId",
    }),
    selectCategory(i) {
      this.activeCategory = i;
      this.activeBuilding = 0;
      // this.getBuildingData(
      //   this.categories[this.activeCategory].locations[0].id
      // );
      this.setId(this.categories[this.activeCategory].locations[0].id);
      // console.log()
    },
    selectBuilding(i) {
      this.activeBuilding = i;
      // this.getBuildingData(
      //   this.categories[this.activeCategory].locations[this.activeBuilding].id
      // );
      this.setId(
        this.categories[this.activeCategory].locations[this.activeBuilding].id
      );
    },
    getCategory: function () {
      this.$axios
        .$get("https://soap.txio.live/api/data/category", {
          // params: {
          //   id: id,
          // },
        })
        .then((response) => {
          console.log(response);
          this.categories = response;
          let data = [];
          // if (response.length > 1) {
          // for (let i = 0; i < response.length; i++) {
          //   data.push(response[i].class);
          // }
          // }
          // console.log(data);
          // this.setClasss(data);
          // this.setCardLecturerClass(response.length);

          // this.getLecturer(data);
          // this.getBuildingData(response[0].locations[0].id);
          this.setId(response[0].locations[0].id);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getBuildingData: function (id) {
      this.$axios
        .$get("https://soap.txio.live/api/data/building", {
          params: {
            id: id,
          },
        })
        .then((response) => {
          console.log(response);
          // this.categories = response;
          let data = [];
          // if (response.length > 1) {
          // for (let i = 0; i < response.length; i++) {
          //   data.push(response[i].class);
          // }
          // }
          // console.log(data);
          // this.setClasss(data);
          // this.setCardLecturerClass(response.length);

          // this.getLecturer(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.col {
  padding-left: 2px;
  padding-right: 2px;
}
.v-card__subtitle {
  font-size: 0.9em;
  padding: 0px 0px 0px 40px;
  color: aliceblue;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 10px white;
  /* box-shadow: inset 0 0 10px 10px green; */
  border: solid 3px transparent;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 10px 10px rgb(2, 90, 115);
  /* box-shadow: inset 0 0 10px 10px red; */
  border: solid 3px transparent;
}

.left2 {
  width: 40%;

  display: flex;
  flex-direction: column;
}
.right2 {
  width: 100%;
  /* overflow: scroll; */
  overflow-x: hidden;
  /* overflow: scroll; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

/*  */
.active {
  /* margin-top: -150px; */
  font-size: var(--font-size);
  /* display: inline-block; */
  position: relative;
  cursor: pointer;
  border: red 0.125em solid !important;

  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.2em #fff7, 0 0 0.3em red;
  box-shadow: inset 0 0 0.5em red, 0 0 0.5em red;
}

.active::before {
  content: "";
  position: absolute;
  top: 90%;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
  transform: perspective(1.2em) rotateX(5deg) scale(1, 0);
  filter: blur(0.5em);
  opacity: 0.6;
  pointer-events: none;
  transition: opacity 100ms linear;
}

.active::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: red;
  box-shadow: 0 0 2em red;
  z-index: -1;
  opacity: 0;
  transition: opacity 100ms linear;
}

.active:hover::after {
  opacity: 1;
}
.active:hover,
.active:focus {
  color: white;
}
.active:hover::before {
  opacity: 0.8;
}
</style>
