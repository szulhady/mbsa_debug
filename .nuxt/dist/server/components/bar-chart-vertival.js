exports.ids = [5];
exports.modules = {

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1c5647a4", content, true, context)
};

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartVertival_vue_vue_type_style_index_0_id_d7d2d23a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(285);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartVertival_vue_vue_type_style_index_0_id_d7d2d23a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartVertival_vue_vue_type_style_index_0_id_d7d2d23a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartVertival_vue_vue_type_style_index_0_id_d7d2d23a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartVertival_vue_vue_type_style_index_0_id_d7d2d23a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__title[data-v-d7d2d23a]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}.level[data-v-d7d2d23a]{height:40vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarChartVertival.vue?vue&type=template&id=d7d2d23a&scoped=true&v-show=%24vuetify.breakpoint.lgAndUp&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("total",_vm.total))+" style=\"width: 100%; height: 100%; min-height: 200px\" data-v-d7d2d23a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BarChartVertival.vue?vue&type=template&id=d7d2d23a&scoped=true&v-show=%24vuetify.breakpoint.lgAndUp&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarChartVertival.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BarChartVertivalvue_type_script_lang_js_ = ({
  data() {
    return {
      total: [],
      month: [],
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "30%",
          top: "10%",
          containLabel: true
        },
        xAxis: [{
          type: "category",
          data: this.month,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: "white"
            }
          }
        }],
        yAxis: [{
          type: "value",
          axisLabel: {
            textStyle: {
              color: "white"
            }
          }
        }],
        series: [{
          name: "KWH",
          type: "bar",
          barWidth: "60%",
          data: this.total
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
      this.$axios // .$get(`${this.url}/api/total/month`, {})
      // .$get("http://104.248.158.194/api/total/month", {})
      // .$get("http://68.183.189.84:5000/api/total/month", {})
      .$get("https://debug2.qwazx.one:5000/api/total/month", {}).then(response => {
        // console.log(response);
        this.month = response.month;
        this.total = response.total; // window.location.reload();
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
          type: "shadow"
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "30%",
        top: "10%",
        containLabel: true
      },
      xAxis: [{
        type: "category",
        data: this.month,
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "white"
          }
        }
      }],
      yAxis: [{
        type: "value",
        axisLabel: {
          textStyle: {
            color: "white"
          }
        }
      }],
      series: [{
        name: "KWH",
        type: "bar",
        barWidth: "60%",
        data: this.total
      }]
    }; // var myChart = this.$echarts.init(document.getElementById(this.id));

    setTimeout(() => {
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 1); // console.log(this.data)
  },

  props: ["id"],
  computed: Object(external_vuex_["mapState"])({
    url: state => state.url
  })
});
// CONCATENATED MODULE: ./components/BarChartVertival.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BarChartVertivalvue_type_script_lang_js_ = (BarChartVertivalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/BarChartVertival.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(320)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BarChartVertivalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d7d2d23a",
  "00b161dd"
  
)

/* harmony default export */ var BarChartVertival = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=bar-chart-vertival.js.map