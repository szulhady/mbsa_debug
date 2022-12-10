exports.ids = [28];
exports.modules = {

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(305);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0a29559b", content, true, context)
};

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineChart2_vue_vue_type_style_index_0_id_ec5ac77c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(275);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineChart2_vue_vue_type_style_index_0_id_ec5ac77c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineChart2_vue_vue_type_style_index_0_id_ec5ac77c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineChart2_vue_vue_type_style_index_0_id_ec5ac77c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineChart2_vue_vue_type_style_index_0_id_ec5ac77c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__subtitle[data-v-ec5ac77c]{font-size:.9em;padding:0 0 0 40px;color:#f0f8ff}.level[data-v-ec5ac77c]{width:100%!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SingleLineChart2.vue?vue&type=template&id=ec5ac77c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_c('v-card-subtitle',{staticClass:"sidebar rounded-lg pt-3"},[_vm._v("\n    "+_vm._s(_vm.title.toUpperCase())+"\n  ")]),_vm._ssrNode(" <div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("data",_vm.data))+" style=\"width: 100%; height: 33vh\" data-v-ec5ac77c></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SingleLineChart2.vue?vue&type=template&id=ec5ac77c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SingleLineChart2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SingleLineChart2vue_type_script_lang_js_ = ({
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        grid: {
          left: 90,
          right: 70
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: { show: true, title: "Save" },
        //   },
        // },
        legend: {
          data: ["Current"],
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        },
        xAxis: {
          name: "Year",
          offset: 20,
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 12,
            color: "#fff"
          },
          axisLabel: {
            fontSize: 12,
            verticalAlign: "bottom",
            textStyle: {
              color: "#fff"
            }
          },
          type: "category",
          data: this.time
        },
        yAxis: {
          nameTextStyle: {
            fontSize: 12,
            color: "#fff"
          },
          name: this.yAxis,
          type: "value",
          min: 0,
          // max: this.max,
          axisLabel: {
            // formatter: "{value} cm",
            fontSize: 12,
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [{
          //min data set
          name: "Current",
          data: this.data,
          type: "line",
          fontSize: 30,
          color: "#36c25b",
          areaStyle: {
            color: "rgba(135, 211, 124, 1)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          }
        }]
      }
    };
  },

  mounted() {
    setTimeout(() => {
      var myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.setOption(this.option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 2);
  },

  updated() {
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      grid: {
        left: 90,
        right: 70
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: { show: true, title: "Save" },
      //   },
      // },
      legend: {
        data: ["Current"],
        textStyle: {
          fontSize: 12,
          color: "#fff"
        }
      },
      xAxis: {
        name: "Year",
        offset: 20,
        nameLocation: "center",
        nameTextStyle: {
          fontSize: 12,
          color: "#fff"
        },
        axisLabel: {
          fontSize: 12,
          verticalAlign: "bottom",
          textStyle: {
            color: "#fff"
          }
        },
        type: "category",
        data: this.time
      },
      yAxis: {
        nameTextStyle: {
          fontSize: 12,
          color: "#fff"
        },
        name: this.yAxis,
        type: "value",
        min: 0,
        // max: this.max,
        axisLabel: {
          // formatter: "{value} cm",
          fontSize: 12,
          textStyle: {
            color: "#fff"
          }
        }
      },
      series: [{
        //min data set
        name: "Current",
        data: this.data,
        type: "line",
        fontSize: 30,
        color: "#36c25b",
        areaStyle: {
          color: "rgba(135, 211, 124, 1)"
        },
        label: {
          color: "black",
          fontSize: 15,
          formatter: function (d) {
            return d.name + d.data;
          }
        }
      }]
    };
    var myChart = this.$echarts.init(document.getElementById(this.id));
    myChart.setOption(option, true); // console.log(this.data)
  },

  props: ["data", "yAxis", "max", "time", "title", "id"],
  methods: {
    clickedShowDetailModal: function (value) {
      console.log("value"); // console.log(value);
      // this.productSelected = value;
    }
  }
});
// CONCATENATED MODULE: ./components/SingleLineChart2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SingleLineChart2vue_type_script_lang_js_ = (SingleLineChart2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(13);

// CONCATENATED MODULE: ./components/SingleLineChart2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(304)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SingleLineChart2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ec5ac77c",
  "33163bf9"
  
)

/* harmony default export */ var SingleLineChart2 = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VCardSubtitle: VCard["b" /* VCardSubtitle */]})


/***/ })

};;
//# sourceMappingURL=single-line-chart2.js.map