exports.ids = [10];
exports.modules = {

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("402b97cf", content, true, context)
};

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ub4lok1.7d6ea60.svg";

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/v0mu1i.5253330.svg";

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailCard.vue?vue&type=template&id=6f71a786&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-card',{staticClass:"right elevation-10",staticStyle:{"border-radius":"20px"}},[_c('v-card-title',{staticClass:"inner-right"},[_vm._v(" "+_vm._s(_vm.title)+" ")]),_vm._v(" "),_c('v-card-title',{staticClass:"description",staticStyle:{"padding-top":"10 !important"}},[_vm._v("\n      "+_vm._s(_vm.description)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"icon"},[_c('div',{staticClass:"brand-logo",staticStyle:{"z-index":"100, overflow:visible"}},[_c('img',{staticClass:"brand-logo",staticStyle:{"overflow":"visible"},attrs:{"src":__webpack_require__(234)("./" + _vm.icon),"alt":"nex-plex-logo","width":"100%"}})])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DetailCard.vue?vue&type=template&id=6f71a786&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailCard.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var DetailCardvue_type_script_lang_js_ = ({
  props: ["title", "icon", "description"]
});
// CONCATENATED MODULE: ./components/DetailCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DetailCardvue_type_script_lang_js_ = (DetailCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(13);

// CONCATENATED MODULE: ./components/DetailCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(257)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DetailCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f71a786",
  "5210e3aa"
  
)

/* harmony default export */ var DetailCard = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["d" /* VCardTitle */]})


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.png": 235,
	"./CEI.png": 236,
	"./Jersey.ttf": 84,
	"./MBSA.jpg": 237,
	"./MBSA.png": 238,
	"./NETFLOORAREA.png": 239,
	"./NEXPLEX.png": 240,
	"./NOOFFLOOR.png": 241,
	"./OCCUPANTS.png": 242,
	"./OWNER.png": 243,
	"./SEAIC.png": 87,
	"./SRI.png": 86,
	"./SRI2.jpg": 244,
	"./UITM.png": 85,
	"./bg.jpg": 245,
	"./bg2.svg": 246,
	"./border.png": 247,
	"./carbon.png": 248,
	"./frame.png": 249,
	"./frame.svg": 250,
	"./pattern.png": 60,
	"./pin.jpg": 251,
	"./pin2.png": 252,
	"./selangor.svg": 253,
	"./ub4lok.svg": 254,
	"./ub4lok1.svg": 208,
	"./v0mu1i.svg": 209,
	"./variables.scss": 255
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 234;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.b1cbd71.png";

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/CEI.c6d4241.png";

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/MBSA.d004b15.jpg";

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/MBSA.f0d2b8d.png";

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/NETFLOORAREA.a1ae403.png";

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/NEXPLEX.772279d.png";

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/NOOFFLOOR.d1dd690.png";

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/OCCUPANTS.b1cbd71.png";

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/OWNER.60b15c6.png";

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/SRI2.c3c02c9.jpg";

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.c0636d0.jpg";

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg2.661d774.svg";

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/border.4eb5f60.png";

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/carbon.c6d4241.png";

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/frame.acbddbb.png";

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNDY3LjAwMDAwMHB0IiBoZWlnaHQ9IjM1MC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDQ2Ny4wMDAwMDAgMzUwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMzUwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTAgMTc1MCBsMCAtMTc1MCAyMzM1IDAgMjMzNSAwIDAgMTc1MCAwIDE3NTAgLTIzMzUgMCAtMjMzNSAwIDAKLTE3NTB6IG0zOTgyIDE2MzEgbDQzIC02MCAyNjMgMCAyNjIgLTEgMCAtNDYzIDAgLTQ2MyAzMCAtMjkgMzAgLTI5IDAgLTQ3MSAwCi00NzIgLTYwIC01NiAtNjAgLTU3IDAgLTU1MCAwIC01NTAgLTY1NyAtMiBjLTM2MiAtMiAtNjc5IC0yIC03MDUgLTEgLTQ2IDIKLTQ5IDAgLTEwMSAtNTcgbC01NCAtNjAgLTk4NSAwIC05ODQgMCAtMjkgMzAgLTI5IDMwIC0zODMgMCAtMzgzIDAgMCAzNzggMAozNzkgLTYwIDU3IC02MCA1NyAwIDIyOCAwIDIyNyAzMCAyOSAzMCAyOSAwIDQ5OCBjMCA0ODUgLTEgNDk5IC0yMCA1MTggLTExCjExIC0yNSAyMCAtMzAgMjAgLTYgMCAtMTAgNzkgLTkgMjE4IGwxIDIxNyA1OCA1MCA1OCA1MCAxIDE1NCAxIDE1NCA1MjMgLTcKNTIyIC03IDM0IDM1IDM1IDM2IDEzMjIgMCAxMzIyIDAgNDQgLTU5eiBtNjQxIC0zMjc2IGM0IC04IDIgLTE3IC0zIC0yMCAtNgotNCAtMTAgMyAtMTAgMTQgMCAyNSA2IDI3IDEzIDZ6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pin.b414c85.jpg";

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAwCAMAAACsRTNeAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAZlBMVEUAAADGISHGISHCIR3GISHGJSXGIR3GIR3GIR2+ISHCISHGISHGIR3GISHGIR3CIR3GJSHGIR3GIR3WMSnqQzXOKSXmPzHSLSXiPDHKJSHGJSHeOS3aNS2+HRmyFRHKKSHiOS3iPzF0SiX0AAAAEnRSTlMAhDzGVB2o6rIKnHRoLeLWaN5BSZ8zAAABdUlEQVR42u39V3KEMAxAAZi2fXcTyd203P+SoQTjyk4O8P5g3kio8U3+TVms1NeM0BQVaIGIQsG5eKaUEyhDNziDqgmNJ4CkLnyAh688oKUhRt08RccKpVLf3ESGppBQW2dKlIZDuVWkaQ68bJl41uHqvjgFc9+2iF6ganEqpzGi6yfEHljCrNSwK/3GXqeYSyuUfWbW6fZkp9mx+dt+x3YDO88RjmMDtZB1+v84uDjiMBeeZ8dOwjiOLX6py+nPEIehbO7P9Txuz7zbFBtGwrL+ThMpLoozQHwn5s5H70kX63JUTqAAUf1dWpNZ1XkP7bLeh5+0w052n8mFpTOBc9PNGROKAe+gy+/4NKSqiUcJY6iwCwm46eA6WPxTCL/bdsbD+24DTUIh5WuX3Ev3qPfBsRvJcBn+FHzlFHKFNVsL96xDinUn3THFLLXJrjxyHoofffDK/EvL1b1xwvUyjyiA6/cHZ/qXf0o19RHg+skpi6/w1S8tW0/UXw6dAwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/selangor.ece6b56.svg";

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ub4lok.df36bde.svg";

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("22618b18", content, true)

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCard_vue_vue_type_style_index_0_id_6f71a786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCard_vue_vue_type_style_index_0_id_6f71a786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCard_vue_vue_type_style_index_0_id_6f71a786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCard_vue_vue_type_style_index_0_id_6f71a786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCard_vue_vue_type_style_index_0_id_6f71a786_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__title[data-v-6f71a786]{padding:10px}.right[data-v-6f71a786]{display:flex;flex-direction:column;align-items:flex-end;min-height:136px;overflow:visible}.inner-right[data-v-6f71a786]{width:68%;justify-content:flex-end;font-size:1rem;white-space:unset!important}.description[data-v-6f71a786]{font-size:1.4rem}.icon[data-v-6f71a786]{position:absolute;top:-30px;left:40px;width:80px;height:80px}@media (max-width:1000px){.icon[data-v-6f71a786]{position:absolute;top:-20px;left:20px;width:60px;height:60px}.inner-right[data-v-6f71a786]{width:100%;justify-content:flex-end;font-size:1rem;white-space:unset!important}}@media (max-width:850px){.icon[data-v-6f71a786]{display:none}.inner-right[data-v-6f71a786]{display:block;width:100%;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}}@media (max-width:660px){.description[data-v-6f71a786]{font-size:1.1rem}}@media (max-width:580px){.description[data-v-6f71a786]{font-size:1.2rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=detail-card.js.map