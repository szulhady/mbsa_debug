exports.ids = [16];
exports.modules = {

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(331);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5202d405", content, true, context)
};

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineGraph_vue_vue_type_style_index_0_id_1ea88728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineGraph_vue_vue_type_style_index_0_id_1ea88728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineGraph_vue_vue_type_style_index_0_id_1ea88728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineGraph_vue_vue_type_style_index_0_id_1ea88728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineGraph_vue_vue_type_style_index_0_id_1ea88728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__title[data-v-1ea88728]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}.level[data-v-1ea88728]{background-color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LineGraph.vue?vue&type=template&id=1ea88728&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",_vm.id))+" style=\"width: 100%; height: 320px\" data-v-1ea88728></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/LineGraph.vue?vue&type=template&id=1ea88728&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LineGraph.vue?vue&type=script&lang=js&
//
//
//
//
//
//
let myChart;
/* harmony default export */ var LineGraphvue_type_script_lang_js_ = ({
  data() {
    return {
      option: {
        grid: {
          y: 100,
          y2: 25
        },
        tooltip: {
          position: function (point, params, dom, rect, size) {
            // fixed at top
            return [point[2], "10%"];
          },
          padding: [20, // up
          50, // right
          20, // down
          50 // left
          ],
          appendToBody: true,
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: { show: true, title: "Save" },
        //   },
        // },
        legend: {
          data: ["LG2", "LG1", "Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5", "Floor 6", "Floor 7", "Floor 8", "Floor 9", "Floor 10", "Floor 11", "Floor 12", "Floor 13", "Floor 14", "Floor 15", "Floor 16", "Floor 17", "Floor 18", "Floor 19", "Floor 20", "Floor 21", "Floor 22", "Floor 23", "Floor 24", "Floor 25", "Floor 26", "Floor 27", "Floor 28"],
          textStyle: {
            fontSize: 12
          }
        },
        xAxis: {
          name: this.xAxis,
          offset: 15,
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 12
          },
          axisLabel: {
            fontSize: 12,
            verticalAlign: "bottom"
          },
          axisPointer: {
            label: {
              margin: 200,
              fontStyle: "italic",
              height: 100,
              formatter: function (params) {
                return "Month  :" + params.value // (params.seriesData.length
                //   ? "：" + params.seriesData[0].data
                //   : "")
                ;
              }
            }
          },
          type: "category",
          data: ["Jan", "Feb", "Mar"]
        },
        yAxis: {
          nameTextStyle: {
            fontSize: 12
          },
          name: this.yAxis,
          type: "value",
          min: 0,
          max: this.max,
          axisLabel: {
            // formatter: "{value} cm",
            fontSize: 12
          }
        },
        series: [{
          //min data set
          name: "LG2",
          data: [10, 20, 30],
          type: "line",
          fontSize: 30,
          color: "#ff0000",
          areaStyle: {
            color: "rgba(255, 0, 0, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "LG1",
          data: [20, 10, 30],
          type: "line",
          fontSize: 30,
          color: "#0000ff",
          areaStyle: {
            color: "rgba(0, 0, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 1",
          data: [40, 10, 20],
          type: "line",
          fontSize: 30,
          color: "#8E4585",
          areaStyle: {
            color: "rgba(142, 69, 133, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 2",
          data: [30, 50, 10],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 3",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 4",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 5",
          data: [5, 71, 34],
          type: "line",
          fontSize: 30,
          color: "#ff8000",
          areaStyle: {
            color: "rgba(255, 128, 0, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 6",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#ff0000",
          areaStyle: {
            color: "rgba(255, 0, 0, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 7",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#0000ff",
          areaStyle: {
            color: "rgba(0, 0, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 8",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#8E4585",
          areaStyle: {
            color: "rgba(142, 69, 133, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 9",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 10",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 11",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 12",
          data: [5, 71, 34],
          type: "line",
          fontSize: 30,
          color: "#ff8000",
          areaStyle: {
            color: "rgba(255, 128, 0, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 13",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#00ff00",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 14",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#ff8000",
          areaStyle: {
            color: "rgba(255, 128, 0, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 15",
          data: [42, 11, 41],
          type: "line",
          fontSize: 30,
          color: "#0080ff",
          areaStyle: {
            color: "rgba(0, 128, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 16",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#0080ff",
          areaStyle: {
            color: "rgba(0, 128, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 17",
          data: [32, 13, 51],
          type: "line",
          fontSize: 30,
          color: "#006B3C",
          areaStyle: {
            color: "rgba(0, 107, 60, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 18",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#0080ff",
          areaStyle: {
            color: "rgba(0, 128, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 19",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#0080ff",
          areaStyle: {
            color: "rgba(0, 128, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 20",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#006B3C",
          areaStyle: {
            color: "rgba(0, 107, 60, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 21",
          data: [43, 12, 41],
          type: "line",
          fontSize: 30,
          color: "#FF00FF",
          areaStyle: {
            color: "rgba(255, 0, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 22",
          data: [21, 12, 12],
          type: "line",
          fontSize: 30,
          color: "#C19A6B",
          areaStyle: {
            color: "rgba(198, 154, 107, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 23",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#FF00FF",
          areaStyle: {
            color: "rgba(255, 0, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 24",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#C19A6B",
          areaStyle: {
            color: "rgba(198, 154, 107, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //min data set
          name: "Floor 25",
          data: [16, 61, 37],
          type: "line",
          fontSize: 30,
          color: "#ff0080",
          areaStyle: {
            color: "rgba(255, 0, 128, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //max data set
          name: "Floor 26",
          data: [61, 12, 43],
          type: "line",
          fontSize: 30,
          color: "#8000ff",
          areaStyle: {
            color: "rgba(128, 0, 255, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 27",
          data: [0, 0, 0],
          type: "line",
          fontSize: 30,
          color: "#321414",
          areaStyle: {
            color: "rgba(50, 20, 20, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          },
          emphasis: {
            focus: "series"
          }
        }, {
          //average data set
          name: "Floor 28",
          data: [51, 43, 28],
          type: "line",
          fontSize: 30,
          color: "#321414",
          areaStyle: {
            color: "rgba(50, 20, 20, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            },
            emphasis: {
              focus: "series"
            }
          }
        }]
      }
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
  props: ["id"] // props: ["data", "id", "title", "xAxis", "yAxis", "max"],

});
// CONCATENATED MODULE: ./components/LineGraph.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LineGraphvue_type_script_lang_js_ = (LineGraphvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/LineGraph.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(330)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LineGraphvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1ea88728",
  "adc9f2be"
  
)

/* harmony default export */ var LineGraph = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=line-graph.js.map