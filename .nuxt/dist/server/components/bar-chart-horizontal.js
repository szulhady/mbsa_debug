exports.ids = [3];
exports.modules = {

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1f014a5c", content, true, context)
};

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal_vue_vue_type_style_index_0_id_169edf91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal_vue_vue_type_style_index_0_id_169edf91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal_vue_vue_type_style_index_0_id_169edf91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal_vue_vue_type_style_index_0_id_169edf91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal_vue_vue_type_style_index_0_id_169edf91_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__title[data-v-169edf91]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}.level[data-v-169edf91]{height:37vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarChartHorizontal.vue?vue&type=template&id=169edf91&scoped=true&v-show=%24vuetify.breakpoint.lgAndUp&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("dataWeek1",_vm.dataWeek1))+" style=\"width: 100%; height: 100%; min-height: 200px\" data-v-169edf91></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BarChartHorizontal.vue?vue&type=template&id=169edf91&scoped=true&v-show=%24vuetify.breakpoint.lgAndUp&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarChartHorizontal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

let myChart;
/* harmony default export */ var BarChartHorizontalvue_type_script_lang_js_ = ({
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
            type: "shadow" // 'shadow' as default; can also be 'line' or 'shadow'

          }
        },
        legend: {
          textStyle: {
            color: "white"
          }
        },
        grid: {
          y: 60,
          y2: 40,
          x2: 15
        },
        xAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "white"
            },
            // interval: 0,
            // rotate: "45",
            clickable: true,
            //And add click events to the chart to determine where to click based on the return value
            interval: 0,
            formatter: function (params, index) {
              if (index % 2 != 0) {
                return; // return "\n\n" + params;
              } else {
                return params;
              }
            }
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: "white"
            }
          },
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        series: [{
          name: "Week 1",
          type: "bar",
          stack: "total",
          barGap: "-100%",
          barCategoryGap: "20%",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          // data: [197767, 15347, 118843, 77023, 79366, 98499, 90751],
          data: this.dataWeek1
        }, {
          name: "Week 2",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          // data: [79700, 0, 0, 13632, 0, 0, 46611],
          data: this.dataWeek2
        }, {
          name: "Week 3",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          // data: [15432, 0, 41836, 0, 0, 0, 46263],
          data: this.dataWeek3
        }, {
          name: "Week 4",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          // data: [19675, 0, 0, 35002, 43501, 0, 21344],
          data: this.dataWeek4
        }, {
          name: "Week 5",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          // data: [0, 0, 0, 0, 19342, 32222, 0],
          data: this.dataWeek5
        }, {
          name: "Week 6",
          type: "bar",
          stack: "total",
          label: {
            show: true
          },
          emphasis: {
            focus: "series"
          },
          // data: [0, 26354, 0, 0, 0, 0, 0],
          data: this.dataWeek6
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
    this.getData();
  },

  methods: {
    getData: function () {
      this.$axios // .$get(`${this.url}/api/total/weekday`, {})
      // .$get("http://104.248.158.194/api/total/weekday", {})
      // .$get("http://68.183.189.84:5000/api/total/weekday", {})
      .$get("https://debug2.qwazx.one:5000/api/total/weekday", {}).then(response => {
        console.log(response);
        this.dataWeek1 = response.dataWeek1;
        this.dataWeek2 = response.dataWeek2;
        this.dataWeek3 = response.dataWeek3;
        this.dataWeek4 = response.dataWeek4;
        this.dataWeek5 = response.dataWeek5;
        this.dataWeek6 = response.dataWeek6; // window.location.reload();
      }).catch(error => {
        console.log(error);
      });
    }
  },

  updated() {
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // Use axis to trigger tooltip
          type: "shadow" // 'shadow' as default; can also be 'line' or 'shadow'

        }
      },
      legend: {
        textStyle: {
          color: "white"
        }
      },
      grid: {
        y: 60,
        y2: 40,
        x2: 15
      },
      xAxis: {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "white"
          },
          // interval: 0,
          // rotate: "45",
          clickable: true,
          //And add click events to the chart to determine where to click based on the return value
          interval: 0,
          formatter: function (params, index) {
            if (index % 2 != 0) {
              return; // return "\n\n" + params;
            } else {
              return params;
            }
          }
        }
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: "white"
          }
        },
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      series: [{
        name: "Week 1",
        type: "bar",
        stack: "total",
        barGap: "-100%",
        barCategoryGap: "20%",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        // data: [197767, 15347, 118843, 77023, 79366, 98499, 90751],
        data: this.dataWeek1
      }, {
        name: "Week 2",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        // data: [79700, 0, 0, 13632, 0, 0, 46611],
        data: this.dataWeek2
      }, {
        name: "Week 3",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        // data: [15432, 0, 41836, 0, 0, 0, 46263],
        data: this.dataWeek3
      }, {
        name: "Week 4",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        // data: [19675, 0, 0, 35002, 43501, 0, 21344],
        data: this.dataWeek4
      }, {
        name: "Week 5",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        // data: [0, 0, 0, 0, 19342, 32222, 0],
        data: this.dataWeek5
      }, {
        name: "Week 6",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        // data: [0, 26354, 0, 0, 0, 0, 0],
        data: this.dataWeek6
      }]
    }; // var myChart = this.$echarts.init(document.getElementById(this.id));

    setTimeout(() => {
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 1);
  },

  props: ["id"],
  computed: Object(external_vuex_["mapState"])({
    url: state => state.url
  })
});
// CONCATENATED MODULE: ./components/BarChartHorizontal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BarChartHorizontalvue_type_script_lang_js_ = (BarChartHorizontalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/BarChartHorizontal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(318)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BarChartHorizontalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "169edf91",
  "cbf26a90"
  
)

/* harmony default export */ var BarChartHorizontal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=bar-chart-horizontal.js.map