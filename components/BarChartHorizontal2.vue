<template v-show="$vuetify.breakpoint.lgAndUp">
  <div class="level">
    <v-card-subtitle class="sidebar rounded-lg pt-3">
      CUMULTIVE ENERGY IN A YEAR
    </v-card-subtitle>
    <div
      :id="id"
      style="width: 100%; height: 100%; height: 33vh"
      :data="data"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
let myChart;
export default {
  data() {
    return {
      dataWeek1: [200000],
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        // legend: {
        //   textStyle: {
        //     color: "white",
        //   },
        // },
        grid: {
          y: 20,
          y2: 60,
          x: 70,
          x2: 70,
        },
        xAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "white",
            },
            // interval: 0,
            // rotate: "45",
            clickable: true, //And add click events to the chart to determine where to click based on the return value
            interval: 0,
            formatter: function (params, index) {
              if (index % 2 != 0) {
                return;
                // return "\n\n" + params;
              } else {
                return params;
              }
            },
          },
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: "white",
            },
          },
          type: "category",
          data: [this.time],
        },
        series: [
          {
            name: "Cumulative energy in a year",
            type: "bar",
            stack: "total",
            barGap: "-100%",
            barCategoryGap: "20%",

            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            // data: [197767, 15347, 118843, 77023, 79366, 98499, 90751],
            data: this.data,
          },
        ],
      },
    };
  },
  mounted() {
    setTimeout(() => {
      myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.setOption(this.option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 2);
    // this.getData();
  },
  methods: {
    getData: function () {
      this.$axios
        // .$get(`${this.url}/api/total/weekday`, {})
        // .$get("http://104.248.158.194/api/total/weekday", {})
        // .$get("http://68.183.189.84:5000/api/total/weekday", {})
        .$get("https://soap.txio.live/api/total/weekday", {})
        .then((response) => {
          console.log(response);
          this.dataWeek1 = response.dataWeek1;
          this.dataWeek2 = response.dataWeek2;
          this.dataWeek3 = response.dataWeek3;
          this.dataWeek4 = response.dataWeek4;
          this.dataWeek5 = response.dataWeek5;
          this.dataWeek6 = response.dataWeek6;
          // window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  updated() {
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // Use axis to trigger tooltip
          type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      // legend: {
      //   textStyle: {
      //     color: "white",
      //   },
      // },
      grid: {
        y: 20,
        y2: 60,
        x: 70,
        x2: 70,
      },
      xAxis: {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "white",
          },
          // interval: 0,
          // rotate: "45",
          clickable: true, //And add click events to the chart to determine where to click based on the return value
          interval: 0,
          formatter: function (params, index) {
            if (index % 2 != 0) {
              return;
              // return "\n\n" + params;
            } else {
              return params;
            }
          },
        },
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: "white",
          },
        },
        type: "category",
        data: [this.time],
      },
      series: [
        {
          name: "Cumulative energy in a year",
          type: "bar",
          stack: "total",
          barGap: "-100%",
          barCategoryGap: "20%",

          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          // data: [197767, 15347, 118843, 77023, 79366, 98499, 90751],
          data: this.data,
        },
      ],
    };
    // var myChart = this.$echarts.init(document.getElementById(this.id));
    setTimeout(() => {
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 1);
  },
  props: ["data", "yAxis", "max", "time", "title", "id"],
  computed: mapState({
    url: (state) => state.url,
  }),
};
</script>

<style scoped>
.v-card__subtitle {
  font-size: 0.9em;
  padding: 0px 0px 0px 40px;
  color: aliceblue;
}
.level {
  width: 100% !important;
}
</style>
