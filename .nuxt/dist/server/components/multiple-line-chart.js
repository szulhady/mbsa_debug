exports.ids = [22];
exports.modules = {

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("40b0db87", content, true, context)
};

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleLineChart_vue_vue_type_style_index_0_id_049cab10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleLineChart_vue_vue_type_style_index_0_id_049cab10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleLineChart_vue_vue_type_style_index_0_id_049cab10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleLineChart_vue_vue_type_style_index_0_id_049cab10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleLineChart_vue_vue_type_style_index_0_id_049cab10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__subtitle[data-v-049cab10]{font-size:.9em;padding:0 0 0 40px;color:#f0f8ff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MultipleLineChart.vue?vue&type=template&id=049cab10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_c('v-card-subtitle',{staticClass:"sidebar rounded-lg mb-3"},[_vm._v("\n    "+_vm._s(_vm.title)+"\n  ")]),_vm._ssrNode(" <div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("data",_vm.data))+(_vm._ssrAttr("xAxis",_vm.xAxis))+(_vm._ssrAttr("min",_vm.min))+(_vm._ssrAttr("max",_vm.max))+(_vm._ssrAttr("avg",_vm.avg))+(_vm._ssrAttr("time",_vm.time))+(_vm._ssrAttr("max2",_vm.max2))+" style=\"width: 100%; height: 33vh\" data-v-049cab10></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MultipleLineChart.vue?vue&type=template&id=049cab10&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MultipleLineChart.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
/* harmony default export */ var MultipleLineChartvue_type_script_lang_js_ = ({
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
        // toolbox: {
        //   feature: {
        //     saveAsImage: { show: true, title: "Save" },
        //   },
        // },
        grid: {
          left: 80
        },
        legend: {
          data: ["Min", "Max", "Avg"],
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        },
        xAxis: {
          name: this.xAxis,
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
          name: "%",
          type: "value",
          min: 0,
          max: this.max2,
          axisLabel: {
            formatter: function (value, index) {
              return value / 1000 + "k";
            },
            fontSize: 12,
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [{
          //min data set
          name: "Min",
          data: this.min,
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
        }, {
          //max data set
          name: "Max",
          data: this.max,
          type: "line",
          fontSize: 30,
          color: "#f52525",
          areaStyle: {
            color: "rgba(246, 36, 89, 0.2)"
          },
          label: {
            color: "black",
            fontSize: 15,
            formatter: function (d) {
              return d.name + d.data;
            }
          }
        }, {
          //average data set
          name: "Avg",
          data: this.avg,
          type: "line",
          fontSize: 30,
          color: "#1930fc",
          areaStyle: {
            color: "rgba(137, 196, 244, 0.5)"
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
    }, 1);
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
      // toolbox: {
      //   feature: {
      //     saveAsImage: { show: true, title: "Save" },
      //   },
      // },
      grid: {
        left: 80
      },
      legend: {
        data: ["Min", "Max", "Avg"],
        textStyle: {
          fontSize: 12,
          color: "#fff"
        }
      },
      xAxis: {
        name: this.xAxis,
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
        name: "%",
        type: "value",
        min: 0,
        max: this.max2,
        axisLabel: {
          formatter: function (value, index) {
            return value / 1000 + "k";
          },
          fontSize: 12,
          textStyle: {
            color: "#fff"
          }
        }
      },
      series: [{
        //min data set
        name: "Min",
        data: this.min,
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
      }, {
        //max data set
        name: "Max",
        data: this.max,
        type: "line",
        fontSize: 30,
        color: "#f52525",
        areaStyle: {
          color: "rgba(246, 36, 89, 0.2)"
        },
        label: {
          color: "black",
          fontSize: 15,
          formatter: function (d) {
            return d.name + d.data;
          }
        }
      }, {
        //average data set
        name: "Avg",
        data: this.avg,
        type: "line",
        fontSize: 30,
        color: "#1930fc",
        areaStyle: {
          color: "rgba(137, 196, 244, 0.5)"
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

  props: ["data", "id", "title", "xAxis", "max2", "min", "max", "avg", "time"]
});
// CONCATENATED MODULE: ./components/MultipleLineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MultipleLineChartvue_type_script_lang_js_ = (MultipleLineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(13);

// CONCATENATED MODULE: ./components/MultipleLineChart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(312)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MultipleLineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "049cab10",
  "3ef87a01"
  
)

/* harmony default export */ var MultipleLineChart = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VCardSubtitle: VCard["b" /* VCardSubtitle */]})


/***/ })

};;
//# sourceMappingURL=multiple-line-chart.js.map