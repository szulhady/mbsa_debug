exports.ids = [33,3,5,6,9,10,11,13,19];
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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(289);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("63b13b84", content, true, context)
};

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(164);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(165);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(166);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(167);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(168);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(170);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(171);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(172);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(173);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(174);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(175);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];

function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "G"])(val)] = def();
    return props;
  }, {});
}

const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));

const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));

const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);

const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};

function breakpointClass(type, prop, val) {
  let className = classMap[type];

  if (val == null) {
    return undefined;
  }

  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },

  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("20c2c1c7", content, true)

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(287);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("46f7ed82", content, true)

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


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(164);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(165);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(166);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(167);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(168);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(170);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(171);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(172);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(173);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(174);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(175);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();

const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "G"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "G"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};

function breakpointClass(type, prop, val) {
  let className = type;

  if (val == null || val === false) {
    return undefined;
  }

  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      class: classList
    }), children);
  }

}));

/***/ }),

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
  add("80c92788", content, true, context)
};

/***/ }),

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
  add("6e524926", content, true, context)
};

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slick-track[data-v-e4caeaf8]{position:relative;top:0;left:0;display:block;transform:translateZ(0)}.slick-track.slick-center[data-v-e4caeaf8]{margin-left:auto;margin-right:auto}.slick-track[data-v-e4caeaf8]:after,.slick-track[data-v-e4caeaf8]:before{display:table;content:\"\"}.slick-track[data-v-e4caeaf8]:after{clear:both}.slick-loading .slick-track[data-v-e4caeaf8]{visibility:hidden}.slick-slide[data-v-e4caeaf8]{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide[data-v-e4caeaf8]{float:right}.slick-slide img[data-v-e4caeaf8]{display:block}.slick-slide.slick-loading img[data-v-e4caeaf8]{display:none}.slick-slide.dragging img[data-v-e4caeaf8]{pointer-events:none}.slick-initialized .slick-slide[data-v-e4caeaf8]{display:block}.slick-loading .slick-slide[data-v-e4caeaf8]{visibility:hidden}.slick-vertical .slick-slide[data-v-e4caeaf8]{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden[data-v-21137603]{display:none}.slick-slider[data-v-3d1a4f76]{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list[data-v-3d1a4f76]{position:relative;display:block;overflow:hidden;margin:0;padding:0;transform:translateZ(0)}.slick-list[data-v-3d1a4f76]:focus{outline:none}.slick-list.dragging[data-v-3d1a4f76]{cursor:pointer;cursor:hand}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";@font-face{font-family:\"slick\";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format(\"woff\")}.slick-next,.slick-prev{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;transform:translateY(-50%);cursor:pointer;border:none}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:none;background:transparent}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:\"slick\";font-size:20px;line-height:1;opacity:.75;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:\"←\"}[dir=rtl] .slick-prev:before{content:\"→\"}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}.slick-next:before{content:\"→\"}[dir=rtl] .slick-next:before{content:\"←\"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;margin:0 5px;padding:0}.slick-dots li,.slick-dots li button{width:20px;height:20px;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;padding:5px;color:transparent;border:0;outline:none;background:transparent}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:\"slick\";font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:\"•\";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{opacity:.75;color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCards_vue_vue_type_style_index_0_id_bd150760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCards_vue_vue_type_style_index_0_id_bd150760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCards_vue_vue_type_style_index_0_id_bd150760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCards_vue_vue_type_style_index_0_id_bd150760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailCards_vue_vue_type_style_index_0_id_bd150760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-slide-group__wrapper[data-v-bd150760]{overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.v-slide-group__wrapper[data-v-bd150760]::-webkit-scrollbar{display:none;width:0;background:transparent}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(323);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6e75e620", content, true, context)
};

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("08659f87", content, true, context)
};

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c68d4900", content, true, context)
};

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("dde36ca4", content, true, context)
};

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailCards.vue?vue&type=template&id=bd150760&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueSlickCarousel',_vm._b({attrs:{"arrows":true,"dots":true}},'VueSlickCarousel',_vm.settings,false),_vm._l((_vm.details),function(detail,index){return _c('div',{key:index},[_c('DetailCard',{staticClass:"px-5",attrs:{"title":detail.title,"icon":detail.icon,"description":detail.description,"index":index}})],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DetailCards.vue?vue&type=template&id=bd150760&scoped=true&

// EXTERNAL MODULE: ./components/DetailCard.vue + 4 modules
var DetailCard = __webpack_require__(213);

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(177);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css
var vue_slick_carousel = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css
var vue_slick_carousel_theme = __webpack_require__(233);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailCards.vue?vue&type=script&lang=js&
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


 // optional style for arrows & dots


/* harmony default export */ var DetailCardsvue_type_script_lang_js_ = ({
  data() {
    return {
      details: [{
        title: "Building",
        icon: "MBSA.jpg",
        description: "Majlis Bandaraya Shah Alam"
      }, {
        title: "Owner",
        icon: "OWNER.png",
        description: "MBSA"
      }, {
        title: "No. of Floors",
        icon: "NOOFFLOOR.png",
        description: "28"
      }, {
        title: "Net Floor Area",
        icon: "NETFLOORAREA.png",
        description: "64161.85 m²"
      }, {
        title: "No. of Occupants",
        icon: "NOOFOCCUPANTS.png",
        description: "400"
      }, {
        title: "Carbon Emission Intensity",
        icon: "CEI.png",
        description: "97,601.38"
      }],
      settings: {
        dots: true,
        // "focusOnSelect": true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        touchThreshold: 5
      }
    };
  },

  components: {
    DetailCard: DetailCard["default"],
    VueSlickCarousel: external_vue_slick_carousel_default.a
  }
});
// CONCATENATED MODULE: ./components/DetailCards.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DetailCardsvue_type_script_lang_js_ = (DetailCardsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/DetailCards.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(288)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DetailCardsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bd150760",
  "18919a8e"
  
)

/* harmony default export */ var DetailCards = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DetailCard: __webpack_require__(213).default})


/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal_vue_vue_type_style_index_0_id_324444f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal_vue_vue_type_style_index_0_id_324444f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal_vue_vue_type_style_index_0_id_324444f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal_vue_vue_type_style_index_0_id_324444f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartHorizontal_vue_vue_type_style_index_0_id_324444f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__title[data-v-324444f2]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}.level[data-v-324444f2]{height:37vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartVertival_vue_vue_type_style_index_0_id_32e0bce6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(285);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartVertival_vue_vue_type_style_index_0_id_32e0bce6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartVertival_vue_vue_type_style_index_0_id_32e0bce6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartVertival_vue_vue_type_style_index_0_id_32e0bce6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChartVertival_vue_vue_type_style_index_0_id_32e0bce6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__title[data-v-32e0bce6]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}.level[data-v-32e0bce6]{height:40vh}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(290);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".GMap__Wrapper{height:calc(100vh - 180px)!important}.v-btn{white-space:normal;padding:10px}.btn-content{font-size:.6rem!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailBuilding_vue_vue_type_style_index_0_id_348b80c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailBuilding_vue_vue_type_style_index_0_id_348b80c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailBuilding_vue_vue_type_style_index_0_id_348b80c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailBuilding_vue_vue_type_style_index_0_id_348b80c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailBuilding_vue_vue_type_style_index_0_id_348b80c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".compact[data-v-348b80c6]{padding:0;color:#f0f8ff!important}[data-v-348b80c6]::-webkit-scrollbar{width:10px}[data-v-348b80c6]::-webkit-scrollbar-track{box-shadow:inset 0 0 10px 10px #025a73;border:3px solid transparent}[data-v-348b80c6]::-webkit-scrollbar-thumb{box-shadow:inset 0 0 10px 10px #fff;border:3px solid transparent}.border[data-v-348b80c6]{border:10px solid #000;-o-border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes stroke{0%25,to{filter:invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(94%25) contrast(117%25)}50%25{filter:invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(50%25) contrast(117%25)}}path{animation:stroke 1s infinite}%3C/style%3E%3Cpath d='M0 10V0h30l-3 1H1v9l-1 5M90 0h10v30l-1-5V1H85l-3-1M0 85v15h15l-5-1H1V85l-1-5M60 100h40V70l-1 8v21H68l-8 1M0 20v40l1-6V38l-1-8M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes stroke{0%25,to{filter:invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(94%25) contrast(117%25)}50%25{filter:invert(21%25) sepia(100%25) saturate(7414%25) hue-rotate(359deg) brightness(50%25) contrast(117%25)}}path{animation:stroke 1s infinite}%3C/style%3E%3Cpath d='M0 10V0h30l-3 1H1v9l-1 5M90 0h10v30l-1-5V1H85l-3-1M0 85v15h15l-5-1H1V85l-1-5M60 100h40V70l-1 8v21H68l-8 1M0 20v40l1-6V38l-1-8M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image-outset:1}.border[data-v-348b80c6],.border2[data-v-348b80c6]{background-color:transparent;display:flex;justify-content:space-evenly;align-items:center}.border2[data-v-348b80c6]{border:10px solid #000;-o-border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes stroke{0%25,to{filter:invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(90%25) contrast(119%25)}50%25{filter:invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(70%25) contrast(119%25)}}path{animation:stroke 1s infinite}%3C/style%3E%3Cpath d='M0 10V0h30l-3 1H1v9l-1 5M90 0h10v30l-1-5V1H85l-3-1M0 85v15h15l-5-1H1V85l-1-5M60 100h40V70l-1 8v21H68l-8 1M0 20v40l1-6V38l-1-8M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E@keyframes stroke{0%25,to{filter:invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(90%25) contrast(119%25)}50%25{filter:invert(48%25) sepia(79%25) saturate(2476%25) hue-rotate(86deg) brightness(70%25) contrast(119%25)}}path{animation:stroke 1s infinite}%3C/style%3E%3Cpath d='M0 10V0h30l-3 1H1v9l-1 5M90 0h10v30l-1-5V1H85l-3-1M0 85v15h15l-5-1H1V85l-1-5M60 100h40V70l-1 8v21H68l-8 1M0 20v40l1-6V38l-1-8M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image-outset:.2}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(292);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{--clr-neon:#14f7ff;--clr-bg:#001414;--font-size:3rem}.v-btn__content{white-space:normal;flex:unset!important}a{text-decoration:none}.neon{font-size:3rem;font-size:var(--font-size);display:inline-block;position:relative;cursor:pointer;border:.125em solid #14f7ff;border:.125em solid var(--clr-neon);padding:.25em 1em;border-radius:.25em;text-shadow:0 0 .2em hsla(0,0%,100%,.46667),0 0 .3em #14f7ff;text-shadow:0 0 .2em hsla(0,0%,100%,.46667),0 0 .3em var(--clr-neon);box-shadow:inset 0 0 .5em #14f7ff,0 0 .5em #14f7ff;box-shadow:inset 0 0 .5em var(--clr-neon),0 0 .5em var(--clr-neon)}.neon:before{top:140%;width:100%;height:100%;transform:perspective(.2em) rotateX(10deg) scale(1.3,.4);filter:blur(.5em);opacity:.6;pointer-events:none}.neon:after,.neon:before{content:\"\";position:absolute;left:0;background:#14f7ff;background:var(--clr-neon);transition:opacity .1s linear}.neon:after{top:0;right:0;bottom:0;box-shadow:0 0 2em #14f7ff;box-shadow:0 0 2em var(--clr-neon);z-index:-1;opacity:0}.neon:hover:after{opacity:1}.neon:focus,.neon:hover{color:#fff}.neon:hover:before{opacity:.8}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_1_id_7ced84b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(293);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_1_id_7ced84b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_1_id_7ced84b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_1_id_7ced84b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_style_index_1_id_7ced84b7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".neon2[data-v-7ced84b7],.v-btn__content[data-v-7ced84b7]{color:var(--clr-neon)}.neon2[data-v-7ced84b7]{text-decoration:none}.neon2[data-v-7ced84b7]:before{position:absolute;transform:perspective(.2em) rotateX(10deg) scale(1.3,.4);filter:blur(.5em);opacity:.6;pointer-events:none}.neon2[data-v-7ced84b7]:after,.neon2[data-v-7ced84b7]:before{content:\"\";background:var(--clr-neon);transition:opacity .1s linear}.neon2[data-v-7ced84b7]:after{box-shadow:0 0 2em var(--clr-neon);z-index:-1;opacity:0}.neon2[data-v-7ced84b7]:hover:after{opacity:1}.neon2[data-v-7ced84b7]:focus,.neon2[data-v-7ced84b7]:hover{color:#fff;box-shadow:0 0 2em var(--clr-neon)}.neon2[data-v-7ced84b7]:hover:before{opacity:.8}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarChartHorizontal.vue?vue&type=template&id=324444f2&scoped=true&v-show=%24vuetify.breakpoint.lgAndUp&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("dataWeek1",_vm.dataWeek1))+" style=\"width: 100%; height: 100%; min-height: 200px\" data-v-324444f2></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BarChartHorizontal.vue?vue&type=template&id=324444f2&scoped=true&v-show=%24vuetify.breakpoint.lgAndUp&

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
      .$get("https://debug2.qwazx.one/api/total/weekday", {}).then(response => {
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
  "324444f2",
  "cbf26a90"
  
)

/* harmony default export */ var BarChartHorizontal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Maps.vue?vue&type=template&id=abcb510a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('section',{staticStyle:{"overfloe":"hidden"}},[_c('GMap',{ref:"gMap",attrs:{"language":"en","cluster":{ options: { styles: _vm.clusterStyle } },"center":{
      lat: parseFloat(_vm.categories[0].locations[_vm.a].lat),
      lng: parseFloat(_vm.categories[0].locations[_vm.a].lng),
    },"options":{ fullscreenControl: false, styles: _vm.mapStyle },"zoom":16}},[_c('div',{key:_vm.num},_vm._l((_vm.categories[_vm.current].locations),function(location,index){return _c('GMapMarker',{key:index,attrs:{"position":{ lat: location.lat, lng: location.lng },"options":{
          icon:
            location === _vm.currentLocation ? _vm.pins.selected : _vm.pins.notSelected,
        }},on:{"click":function($event){_vm.currentLocation = location}}},[_c('GMapInfoWindow',{attrs:{"options":{ maxWidth: 200 }}},[_c('v-card-subtitle',{staticStyle:{"color":"black","padding":"2px","font-weight":"bold"}},[_vm._v("\n            "+_vm._s(location.name.toUpperCase())+"\n          ")]),_vm._v(" "),_c('v-card-subtitle',{staticStyle:{"color":"black","padding":"2px"}},[_c('span',{staticStyle:{"font-weight":"bold"}},[_vm._v("Status")]),_vm._v(": Online\n          ")]),_vm._v(" "),_c('v-card-subtitle',{staticStyle:{"color":"black","padding":"2px"}},[_c('span',{staticStyle:{"font-weight":"bold"}},[_vm._v("Location")]),_vm._v(":\n            "+_vm._s(location.lat)+", "+_vm._s(location.lng)+"\n          ")])],1)],1)}),1)]),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"\\n      width: 100%;\\n      overflow: hidden;\\n      padding-left: 14px;\\n      padding-right: 14px;\\n      padding-top: 16px;\\n    \">","</div>",[(_vm.show)?_c('VueSlickCarousel',_vm._b({attrs:{"arrows":true,"dots":true}},'VueSlickCarousel',_vm.settings,false),_vm._l((_vm.categories),function(location,index){return _c('v-btn',{key:index,staticClass:"btn-content",attrs:{"outlined":"","color":"white"},on:{"click":function($event){return _vm.setCurrent(index)}}},[_vm._v("\n        "+_vm._s(location.category)+"\n      ")])}),1):_vm._e()],1)],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Maps.vue?vue&type=template&id=abcb510a&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(17);

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(177);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css
var vue_slick_carousel = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css
var vue_slick_carousel_theme = __webpack_require__(233);

// EXTERNAL MODULE: ./components/DetailCards.vue + 4 modules
var DetailCards = __webpack_require__(297);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Maps.vue?vue&type=script&lang=js&
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


 // optional style for arrows & dots



/* harmony default export */ var Mapsvue_type_script_lang_js_ = ({
  data() {
    return {
      show: false,
      num: true,
      settings: {
        dots: true,
        // "focusOnSelect": true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        touchThreshold: 5
      },
      a: 0,
      current: 0,
      center: {
        lat: 4.074513033,
        lng: 101.5178721
      },
      mapStyle: [{
        elementType: "geometry",
        stylers: [{
          color: "#1d2c4d"
        }]
      }, {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#8ec3b9"
        }]
      }, {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#1a3646"
        }]
      }, {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#4b6878"
        }]
      }, {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#64779e"
        }]
      }, {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#4b6878"
        }]
      }, {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#334e87"
        }]
      }, {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{
          color: "#023e58"
        }]
      }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
          color: "#283d6a"
        }]
      }, {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#6f9ba5"
        }]
      }, {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#1d2c4d"
        }]
      }, {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{
          color: "#023e58"
        }]
      }, {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#3C7680"
        }]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#304a7d"
        }]
      }, {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#98a5be"
        }]
      }, {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#1d2c4d"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          color: "#2c6675"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#255763"
        }]
      }, {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#b0d5ce"
        }]
      }, {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#023e58"
        }]
      }, {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#98a5be"
        }]
      }, {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#1d2c4d"
        }]
      }, {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [{
          color: "#283d6a"
        }]
      }, {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{
          color: "#3a4762"
        }]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#0e1626"
        }]
      }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#4e6d70"
        }]
      }],
      currentLocation: {},
      categories: [{
        category: "",
        locations: [{
          name: "",
          lat: 0,
          lng: 0
        }]
      }],
      pins: {
        selected: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAwCAMAAACsRTNeAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAZlBMVEUAAADGISHGISHCIR3GISHGJSXGIR3GIR3GIR2+ISHCISHGISHGIR3GISHGIR3CIR3GJSHGIR3GIR3WMSnqQzXOKSXmPzHSLSXiPDHKJSHGJSHeOS3aNS2+HRmyFRHKKSHiOS3iPzF0SiX0AAAAEnRSTlMAhDzGVB2o6rIKnHRoLeLWaN5BSZ8zAAABdUlEQVR42u39V3KEMAxAAZi2fXcTyd203P+SoQTjyk4O8P5g3kio8U3+TVms1NeM0BQVaIGIQsG5eKaUEyhDNziDqgmNJ4CkLnyAh688oKUhRt08RccKpVLf3ESGppBQW2dKlIZDuVWkaQ68bJl41uHqvjgFc9+2iF6ganEqpzGi6yfEHljCrNSwK/3GXqeYSyuUfWbW6fZkp9mx+dt+x3YDO88RjmMDtZB1+v84uDjiMBeeZ8dOwjiOLX6py+nPEIehbO7P9Txuz7zbFBtGwrL+ThMpLoozQHwn5s5H70kX63JUTqAAUf1dWpNZ1XkP7bLeh5+0w052n8mFpTOBc9PNGROKAe+gy+/4NKSqiUcJY6iwCwm46eA6WPxTCL/bdsbD+24DTUIh5WuX3Ev3qPfBsRvJcBn+FHzlFHKFNVsL96xDinUn3THFLLXJrjxyHoofffDK/EvL1b1xwvUyjyiA6/cHZ/qXf0o19RHg+skpi6/w1S8tW0/UXw6dAwAAAABJRU5ErkJggg==",
        notSelected: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAwCAMAAACsRTNeAAAACXBIWXMAAAAcAAAAHAAPAbmPAAAAZlBMVEUAAADGISHGISHCIR3GISHGJSXGIR3GIR3GIR2+ISHCISHGISHGIR3GISHGIR3CIR3GJSHGIR3GIR3WMSnqQzXOKSXmPzHSLSXiPDHKJSHGJSHeOS3aNS2+HRmyFRHKKSHiOS3iPzF0SiX0AAAAEnRSTlMAhDzGVB2o6rIKnHRoLeLWaN5BSZ8zAAABdUlEQVR42u39V3KEMAxAAZi2fXcTyd203P+SoQTjyk4O8P5g3kio8U3+TVms1NeM0BQVaIGIQsG5eKaUEyhDNziDqgmNJ4CkLnyAh688oKUhRt08RccKpVLf3ESGppBQW2dKlIZDuVWkaQ68bJl41uHqvjgFc9+2iF6ganEqpzGi6yfEHljCrNSwK/3GXqeYSyuUfWbW6fZkp9mx+dt+x3YDO88RjmMDtZB1+v84uDjiMBeeZ8dOwjiOLX6py+nPEIehbO7P9Txuz7zbFBtGwrL+ThMpLoozQHwn5s5H70kX63JUTqAAUf1dWpNZ1XkP7bLeh5+0w052n8mFpTOBc9PNGROKAe+gy+/4NKSqiUcJY6iwCwm46eA6WPxTCL/bdsbD+24DTUIh5WuX3Ev3qPfBsRvJcBn+FHzlFHKFNVsL96xDinUn3THFLLXJrjxyHoofffDK/EvL1b1xwvUyjyiA6/cHZ/qXf0o19RHg+skpi6/w1S8tW0/UXw6dAwAAAABJRU5ErkJggg=="
      },
      // mapStyle: [...],
      clusterStyle: [{
        url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
        width: 56,
        height: 56,
        textColor: "#fff"
      }]
    };
  },

  methods: { ...Object(external_vuex_["mapMutations"])({
      setLocations: "setLocations"
    }),
    setCurrent: function (index) {
      // this.num = this.num + 1;
      this.num = !this.num;
      this.current = index; // this.$refs.gMap.initMap();

      setTimeout(() => {
        // if (index == 0) {
        //   this.locations = this.locations.slice(0, 1).concat();
        //   console.log(this.locations);
        // }
        if (this.categories[this.current].locations[0].lat) {
          this.$refs.gMap.map.setCenter({
            lat: parseFloat(this.categories[this.current].locations[0].lat),
            lng: parseFloat(this.categories[this.current].locations[0].lng)
          });
        } // });
        //
        // this.$refs.gMap.initMap();
        // this.$refs.gMap.initInfoWindow();


        this.$refs.gMap.initChildren(); // this.$refs.gMap.try();
      }, 1); //
    },
    getCategory: function () {
      this.$axios.$get("https://debug2.qwazx.one/api/data/category/map", {// params: {
        //   id: id,
        // },
      }).then(response => {
        // console.log("sini", response);
        this.categories = response;
        this.setLocations(response[response.length - 1].locations);
        this.show = true;
      }).catch(error => {
        console.log(error);
      });
    }
  },

  created() {
    this.getCategory();
  },

  components: {
    VueSlickCarousel: external_vue_slick_carousel_default.a,
    DetailCards: DetailCards["default"]
  }
});
// CONCATENATED MODULE: ./components/Maps.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mapsvue_type_script_lang_js_ = (Mapsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(13);

// CONCATENATED MODULE: ./components/Maps.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(322)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mapsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ebbf8e00"
  
)

/* harmony default export */ var Maps = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCardSubtitle: VCard["b" /* VCardSubtitle */]})


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailBuilding.vue?vue&type=template&id=348b80c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showDataAll && _vm.showDataMBSA)?_c('section',{staticStyle:{"height":"calc(100vh - 121px)","overflow":"auto"}},_vm._l((_vm.locations2),function(location,index){return _c('v-card',{key:index,staticClass:"border2 my-5 mx-5",staticStyle:{"display":"flex","flex-direction":"column"}},[_c('v-card-subtitle',{staticClass:"compact",staticStyle:{"padding":"5px","text-shadow":"1px 1px #ffffff"}},[_vm._v("\n      "+_vm._s(location.building_id_data)+"\n    ")]),_vm._v(" "),_c('v-row',{staticStyle:{"width":"100%","padding-bottom":"15px"}},[_c('v-col',{staticStyle:{"padding-bottom":"0px","display":"flex","flex-direction":"row"},attrs:{"cols":"7"}},[_c('img',{attrs:{"src":__webpack_require__(209),"alt":"","height":"22"}}),_vm._v(" "),(_vm.showData)?_c('v-card-subtitle',{staticClass:"compact",staticStyle:{"padding-left":"10px"}},[_vm._v("\n          "+_vm._s(location.ecacc)+" kWH\n\n          ")]):_vm._e()],1),_vm._v(" "),_c('v-col',{staticStyle:{"padding-bottom":"0px","display":"flex","flex-direction":"row"},attrs:{"cols":"5"}},[_c('img',{attrs:{"src":__webpack_require__(208),"alt":"","height":"22"}}),_vm._v(" "),(_vm.showData)?_c('v-card-subtitle',{staticClass:"compact",staticStyle:{"padding-left":"10px"}},[_vm._v("\n          "+_vm._s(location.power)+" kW\n          ")]):_vm._e()],1)],1)],1)}),1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DetailBuilding.vue?vue&type=template&id=348b80c6&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(17);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(40);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DetailBuilding.vue?vue&type=script&lang=js&
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


/* harmony default export */ var DetailBuildingvue_type_script_lang_js_ = ({
  data() {
    return {
      showDataAll: true,
      showDataMBSA: false,
      locations2: [{
        data: "waiting for data",
        power: "",
        energy: "",
        ts: "",
        id: "",
        lat: "",
        lng: "",
        name: "waiting for data"
      }]
    };
  },

  methods: {
    getDataMBSA: function () {
      // console.log("run here");
      this.$axios // .$get("http://178.128.29.241/api/total/latestMBSA", {})
      // .$get("http://68.183.189.84:5000/api/total/latestMBSA", {})
      .$get("https://debug2.qwazx.one/api/total/latestMBSA", {}) // .$get(`${this.url}/api/total/latestMBSA`, {})
      .then(response => {
        // console.log("haaa", response);
        for (let i = 0; i < response.length; i++) {
          response[i].date = external_moment_default()(response[i].date).format(" D/MM/YYYY, hh:mm:ss");
        }

        this.locations2 = response; // console.log("haaaa sini", this.locations2);
        // for (let i = 0; i < this.locations2.length; i++) {
        //   this.locations2[i].data = "Waiting for data";
        //   this.locations2[i].ts = "Waiting for data";
        // }
        // if (response.length > 0) {
        //   for (let i = 0; i < response.length; i++) {
        //     if (
        //       this.locations2[
        //         this.locations2.findIndex(
        //           (el) => el.id == response[i].building_id_data
        //         )
        //       ]
        //     ) {
        //       this.locations2[
        //         this.locations2.findIndex(
        //           (el) => el.id == response[i].building_id_data
        //         )
        //       ].data = response[i].total + " KWH";
        //       this.locations2[
        //         this.locations2.findIndex(
        //           (el) => el.id == response[i].building_id_data
        //         )
        //       ].ts = "Updated on " + response[i].date;
        //     }
        //   }
        // }
        // else {
        //   this.locations[
        //     this.locations.findIndex((el) => el.id == "MBSA")
        //   ].data = "0 KWH";
        // }

        console.log("hey");
        this.showDataMBSA = true; // }
      }).catch(error => {
        console.log(error);
      });
    } // getDataMBSA2: function () {
    //   console.log("run here");
    //   this.$axios
    //     // .$get("http://178.128.29.241/api/total/latestMBSA", {})
    //     // .$get("http://68.183.189.84:5000/api/total/latestMBSA", {})
    //     // .$get("https://debug2.qwazx.one/api/total/latestMBSA", {})
    //     .$get(`${this.url}/api/total/latestMBSA`, {})
    //     .then((response) => {
    //       console.log(response);
    //       console.log(this.locations);
    //       // window.location.reload();
    //       // for (let i = 0; i < response.length; i++) {
    //       // console.log(this.locations[response[i].building_id - 1]);
    //       // this.locations[response[i].building_id - 1].data = response[i].ec;
    //       // console.log(response);
    //       if (response.length > 0) {
    //         // findIndex((el)=>el.Units=="kW")
    //         console.log(
    //           this.locations[this.locations.findIndex((el) => el.id == "MBSA")]
    //         );
    //         this.locations[
    //           this.locations.findIndex((el) => el.id == "MBSA")
    //         ].data = response[0].total + " KWH, Updated on" + response[0].date;
    //       } else {
    //         this.locations[
    //           this.locations.findIndex((el) => el.id == "MBSA")
    //         ].data = "0 KWH";
    //       }
    //       this.showDataMBSA = true;
    //       // }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

  },

  async mounted() {
    // setTimeout(() => {
    this.getDataMBSA();
    setInterval(() => {
      this.getDataMBSA();
    }, 1000 * 60 * 5); // console.log(this.locations);
    // this.location = this.locations;
    // }, 3000);
  },

  computed: Object(external_vuex_["mapState"])({
    url: state => state.url,
    locations: state => state.locations,
    showData: state => state.showData
  }),
  watch: {
    showData: function () {
      if (this.showData == true) {
        this.getDataMBSA();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/DetailBuilding.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DetailBuildingvue_type_script_lang_js_ = (DetailBuildingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(260);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(231);

// CONCATENATED MODULE: ./components/DetailBuilding.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(324)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DetailBuildingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "348b80c6",
  "260d384e"
  
)

/* harmony default export */ var DetailBuilding = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCard: VCard["a" /* default */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button.vue?vue&type=template&id=7ced84b7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"flex","justify-content":"space-around","align-items":"center"}},[_c('v-btn',{staticClass:"neon",staticStyle:{"width":"40%","height":"7vh","font-size":"0.7em","display":"flex","justify-content":"center","text-align":"center"},attrs:{"to":"/details"}},[_vm._v("\n    View More Details\n  ")]),_vm._ssrNode(" "),_c('v-btn',{staticClass:"neon",staticStyle:{"width":"40%","height":"7vh","font-size":"0.7em","display":"flex","justify-content":"center","text-align":"center"},attrs:{"to":"/building"}},[_vm._v("\n    View Building Details\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Button.vue?vue&type=template&id=7ced84b7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  methods: {}
});
// CONCATENATED MODULE: ./components/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(59);

// CONCATENATED MODULE: ./components/Button.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(326)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(328)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7ced84b7",
  "4827f84a"
  
)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VBtn: VBtn["a" /* default */]})


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(387);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Frame2.vue?vue&type=template&id=001f52ff&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<svg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"3\" height=\"1\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"0\" y=\"0\" width=\"1\" height=\"3\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"97\" y=\"0\" width=\"3\" height=\"1\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"99\" y=\"0\" width=\"1\" height=\"3\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"0\" y=\"99\" width=\"3\" height=\"1\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"0\" y=\"97\" width=\"1\" height=\"3\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"97\" y=\"99\" width=\"3\" height=\"1\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"99\" y=\"97\" width=\"1\" height=\"3\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"5\" y=\"0.25\" width=\"90\" height=\"0.5\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"5\" y=\"99.25\" width=\"90\" height=\"0.5\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"0.25\" y=\"5\" width=\"0.5\" height=\"90\" style=\"fill: rgb(0, 0, 255)\"></rect> <rect x=\"99.25\" y=\"5\" width=\"0.5\" height=\"90\" style=\"fill: rgb(0, 0, 255)\"></rect></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Frame2.vue?vue&type=template&id=001f52ff&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Frame2.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Frame2vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Frame2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Frame2vue_type_script_lang_js_ = (Frame2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Frame2.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Frame2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9836e0e4"
  
)

/* harmony default export */ var Frame2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarChartVertival.vue?vue&type=template&id=32e0bce6&scoped=true&v-show=%24vuetify.breakpoint.lgAndUp&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("total",_vm.total))+" style=\"width: 100%; height: 100%; min-height: 200px\" data-v-32e0bce6></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BarChartVertival.vue?vue&type=template&id=32e0bce6&scoped=true&v-show=%24vuetify.breakpoint.lgAndUp&

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
      .$get("https://debug2.qwazx.one/api/total/month", {}).then(response => {
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
  "32e0bce6",
  "00b161dd"
  
)

/* harmony default export */ var BarChartVertival = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(347);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body,html{margin:0;padding:0;overflow-y:hidden}.all{width:100vw;display:flex}.left{width:27vw;height:100%;padding-left:5px;z-index:2;overflow:hidden}.middle{--b:15px;--c:5px;padding-left:var(--b);padding-right:var(--b);width:46vw;z-index:1}.right{width:27vw;height:100%;z-index:2}.top-right{height:45vh;overflow:hidden}.middle-right{height:35vh;overflow:hidden}.top-right-header{font-weight:700;padding:5px 0 0 10px}.top-right-info{font-weight:700;padding:0 0 0 10px;font-size:2rem;font-family:\"JetBrains Mono\"!important}.header-map-container{display:flex;flex-direction:row;justify-content:space-between;padding-top:10px;padding-bottom:10px}.header-map{padding:0}.border{margin:10px;padding:0 10px 10px;color:azure;border:5px solid #000;-o-border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath{animation:stroke .5s linear}%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23083361'/%3E%3Cstop offset='25%25' stop-color='%23094687'/%3E%3Cstop offset='50%25' stop-color='%231B5DA4'/%3E%3Cstop offset='100%25' stop-color='%230F355D'/%3E%3C/linearGradient%3E%3Cpath d='M0 3V0h3M97 0h3v3M0 97v3h3M97 100h3v-3' stroke='%23eee' stroke-width='3' stroke-dasharray='388'/%3E%3Cpath d='M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath{animation:stroke .5s linear}%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23083361'/%3E%3Cstop offset='25%25' stop-color='%23094687'/%3E%3Cstop offset='50%25' stop-color='%231B5DA4'/%3E%3Cstop offset='100%25' stop-color='%230F355D'/%3E%3C/linearGradient%3E%3Cpath d='M0 3V0h3M97 0h3v3M0 97v3h3M97 100h3v-3' stroke='%23eee' stroke-width='3' stroke-dasharray='388'/%3E%3Cpath d='M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2}.inside-container2{position:absolute;width:30vw;top:0;left:0;padding-left:20px;padding-right:20px}.v-slide-group__wrapper{overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.v-slide-group__wrapper::-webkit-scrollbar{display:none;width:0;background:transparent}button.slick-next:before,button.slick-prev:before{color:#fff!important}.slick-prev{margin-left:9px;z-index:100}.slick-next{margin-right:9px;z-index:100}.GMap__Wrapper{height:calc(100vh - 180px)}.layer{position:absolute;width:100%;height:100%;background:#000;opacity:.6;z-index:999}.logout{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;display:flex;justify-content:center;align-items:center;-webkit-animation:mymove 1.3s;animation:mymove 1.3s;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes mymove{0%{bottom:70%}to{bottom:40%}}@keyframes mymove{0%{bottom:70%}to{bottom:40%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3c74e087&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(_vm.$vuetify.breakpoint.lgAndUp)?_vm._ssrNode("<section class=\"all\">","</section>",[_vm._ssrNode("<div class=\"left\">","</div>",[_vm._ssrNode("<div class=\"top-right border\">","</div>",[_c('v-card-subtitle',{staticClass:"top-right-header"},[_vm._v("\n          TOTAL KWH\n        ")]),_vm._ssrNode(" "),_c('v-card-title',{staticClass:"top-right-info mb-3"},[_vm._v(" "+_vm._s(_vm.total)+" ")]),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"height: 100%\">","</div>",[_c('BarChartHorizontal',{attrs:{"id":"bar-chart"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"middle-right border\">","</div>",[_c('v-card-subtitle',{staticClass:"top-right-header"},[_vm._v("\n          TOTAL KWH BY MONTH\n        ")]),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"height: 100%\">","</div>",[_c('BarChartVertical',{attrs:{"id":"bar-chart-vertical"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('Button')],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"middle border\">","</div>",[_vm._ssrNode("<div class=\"header-map-container\">","</div>",[_c('v-card-subtitle',{staticClass:"header-map top-right-header",staticStyle:{"color":"white"}},[_vm._v("\n          MAP\n        ")]),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"display: flex\">","</div>",[_c('v-card-subtitle',{staticClass:"header-map top-right-header",staticStyle:{"color":"white","padding-right":"20px"}},[_vm._v("\n            SEA-IC\n          ")]),_vm._ssrNode(" "),_c('v-card-subtitle',{staticClass:"header-map top-right-header",staticStyle:{"color":"white"}},[_vm._v(_vm._s(_vm.time2))])],2)],2),_vm._ssrNode(" "),_c('Maps')],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"right\">","</div>",[_vm._ssrNode("<div class=\"border\">","</div>",[_c('v-card-subtitle',{staticClass:"header-map top-right-header",staticStyle:{"color":"white","padding":"10px 10px 5px 10px"}},[_vm._v("\n          LATEST DATA\n        ")]),_vm._ssrNode(" "),_c('DetailBuilding')],2)])],2):_vm._e(),_vm._ssrNode(" "),(_vm.height == true)?_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<section"+(_vm._ssrStyle(null,null, { display: (_vm.$vuetify.breakpoint.mdAndDown) ? '' : 'none' }))+">","</section>",[_c('v-row',{attrs:{"justify":"space-around"}},[_c('v-col',{attrs:{"cols":"auto"}},[_c('v-scroll-y-transition',[(_vm.height)?_c('div',{staticClass:"layer",attrs:{"id":"layer"}}):_vm._e()]),_vm._v(" "),_c('v-scroll-y-transition',[(_vm.height)?_c('v-card',{staticClass:"logout elevation-12"},[_c('v-card-title',[_vm._v("\n                PLEASE ENLARGE BROWSER TO VIEW DASHBOARD\n              ")])],1):_vm._e()],1)],1)],1)],1)]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3c74e087&

// EXTERNAL MODULE: ./components/Frame2.vue + 4 modules
var Frame2 = __webpack_require__(360);

// EXTERNAL MODULE: ./components/BarChartHorizontal.vue + 4 modules
var BarChartHorizontal = __webpack_require__(334);

// EXTERNAL MODULE: ./components/BarChartVertival.vue + 4 modules
var BarChartVertival = __webpack_require__(361);

// EXTERNAL MODULE: ./components/Maps.vue + 4 modules
var Maps = __webpack_require__(335);

// EXTERNAL MODULE: ./components/DetailBuilding.vue + 4 modules
var DetailBuilding = __webpack_require__(336);

// EXTERNAL MODULE: ./components/Button.vue + 4 modules
var Button = __webpack_require__(337);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(40);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
//
//








/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  middleware: ["auth", "isRegistered"],
  layout: "main",
  components: {
    Frame: Frame2["default"],
    BarChartHorizontal: BarChartHorizontal["default"],
    BarChartVertical: BarChartVertival["default"],
    Maps: Maps["default"],
    DetailBuilding: DetailBuilding["default"],
    Button: Button["default"]
  },

  data() {
    return {
      time2: "",
      dialog: "true",
      total: ""
    };
  },

  methods: {
    getTime: function () {
      let gettime = new Date();
      this.time2 = external_moment_default()(gettime).format("H:mm:ss");
    },
    getData: function () {
      this.$axios.$get("https://debug2.qwazx.one/api/total", {}) // .$get(`${this.url}/api/total`, {})
      // .$get("http://104.248.158.194/api/total", {})
      .then(response => {
        console.log(response);
        this.total = response.total; // window.location.reload();
      }).catch(error => {
        console.log(error);
      });
    }
  },

  mounted() {
    setInterval(() => {
      this.getTime();
    }, 1000);
    this.getData(); // console.log(this.$auth);
  },

  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;

        case "sm":
          return true;

        case "md":
          return true;

        case "lg":
          return false;

        case "xl":
          return false;
      }
    },

    ...Object(external_vuex_["mapState"])({
      url: state => state.url
    })
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(260);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(21);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(386)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2c5be6fd"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {BarChartHorizontal: __webpack_require__(334).default,Button: __webpack_require__(337).default,Maps: __webpack_require__(335).default,DetailBuilding: __webpack_require__(336).default})


/* vuetify-loader */







installComponents_default()(component, {VCard: VCard["a" /* default */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VRow: VRow["a" /* default */],VScrollYTransition: transitions["d" /* VScrollYTransition */]})


/***/ })

};;
//# sourceMappingURL=index.js.map