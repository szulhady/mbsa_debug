<template>
  <div class="level">
    <div :id="id" style="width: 100%; height: 320px"></div>
  </div>
</template>

<script>
let myChart;
export default {
  data() {
    return {
      option: {
        grid: {
          y: 100,
          y2: 25,
        },
        tooltip: {
          position: function (point, params, dom, rect, size) {
            // fixed at top
            return [point[2], "10%"];
          },
          padding: [
            20, // up
            50, // right
            20, // down
            50, // left
          ],
          appendToBody: true,
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: { show: true, title: "Save" },
        //   },
        // },
        legend: {
          data: [
            "LG2",
            "LG1",
            "Floor 1",
            "Floor 2",
            "Floor 3",
            "Floor 4",
            "Floor 5",
            "Floor 6",
            "Floor 7",
            "Floor 8",
            "Floor 9",
            "Floor 10",
            "Floor 11",
            "Floor 12",
            "Floor 13",
            "Floor 14",
            "Floor 15",
            "Floor 16",
            "Floor 17",
            "Floor 18",
            "Floor 19",
            "Floor 20",
            "Floor 21",
            "Floor 22",
            "Floor 23",
            "Floor 24",
            "Floor 25",
            "Floor 26",
            "Floor 27",
            "Floor 28",
          ],
          textStyle: {
            fontSize: 12,
          },
        },
        xAxis: {
          name: this.xAxis,
          offset: 15,
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 12,
          },
          axisLabel: {
            fontSize: 12,
            verticalAlign: "bottom",
          },
          axisPointer: {
            label: {
              margin: 200,
              fontStyle: "italic",
              height: 100,
              formatter: function (params) {
                return (
                  "Month  :" + params.value
                  // (params.seriesData.length
                  //   ? "：" + params.seriesData[0].data
                  //   : "")
                );
              },
            },
          },
          type: "category",
          data: ["Jan", "Feb", "Mar"],
        },
        yAxis: {
          nameTextStyle: {
            fontSize: 12,
          },
          name: this.yAxis,
          type: "value",
          min: 0,
          max: this.max,
          axisLabel: {
            // formatter: "{value} cm",
            fontSize: 12,
          },
        },

        series: [
          {
            //min data set
            name: "LG2",
            data: [10, 20, 30],
            type: "line",
            fontSize: 30,
            color: "#ff0000",
            areaStyle: { color: "rgba(255, 0, 0, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //max data set
            name: "LG1",
            data: [20, 10, 30],
            type: "line",
            fontSize: 30,
            color: "#0000ff",
            areaStyle: { color: "rgba(0, 0, 255, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //average data set
            name: "Floor 1",
            data: [40, 10, 20],
            type: "line",
            fontSize: 30,
            color: "#8E4585",
            areaStyle: { color: "rgba(142, 69, 133, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 2",
            data: [30, 50, 10],
            type: "line",
            fontSize: 30,
            color: "#00ff00",
            areaStyle: { color: "rgba(135, 211, 124, 1)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 3",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#00ff00",
            areaStyle: { color: "rgba(135, 211, 124, 1)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 4",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#00ff00",
            areaStyle: { color: "rgba(135, 211, 124, 1)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //max data set
            name: "Floor 5",
            data: [5, 71, 34],
            type: "line",
            fontSize: 30,
            color: "#ff8000",
            areaStyle: { color: "rgba(255, 128, 0, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 6",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#ff0000",
            areaStyle: { color: "rgba(255, 0, 0, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //max data set
            name: "Floor 7",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#0000ff",
            areaStyle: { color: "rgba(0, 0, 255, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //average data set
            name: "Floor 8",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#8E4585",
            areaStyle: { color: "rgba(142, 69, 133, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 9",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#00ff00",
            areaStyle: { color: "rgba(135, 211, 124, 1)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 10",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#00ff00",
            areaStyle: { color: "rgba(135, 211, 124, 1)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 11",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#00ff00",
            areaStyle: { color: "rgba(135, 211, 124, 1)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //max data set
            name: "Floor 12",
            data: [5, 71, 34],
            type: "line",
            fontSize: 30,
            color: "#ff8000",
            areaStyle: { color: "rgba(255, 128, 0, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 13",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#00ff00",
            areaStyle: { color: "rgba(135, 211, 124, 1)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //max data set
            name: "Floor 14",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#ff8000",
            areaStyle: { color: "rgba(255, 128, 0, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //average data set
            name: "Floor 15",
            data: [42, 11, 41],
            type: "line",
            fontSize: 30,
            color: "#0080ff",
            areaStyle: { color: "rgba(0, 128, 255, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //average data set
            name: "Floor 16",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#0080ff",
            areaStyle: { color: "rgba(0, 128, 255, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 17",
            data: [32, 13, 51],
            type: "line",
            fontSize: 30,
            color: "#006B3C",
            areaStyle: { color: "rgba(0, 107, 60, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //average data set
            name: "Floor 18",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#0080ff",
            areaStyle: { color: "rgba(0, 128, 255, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //average data set
            name: "Floor 19",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#0080ff",
            areaStyle: { color: "rgba(0, 128, 255, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 20",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#006B3C",
            areaStyle: { color: "rgba(0, 107, 60, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //max data set
            name: "Floor 21",
            data: [43, 12, 41],
            type: "line",
            fontSize: 30,
            color: "#FF00FF",
            areaStyle: { color: "rgba(255, 0, 255, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //average data set
            name: "Floor 22",
            data: [21, 12, 12],
            type: "line",
            fontSize: 30,
            color: "#C19A6B",
            areaStyle: { color: "rgba(198, 154, 107, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //max data set
            name: "Floor 23",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#FF00FF",
            areaStyle: { color: "rgba(255, 0, 255, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //average data set
            name: "Floor 24",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#C19A6B",
            areaStyle: { color: "rgba(198, 154, 107, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //min data set
            name: "Floor 25",
            data: [16, 61, 37],
            type: "line",
            fontSize: 30,
            color: "#ff0080",
            areaStyle: { color: "rgba(255, 0, 128, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //max data set
            name: "Floor 26",
            data: [61, 12, 43],
            type: "line",
            fontSize: 30,
            color: "#8000ff",
            areaStyle: { color: "rgba(128, 0, 255, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //average data set
            name: "Floor 27",
            data: [0, 0, 0],
            type: "line",
            fontSize: 30,
            color: "#321414",
            areaStyle: { color: "rgba(50, 20, 20, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            //average data set
            name: "Floor 28",
            data: [51, 43, 28],
            type: "line",
            fontSize: 30,
            color: "#321414",
            areaStyle: { color: "rgba(50, 20, 20, 0.2)" },
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
              emphasis: {
                focus: "series",
              },
            },
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
  },
  // updated() {
  //   const option = {
  //     tooltip: {
  //       trigger: "axis",
  //       axisPointer: {
  //         type: "cross",
  //         crossStyle: {
  //           color: "#999",
  //         },
  //       },
  //     },
  //     // toolbox: {
  //     //   feature: {
  //     //     saveAsImage: { show: true, title: "Save" },
  //     //   },
  //     // },
  //     legend: {
  //       data: ["Min", "Max", "Avg"],
  //       textStyle: {
  //         fontSize: 12,
  //       },
  //     },
  //     xAxis: {
  //       name: this.xAxis,
  //       offset: 20,
  //       nameLocation: "center",
  //       nameTextStyle: {
  //         fontSize: 12,
  //       },
  //       axisLabel: {
  //         fontSize: 12,
  //         verticalAlign: "bottom",
  //       },
  //       type: "category",
  //       data: 10,
  //     },
  //     yAxis: {
  //       nameTextStyle: {
  //         fontSize: 12,
  //       },
  //       name: this.yAxis,
  //       type: "value",
  //       min: 0,
  //       max: this.max,
  //       axisLabel: {
  //         // formatter: "{value} cm",
  //         fontSize: 12,
  //       },
  //     },

  //     series: [
  //       {
  //         //min data set
  //         name: "Min",
  //         data: [10, 20, 30],
  //         type: "line",
  //         fontSize: 30,
  //         color: "#36c25b",
  //         areaStyle: { color: "rgba(135, 211, 124, 1)" },
  //         label: {
  //           color: "black",
  //           fontSize: 15,
  //           formatter: function (d) {
  //             return d.name + d.data;
  //           },
  //         },
  //       },
  //       {
  //         //max data set
  //         name: "Max",
  //         data: [20, 10, 30],
  //         type: "line",
  //         fontSize: 30,
  //         color: "#f52525",
  //         areaStyle: { color: "rgba(246, 36, 89, 0.2)" },
  //         label: {
  //           color: "black",
  //           fontSize: 15,
  //           formatter: function (d) {
  //             return d.name + d.data;
  //           },
  //         },
  //       },
  //       {
  //         //average data set
  //         name: "Avg",
  //         data: [40, 10, 20],
  //         type: "line",
  //         fontSize: 30,
  //         color: "#1930fc",
  //         areaStyle: { color: "rgba(137, 196, 244, 0.5)" },
  //         label: {
  //           color: "black",
  //           fontSize: 15,
  //           formatter: function (d) {
  //             return d.name + d.data;
  //           },
  //         },
  //       },
  //     ],
  //   };
  //   // var myChart = this.$echarts.init(document.getElementById(this.id));
  //   myChart.setOption(option, true);
  //   // console.log(this.data)
  // },
  props: ["id"],
  // props: ["data", "id", "title", "xAxis", "yAxis", "max"],
};
</script>

<style scoped>
.v-card__title {
  font-size: 1rem;
  padding: 8px 10px 8px 20px;
  color: aliceblue;
}

.level {
  background-color: white;
}
</style>
