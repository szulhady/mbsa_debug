exports.ids = [32,7,8,22,27];
exports.modules = {

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0fd849b2", content, true, context)
};

/***/ }),

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

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineChart_vue_vue_type_style_index_0_id_5b210e1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineChart_vue_vue_type_style_index_0_id_5b210e1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineChart_vue_vue_type_style_index_0_id_5b210e1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineChart_vue_vue_type_style_index_0_id_5b210e1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleLineChart_vue_vue_type_style_index_0_id_5b210e1c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__subtitle[data-v-5b210e1c]{font-size:.9em;padding:0 0 0 40px;color:#f0f8ff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2d9e548a", content, true, context)
};

/***/ }),

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

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SingleLineChart.vue?vue&type=template&id=5b210e1c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_c('v-card-subtitle',{staticClass:"sidebar rounded-lg pt-3"},[_vm._v("\n    "+_vm._s(_vm.title.toUpperCase())+"\n  ")]),_vm._ssrNode(" <div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("data",_vm.data))+" style=\"width: 100%; height: 33vh\" data-v-5b210e1c></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SingleLineChart.vue?vue&type=template&id=5b210e1c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SingleLineChart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SingleLineChartvue_type_script_lang_js_ = ({
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
          left: 80
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: { show: true, title: "Save" },
        //   },
        // },
        // legend: {
        //   data: ["Current"],
        //   textStyle: {
        //     fontSize: 12,
        //     color: "#fff",
        //   },
        // },
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
    }, 100);
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
        left: 80
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: { show: true, title: "Save" },
      //   },
      // },
      // legend: {
      //   data: ["Current"],
      //   textStyle: {
      //     fontSize: 12,
      //     color: "#fff",
      //   },
      // },
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
    setTimeout(() => {
      var myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 100); // var myChart = this.$echarts.init(document.getElementById(this.id));
    // myChart.setOption(option, true);
    // console.log(this.data)
  },

  props: ["data", "yAxis", "max", "time", "title", "id"],
  methods: {
    clickedShowDetailModal: function (value) {
      console.log("value"); // console.log(value);
      // this.productSelected = value;
    }
  }
});
// CONCATENATED MODULE: ./components/SingleLineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SingleLineChartvue_type_script_lang_js_ = (SingleLineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(13);

// CONCATENATED MODULE: ./components/SingleLineChart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(273)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SingleLineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5b210e1c",
  "12293e89"
  
)

/* harmony default export */ var SingleLineChart = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VCardSubtitle: VCard["b" /* VCardSubtitle */]})


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


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassList_vue_vue_type_style_index_0_id_4d8b6b74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassList_vue_vue_type_style_index_0_id_4d8b6b74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassList_vue_vue_type_style_index_0_id_4d8b6b74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassList_vue_vue_type_style_index_0_id_4d8b6b74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClassList_vue_vue_type_style_index_0_id_4d8b6b74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".col[data-v-4d8b6b74]{padding-left:2px;padding-right:2px}.v-card__subtitle[data-v-4d8b6b74]{font-size:.9em;padding:0 0 0 40px;color:#f0f8ff}[data-v-4d8b6b74]::-webkit-scrollbar{width:10px}[data-v-4d8b6b74]::-webkit-scrollbar-track{box-shadow:inset 0 0 10px 10px #fff;border:3px solid transparent}[data-v-4d8b6b74]::-webkit-scrollbar-thumb{box-shadow:inset 0 0 10px 10px #025a73;border:3px solid transparent}.left2[data-v-4d8b6b74]{width:40%;display:flex;flex-direction:column}.right2[data-v-4d8b6b74]{width:100%;overflow-x:hidden}.active[data-v-4d8b6b74]{font-size:var(--font-size);position:relative;cursor:pointer;border:.125em solid red!important;padding:.25em 1em;border-radius:.25em;text-shadow:0 0 .2em hsla(0,0%,100%,.46667),0 0 .3em red;box-shadow:inset 0 0 .5em red,0 0 .5em red}.active[data-v-4d8b6b74]:before{top:90%;width:100%;height:100%;transform:perspective(1.2em) rotateX(5deg) scaleY(0);filter:blur(.5em);opacity:.6;pointer-events:none}.active[data-v-4d8b6b74]:after,.active[data-v-4d8b6b74]:before{content:\"\";position:absolute;left:0;background:red;transition:opacity .1s linear}.active[data-v-4d8b6b74]:after{top:0;right:0;bottom:0;box-shadow:0 0 2em red;z-index:-1;opacity:0}.active[data-v-4d8b6b74]:hover:after{opacity:1}.active[data-v-4d8b6b74]:focus,.active[data-v-4d8b6b74]:hover{color:#fff}.active[data-v-4d8b6b74]:hover:before{opacity:.8}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ClassList.vue?vue&type=template&id=4d8b6b74&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_vm._ssrNode("<div style=\"display: flex; max-width: 30vw; height: 30vh\" data-v-4d8b6b74>","</div>",[_vm._ssrNode("<div class=\"right2\" data-v-4d8b6b74>","</div>",[(_vm.categories)?_vm._ssrNode("<div data-v-4d8b6b74>","</div>",[_c('v-row',{staticStyle:{"justify-content":"space-evenly"}},_vm._l((_vm.categories),function(category,index){return _c('v-col',{key:index,staticStyle:{"flex-grow":"0"}},[_c('v-btn',{staticClass:"neon3",class:{ active: index === _vm.activeCategory },staticStyle:{"width":"9vw","height":"7vh","font-size":"0.8em"},on:{"click":function($event){return _vm.selectCategory(index)}}},[_vm._v(_vm._s(category.category))])],1)}),1)],1):_vm._e()])]),_vm._ssrNode(" <div style=\"border-bottom: 4px dashed white; margin: 1vh 2vw\" data-v-4d8b6b74></div> "),_vm._ssrNode("<div style=\"display: flex; max-width: 30vw; height: 40vh\" data-v-4d8b6b74>","</div>",[_vm._ssrNode("<div class=\"right2\" data-v-4d8b6b74>","</div>",[(_vm.categories)?_vm._ssrNode("<div data-v-4d8b6b74>","</div>",[_c('v-card-title',[_vm._v("Select building")]),_vm._ssrNode(" "),_c('v-row',{staticStyle:{"justify-content":"space-evenly"}},_vm._l((_vm.categories[_vm.activeCategory].locations),function(location,index){return _c('v-col',{key:index,staticStyle:{"flex-grow":"0"}},[_c('v-btn',{staticClass:"neon3",class:{ active: index === _vm.activeBuilding },staticStyle:{"width":"12vw","height":"7vh","font-size":"0.8em"},on:{"click":function($event){return _vm.selectBuilding(index)}}},[_vm._v(_vm._s(location.name))])],1)}),1)],2):_vm._e()])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ClassList.vue?vue&type=template&id=4d8b6b74&scoped=true&

// EXTERNAL MODULE: ./components/ClassButton.vue + 4 modules
var ClassButton = __webpack_require__(296);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ClassList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ClassListvue_type_script_lang_js_ = ({
  data() {
    return {
      categories: [{
        category: "",
        locations: [{
          name: ""
        }]
      }],
      activeCategory: 0,
      activeBuilding: 0
    };
  },

  mounted() {
    this.getCategory(); // this.setId(1);
  },

  updated() {},

  components: {
    ClassButton: ClassButton["default"]
  },
  methods: { ...Object(external_vuex_["mapMutations"])({
      setId: "setId"
    }),

    selectCategory(i) {
      this.activeCategory = i;
      this.activeBuilding = 0; // this.getBuildingData(
      //   this.categories[this.activeCategory].locations[0].id
      // );

      this.setId(this.categories[this.activeCategory].locations[0].id); // console.log()
    },

    selectBuilding(i) {
      this.activeBuilding = i; // this.getBuildingData(
      //   this.categories[this.activeCategory].locations[this.activeBuilding].id
      // );

      this.setId(this.categories[this.activeCategory].locations[this.activeBuilding].id);
    },

    getCategory: function () {
      this.$axios.$get("https://debug2.qwazx.one/api/data/category", {// params: {
        //   id: id,
        // },
      }).then(response => {
        console.log(response);
        this.categories = response;
        let data = []; // if (response.length > 1) {
        // for (let i = 0; i < response.length; i++) {
        //   data.push(response[i].class);
        // }
        // }
        // console.log(data);
        // this.setClasss(data);
        // this.setCardLecturerClass(response.length);
        // this.getLecturer(data);
        // this.getBuildingData(response[0].locations[0].id);

        this.setId(response[0].locations[0].id);
      }).catch(error => {
        console.log(error);
      });
    },
    getBuildingData: function (id) {
      this.$axios.$get("https://debug2.qwazx.one/api/data/building", {
        params: {
          id: id
        }
      }).then(response => {
        console.log(response); // this.categories = response;

        let data = []; // if (response.length > 1) {
        // for (let i = 0; i < response.length; i++) {
        //   data.push(response[i].class);
        // }
        // }
        // console.log(data);
        // this.setClasss(data);
        // this.setCardLecturerClass(response.length);
        // this.getLecturer(data);
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/ClassList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ClassListvue_type_script_lang_js_ = (ClassListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(260);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(231);

// CONCATENATED MODULE: ./components/ClassList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(310)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ClassListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4d8b6b74",
  "31687dc6"
  
)

/* harmony default export */ var ClassList = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCardTitle: VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(379);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("32804e1a", content, true, context)
};

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


/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(343);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body,html{margin:0;padding:0;overflow-y:hidden}.border{border:5px solid #000;-o-border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath{animation:stroke .5s linear}%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23083361'/%3E%3Cstop offset='25%25' stop-color='%23094687'/%3E%3Cstop offset='50%25' stop-color='%231B5DA4'/%3E%3Cstop offset='100%25' stop-color='%230F355D'/%3E%3C/linearGradient%3E%3Cpath d='M0 3V0h3M97 0h3v3M0 97v3h3M97 100h3v-3' stroke='%23eee' stroke-width='3' stroke-dasharray='388'/%3E%3Cpath d='M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath{animation:stroke .5s linear}%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23083361'/%3E%3Cstop offset='25%25' stop-color='%23094687'/%3E%3Cstop offset='50%25' stop-color='%231B5DA4'/%3E%3Cstop offset='100%25' stop-color='%230F355D'/%3E%3C/linearGradient%3E%3Cpath d='M0 3V0h3M97 0h3v3M0 97v3h3M97 100h3v-3' stroke='%23eee' stroke-width='3' stroke-dasharray='388'/%3E%3Cpath d='M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2}.map-con{width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/details.vue?vue&type=template&id=cba75b92&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticStyle:{"display":"flex"}},[_vm._ssrNode("<div style=\"\\n      width: 30vw;\\n      height: calc(100vh - 100px) !important;\\n\\n      position: relative;\\n    \">","</div>",[_vm._ssrNode("<div style=\"margin-left: 1vw\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('v-card-title',[_vm._v("Select category")]),_vm._ssrNode(" "),_c('ClassList')],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div style=\"border-bottom: 4px dashed white; margin: 2vh 2vw\"></div> "),_c('v-btn',{staticClass:"neon3",staticStyle:{"width":"29vw","height":"7vh","font-size":"0.8em"},attrs:{"to":"/"}},[_vm._v("BACK")])],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"width: 70vw; height: calc(100vh - 100px) !important; padding: 1vw\">","</div>",[_vm._ssrNode("<div class=\"map-con border\">","</div>",[_c('v-card-title',[_vm._v("Trends")]),_vm._ssrNode(" "),_c('v-row',{staticClass:"data-box",staticStyle:{"padding-bottom":"5px","padding-left":"1vw","padding-right":"1vw"}},[_c('v-col',{staticClass:"col-sm-6",attrs:{"cols":"12"}},[_c('v-card',{staticStyle:{"background":"rgba(0, 0, 0, 0.2)"}},[_c('SingleLineChart',{attrs:{"title":"ENERGY USAGE","data":_vm.energy,"yAxis":"10","max":_vm.energyMax,"min":_vm.energyMin,"avg":_vm.energyAvg,"time":_vm.energyYear,"id":"energy"}})],1)],1),_vm._v(" "),_c('v-col',{staticClass:"col-sm-6",attrs:{"cols":"12"}},[_c('v-card',{staticStyle:{"background":"rgba(0, 0, 0, 0.2)"}},[_c('SingleLineChart',{attrs:{"title":"BUILDING ENERGY INDEX (BEI)","data":_vm.bei,"yAxis":"10","max":_vm.energyMax,"min":_vm.energyMin,"avg":_vm.energyAvg,"time":_vm.year,"id":"bei"}})],1)],1),_vm._v(" "),_c('v-col',{staticClass:"col-sm-6",attrs:{"cols":"12"}},[_c('v-card',{staticStyle:{"background":"rgba(0, 0, 0, 0.2)"}},[_c('SingleLineChart',{attrs:{"title":"ENERGY EFFICIENCY INDEX (EEI)","data":_vm.eei,"yAxis":"10","max":_vm.energyMax,"min":_vm.energyMin,"avg":_vm.energyAvg,"time":_vm.year,"id":"eei"}})],1)],1),_vm._v(" "),_c('v-col',{staticClass:"col-sm-6",attrs:{"cols":"12"}},[_c('v-card',{staticStyle:{"background":"rgba(0, 0, 0, 0.2)"}},[_c('SingleLineChart',{attrs:{"title":"CARBON EMISSION INTENSITY (CEI)","data":_vm.cei,"yAxis":"10","max":_vm.energyMax,"min":_vm.energyMin,"avg":_vm.energyAvg,"time":_vm.year,"id":"cei"}})],1)],1)],1)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/details.vue?vue&type=template&id=cba75b92&

// EXTERNAL MODULE: ./components/ClassList.vue + 4 modules
var ClassList = __webpack_require__(332);

// EXTERNAL MODULE: ./components/SingleLineChart.vue + 4 modules
var SingleLineChart = __webpack_require__(295);

// EXTERNAL MODULE: ./components/MultipleLineChart.vue + 4 modules
var MultipleLineChart = __webpack_require__(358);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/details.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var detailsvue_type_script_lang_js_ = ({
  layout: "main",
  middleware: ["auth"],
  components: {
    ClassList: ClassList["default"],
    SingleLineChart: SingleLineChart["default"],
    MultipleLineChart: MultipleLineChart["default"]
  },

  data() {
    return {
      energy: [],
      enerySum: [],
      energyMax: [],
      energyMin: [],
      energyAvg: [],
      energyYear: [],
      beiSum: [],
      beiMax: [],
      beiMin: [],
      beiAvg: [],
      beiYear: [],
      eeiSum: [],
      eeiMax: [],
      eeiMin: [],
      eeiAvg: [],
      eeiYear: [],
      ceiSum: [],
      ceiMax: [],
      ceiMin: [],
      ceiAvg: [],
      ceiYear: [],
      try4: false,
      bei: [],
      eei: [],
      cei: [],
      year: []
    };
  },

  methods: {
    getEnergy: function (id) {
      this.$axios.$get(`https://debug2.qwazx.one/api/data/building/energy`, {
        params: {
          building_id: id
        }
      }).then(response => {
        console.log(id);
        console.log(response);
        this.energy = [];
        this.energyMax = [];
        this.energyMin = [];
        this.energyAvg = [];
        this.energyYear = [];

        for (let i = 0; i < response.length; i++) {
          this.energy.push(response[i].totalec);
          this.energyMax.push(response[i].maxec);
          this.energyMin.push(response[i].minec);
          this.energyAvg.push(response[i].avgec);
          this.energyYear.push(response[i].year);
        } // let payload = {
        //   owner: response[0].owner,
        //   floor: response[0].floor,
        //   cei: response[0].carbon_emission_intensity,
        //   net_floor_area: response[0].net_floor_area,
        //   no_of_floors: response[0].no_of_floors,
        //   no_of_hospital_beds: response[0].no_of_hospital_beds,
        //   no_of_occupants: response[0].no_of_occupants,
        // };
        // this.setBuildingDetail(payload);
        // window.location.reload();

      }).catch(error => {
        console.log(error);
      });
    },
    getBei: function (id) {
      this.$axios.$get(`https://debug2.qwazx.one/api/data/building/bei`, {
        params: {
          building_id: id
        }
      }).then(response => {
        console.log(response);
        this.bei = [];
        this.eei = [];
        this.cei = [];
        this.year = [];

        for (let i = 0; i < response.length; i++) {
          this.bei.push(response[i].totalec / response[i].net_floor_area);
          this.eei.push(response[i].totalec / response[i].no_of_occupants);
          this.cei.push(response[i].totalec * response[i].grid_electricity_emission_factor);
          this.year.push(response[i].year);
        } // let payload = {
        //   owner: response[0].owner,
        //   floor: response[0].floor,
        //   cei: response[0].carbon_emission_intensity,
        //   net_floor_area: response[0].net_floor_area,
        //   no_of_floors: response[0].no_of_floors,
        //   no_of_hospital_beds: response[0].no_of_hospital_beds,
        //   no_of_occupants: response[0].no_of_occupants,
        // };
        // this.setBuildingDetail(payload);
        // window.location.reload();

      }).catch(error => {
        console.log(error);
      });
    }
  },
  computed: { ...Object(external_vuex_["mapState"])({
      id: state => state.id
    })
  },
  watch: {
    id: function () {
      console.log(this.id);
      this.getEnergy(this.id);
      this.getBei(this.id); // this.getBei(this.id);
      // this.getEei(this.id);
      // this.getCei(this.id);
    }
  },

  mounted() {
    // this.getEnergy(this.id);
    this.try4 = false; // this.getBei(this.id);
  }

});
// CONCATENATED MODULE: ./pages/details.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_detailsvue_type_script_lang_js_ = (detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(260);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(231);

// CONCATENATED MODULE: ./pages/details.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(378)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0a8ec0a6"
  
)

/* harmony default export */ var details = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {ClassList: __webpack_require__(332).default,SingleLineChart: __webpack_require__(295).default})


/* vuetify-loader */






installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=details.js.map