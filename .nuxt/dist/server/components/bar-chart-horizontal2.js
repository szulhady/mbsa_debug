exports.ids = [4];
exports.modules = {

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1dbcc623", content, true, context)
};

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal2_vue_vue_type_style_index_0_id_25d05192_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal2_vue_vue_type_style_index_0_id_25d05192_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal2_vue_vue_type_style_index_0_id_25d05192_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal2_vue_vue_type_style_index_0_id_25d05192_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal2_vue_vue_type_style_index_0_id_25d05192_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__subtitle[data-v-25d05192]{font-size:.9em;padding:0 0 0 40px;color:#f0f8ff}.level[data-v-25d05192]{width:100%!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarChartHorizontal2.vue?vue&type=template&id=25d05192&scoped=true&v-show=%24vuetify.breakpoint.lgAndUp&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_c('v-card-subtitle',{staticClass:"sidebar rounded-lg pt-3"},[_vm._v("\n    CUMULTIVE ENERGY IN A YEAR\n  ")]),_vm._ssrNode(" <div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("data",_vm.data))+" style=\"width: 100%; height: 100%; height: 33vh\" data-v-25d05192></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BarChartHorizontal2.vue?vue&type=template&id=25d05192&scoped=true&v-show=%24vuetify.breakpoint.lgAndUp&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarChartHorizontal2.vue?vue&type=script&lang=js&
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
//
//
//

let myChart;
/* harmony default export */ var BarChartHorizontal2vue_type_script_lang_js_ = ({
  data() {
    return {
      dataWeek1: [200000],
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow" // 'shadow' as default; can also be 'line' or 'shadow'

          }
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
          x2: 70
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
          data: [this.time]
        },
        series: [{
          name: "Cumulative energy in a year",
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
          data: this.data
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
    }, 2); // this.getData();
  },

  methods: {
    getData: function () {
      this.$axios // .$get(`${this.url}/api/total/weekday`, {})
      // .$get("http://104.248.158.194/api/total/weekday", {})
      // .$get("http://68.183.189.84:5000/api/total/weekday", {})
      .$get("https://soap.txio.live/api/total/weekday", {}).then(response => {
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
      // legend: {
      //   textStyle: {
      //     color: "white",
      //   },
      // },
      grid: {
        y: 20,
        y2: 60,
        x: 70,
        x2: 70
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
        data: [this.time]
      },
      series: [{
        name: "Cumulative energy in a year",
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
        data: this.data
      }]
    }; // var myChart = this.$echarts.init(document.getElementById(this.id));

    setTimeout(() => {
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 1);
  },

  props: ["data", "yAxis", "max", "time", "title", "id"],
  computed: Object(external_vuex_["mapState"])({
    url: state => state.url
  })
});
// CONCATENATED MODULE: ./components/BarChartHorizontal2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BarChartHorizontal2vue_type_script_lang_js_ = (BarChartHorizontal2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(13);

// CONCATENATED MODULE: ./components/BarChartHorizontal2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(306)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BarChartHorizontal2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "25d05192",
  "b22b94ac"
  
)

/* harmony default export */ var BarChartHorizontal2 = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VCardSubtitle: VCard["b" /* VCardSubtitle */]})


/***/ })

};;
//# sourceMappingURL=bar-chart-horizontal2.js.map