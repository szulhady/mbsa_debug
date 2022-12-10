exports.ids = [7];
exports.modules = {

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(279);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("a150788a", content, true, context)
};

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassButton_vue_vue_type_style_index_0_id_2312691f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassButton_vue_vue_type_style_index_0_id_2312691f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassButton_vue_vue_type_style_index_0_id_2312691f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassButton_vue_vue_type_style_index_0_id_2312691f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassButton_vue_vue_type_style_index_0_id_2312691f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".neon3[data-v-2312691f]{font-size:var(--font-size);position:relative;cursor:pointer;border:.125em solid var(--clr-neon);padding:.25em 1em;border-radius:.25em;text-shadow:0 0 .2em hsla(0,0%,100%,.46667),0 0 .3em var(--clr-neon);box-shadow:inset 0 0 .5em var(--clr-neon),0 0 .5em var(--clr-neon)}.neon3[data-v-2312691f]:before{top:90%;width:100%;height:100%;transform:perspective(1.2em) rotateX(5deg) scaleY(0);filter:blur(.5em);opacity:.6;pointer-events:none}.neon3[data-v-2312691f]:after,.neon3[data-v-2312691f]:before{content:\"\";position:absolute;left:0;background:var(--clr-neon);transition:opacity .1s linear}.neon3[data-v-2312691f]:after{top:0;right:0;bottom:0;box-shadow:0 0 2em var(--clr-neon);z-index:-1;opacity:0}.neon3[data-v-2312691f]:hover:after{opacity:1}.neon3[data-v-2312691f]:focus,.neon3[data-v-2312691f]:hover{color:#fff}.neon3[data-v-2312691f]:hover:before{opacity:.8}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ClassButton.vue?vue&type=template&id=2312691f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-btn',{staticClass:"neon3",staticStyle:{"width":"9vw","height":"7vh","font-size":"0.8em"}},[_vm._v(_vm._s(_vm.detail))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ClassButton.vue?vue&type=template&id=2312691f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ClassButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var ClassButtonvue_type_script_lang_js_ = ({
  mounted() {},

  methods: {},
  props: ["detail"]
});
// CONCATENATED MODULE: ./components/ClassButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ClassButtonvue_type_script_lang_js_ = (ClassButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(59);

// CONCATENATED MODULE: ./components/ClassButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(278)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ClassButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2312691f",
  "fc1ba01e"
  
)

/* harmony default export */ var ClassButton = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VBtn: VBtn["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=class-button.js.map