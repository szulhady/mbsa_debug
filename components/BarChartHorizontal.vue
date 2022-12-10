<template v-show="$vuetify.breakpoint.lgAndUp">
  <div class="level">
    <div
      :id="id"
      style="width: 100%; height: 100%; min-height: 200px"
      :dataWeek1="dataWeek1"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
let myChart;
export default {
  data() {
    return {
      dataWeek1: [0, 0, 0, 0, 0, 0, 0],
      dataWeek2: [0, 0, 0, 0, 0, 0, 0],
      dataWeek3: [0, 0, 0, 0, 0, 0, 0],
      dataWeek4: [0, 0, 0, 0, 0, 0, 0],
      dataWeek5: [0, 0, 0, 0, 0, 0, 0],
      dataWeek6: [0, 0, 0, 0, 0, 0, 0],
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          textStyle: {
            color: "white",
          },
        },
        grid: {
          y: 60,
          y2: 40,
          x2: 15,
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        series: [
          {
            name: "Week 1",
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
            data: this.dataWeek1,
          },
          {
            name: "Week 2",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            // data: [79700, 0, 0, 13632, 0, 0, 46611],
            data: this.dataWeek2,
          },
          {
            name: "Week 3",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            // data: [15432, 0, 41836, 0, 0, 0, 46263],
            data: this.dataWeek3,
          },
          {
            name: "Week 4",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            // data: [19675, 0, 0, 35002, 43501, 0, 21344],
            data: this.dataWeek4,
          },
          {
            name: "Week 5",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            // data: [0, 0, 0, 0, 19342, 32222, 0],
            data: this.dataWeek5,
          },
          {
            name: "Week 6",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            // data: [0, 26354, 0, 0, 0, 0, 0],
            data: this.dataWeek6,
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
    }, 1);
    this.getData();
  },
  methods: {
    getData: function () {
      this.$axios
        // .$get(`${this.url}/api/total/weekday`, {})
        // .$get("http://104.248.158.194/api/total/weekday", {})
        // .$get("http://68.183.189.84:5000/api/total/weekday", {})
        .$get("https://debug2.qwazx.one:5000/api/total/weekday", {})
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
      legend: {
        textStyle: {
          color: "white",
        },
      },
      grid: {
        y: 60,
        y2: 40,
        x2: 15,
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
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      series: [
        {
          name: "Week 1",
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
          data: this.dataWeek1,
        },
        {
          name: "Week 2",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          // data: [79700, 0, 0, 13632, 0, 0, 46611],
          data: this.dataWeek2,
        },
        {
          name: "Week 3",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          // data: [15432, 0, 41836, 0, 0, 0, 46263],
          data: this.dataWeek3,
        },
        {
          name: "Week 4",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          // data: [19675, 0, 0, 35002, 43501, 0, 21344],
          data: this.dataWeek4,
        },
        {
          name: "Week 5",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          // data: [0, 0, 0, 0, 19342, 32222, 0],
          data: this.dataWeek5,
        },
        {
          name: "Week 6",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          // data: [0, 26354, 0, 0, 0, 0, 0],
          data: this.dataWeek6,
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
  props: ["id"],
  computed: mapState({
    url: (state) => state.url,
  }),
};
</script>

<style scoped>
.v-card__title {
  font-size: 1rem;
  padding: 8px 10px 8px 20px;
  color: aliceblue;
}

.level {
  /* background-color: white; */
  height: 37vh;
}
</style>
