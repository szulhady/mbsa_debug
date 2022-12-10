<template v-show="$vuetify.breakpoint.lgAndUp">
  <div class="level">
    <div
      :id="id"
      style="width: 100%; height: 100%; min-height: 200px"
      :total="total"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
let myChart;
export default {
  data() {
    return {
      total: [],
      month: [],
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "30%",
          top: "10%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.month,
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              textStyle: {
                color: "white",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "white",
              },
            },
          },
        ],
        series: [
          {
            name: "KWH",
            type: "bar",
            barWidth: "60%",
            data: this.total,
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
        // .$get(`${this.url}/api/total/month`, {})
        // .$get("http://104.248.158.194/api/total/month", {})
        // .$get("http://68.183.189.84:5000/api/total/month", {})
        .$get("https://debug2.qwazx.one/api/total/month", {})
        .then((response) => {
          // console.log(response);
          this.month = response.month;
          this.total = response.total;
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
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "30%",
        top: "10%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: this.month,
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            textStyle: {
              color: "white",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "white",
            },
          },
        },
      ],
      series: [
        {
          name: "KWH",
          type: "bar",
          barWidth: "60%",
          data: this.total,
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
    // console.log(this.data)
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
  height: 40vh;
}
</style>
