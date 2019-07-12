((typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] || []).push([[0],{

/***/ "00c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cdf6");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_ActivityIndicator_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "04b4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0ab3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Prefix/index.js
var Prefix = __webpack_require__("2018");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Mixins/Colorable/index.js
var Colorable = __webpack_require__("c681");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Mixins/MergeClasses/index.js + 1 modules
var MergeClasses = __webpack_require__("bc02");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/each.js
var each = __webpack_require__("f924");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isArray.js
var isArray = __webpack_require__("c084");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isEmpty.js
var isEmpty = __webpack_require__("e5ce");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/isObject.js
var isObject = __webpack_require__("ef2b");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/kebabCase.js
var kebabCase = __webpack_require__("5471");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/FormControl/FormControl.js









const EMPTY_CLASS = 'is-empty';
const FOCUS_CLASS = 'has-focus';
const CHANGED_CLASS = 'has-changed';
const CUSTOM_PREFIX = 'custom';

function addClass(el, vnode, css) {
    // el.classList.add(css);
    vnode.context.$el.classList.add(css);
}

function removeClass(el, vnode, css) {
    // el.classList.remove(css);
    vnode.context.$el.classList.remove(css);
}

function addEmptyClass(el, vnode) {
    if(Object(isEmpty["a" /* default */])(el.value) || (el.tagName === 'SELECT' && el.selectedIndex === -1)) {
        addClass(el, vnode, EMPTY_CLASS);
    }
}

/* harmony default export */ var FormControl = ({

    inheritAttrs: false,

    mixins: [
        Colorable["a" /* default */],
        MergeClasses["a" /* default */]
    ],

    props: {

        /**
         * Show type activity indicator.
         *
         * @property Boolean
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * Is the form control a custom styled component.
         *
         * @property Boolean
         */
        custom: {
            type: Boolean,
            default: false
        },

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: [Number, String],

        /**
         * The field id attribute value.
         *
         * @property String
         */
        value: {
            default: null
        },

        /**
         * Add form-group wrapper to input
         *
         * @property String
         */
        group: {
            type: Boolean,
            default: true
        },

        /**
         * An inline field validation error.
         *
         * @property String|Boolean
         */
        error: String,

        /**
         * An inline field validation errors passed as object with key/value
         * pairs. If errors passed as an object, the form name will be used for
         * the key.
         *
         * @property Object|Boolean
         */
        errors: {
            type: Object,
            default() {
                return {};
            }
        },

        /**
         * Some feedback to add to the field once the field is successfully
         * valid.
         *
         * @property String
         */
        feedback: [String, Array],

        /**
         * An array of event names that correlate with callback functions
         *
         * @property Function
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste'];
            }
        },

        /**
         * The default class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'form-control'
        },

        /**
         * Hide the label for browsers, but leave it for screen readers.
         *
         * @property String
         */
        hideLabel: Boolean,

        /**
         * The invalid property
         *
         * @property String
         */
        invalid: Boolean,

        /**
         * The valid property
         *
         * @property String
         */
        valid: Boolean,

        /**
         * Additional margin/padding classes for fine control of spacing
         *
         * @property String
         */
        spacing: String,

        /**
         * The size of the form control
         *
         * @property String
         */
        size: {
            type: String,
            default: 'md',
            validate: value => ['sm', 'md', 'lg'].indexOf(value) !== -1
        },

        /**
         * Display the form field inline
         *
         * @property String
         */
        inline: Boolean,

        /**
         * Some instructions to appear under the field label
         *
         * @property String
         */
        helpText: [Number, String]

    },

    directives: {
        bindEvents: {
            bind(el, binding, vnode) {
                function changedValue(el, value) {
                    addClass(el, vnode, CHANGED_CLASS);

                    if(!Object(isEmpty["a" /* default */])(value) || (el.selectedIndex && el.selectedIndex > -1)) {
                        removeClass(el, vnode, EMPTY_CLASS);
                    }
                    else if(!el.classList.contains(CHANGED_CLASS)) {
                        addClass(el, vnode, EMPTY_CLASS);
                    }

                    if(el.tagName === 'SELECT' && el.querySelector('[value=""]')) {
                        el.querySelector('[value=""]').selected = !value;
                    }
                }

                vnode.context.$watch('value', (value) => {
                    changedValue(vnode.context.$el, value);
                });

                el.addEventListener('blur', event => {
                    if(el.classList.contains(EMPTY_CLASS)) {
                        removeClass(el, vnode, CHANGED_CLASS);
                    }

                    removeClass(el, vnode, FOCUS_CLASS);
                });

                el.addEventListener('input', event => {
                    changedValue(event.target, event.target.value);
                });

                // Add/remove the has-focus class from the form control
                el.addEventListener('focus', event => {
                    addClass(el, vnode, FOCUS_CLASS);
                });

                // Bubble the native events up to the vue component.
                Object(each["a" /* default */])(vnode.context.bindEvents, name => {
                    el.addEventListener(name, event => {
                        vnode.context.$emit(name, event);
                    });
                });

                el.setAttribute('data-selected-index', el.selectedIndex);
            },
            inserted(el, binding, vnode) {
                el.selectedIndex = el.getAttribute('data-selected-index');
                
                addEmptyClass(el, vnode);

                if(el.selectedIndex > -1) {
                    addClass(el, vnode, CHANGED_CLASS);
                }
            },
            update(el, binding, vnode) {
                addEmptyClass(el, vnode);
            }
        }
    },

    methods: {

        blur() {
            if(this.getInputField()) {
                this.getInputField().blur();
            }
        },

        focus() {
            if(this.getInputField()) {
                this.getInputField().focus();
            }
        },

        getInputField() {
            return this.$el.querySelector(
                '.form-control, input, select, textarea'
            );
        },

        getFieldErrors() {
            let errors = this.error || this.errors;

            if(Object(isObject["a" /* default */])(this.errors)) {
                errors = this.errors[this.$attrs.name || this.$attrs.id];
            }

            return !errors || Object(isArray["a" /* default */])(errors) || Object(isObject["a" /* default */])(errors) ? errors : [errors];
        }

    },

    computed: {

        controlAttributes() {
            return Object.keys(this.$attrs)
                .concat([['class', this.controlClasses]])
                .reduce((carry, key) => {
                    if(Object(isArray["a" /* default */])(key)) {
                        carry[key[0]] = key[1];
                    }
                    else {
                        carry[key] = this[key] || this.$attrs[key];
                    }

                    return carry;
                }, {});
        },

        controlClass() {
            return this.custom ? this.customControlClass : (
                this.defaultControlClass + (this.plaintext ? '-plaintext' : '')
            );
        },

        controlSizeClass() {
            return Object(Prefix["a" /* default */])(this.size, this.controlClass);
        },

        customControlClass() {
            return 'custom-control';
        },

        formGroupClasses() {
            const name = Object(Prefix["a" /* default */])(Object(kebabCase["a" /* default */])(this.$options.name), this.custom ? CUSTOM_PREFIX : '');

            return this.mergeClasses(name, Object(Prefix["a" /* default */])(this.size, name), {
                'has-activity': this.activity,
                'is-valid': !!(this.valid || this.validFeedback),
                'is-invalid': !!(this.invalid || this.invalidFeedback)
            });
        },

        controlClasses() {
            return this.mergeClasses(
                this.controlClass,
                this.colorableClasses,
                this.controlSizeClass,
                (this.spacing || ''),
                ((this.valid || this.validFeedback) ? 'is-valid' : ''),
                ((this.invalid || this.invalidFeedback) ? 'is-invalid' : '')
            );
        },

        hasDefaultSlot() {
            return !!this.$slots.default;
        },

        invalidFeedback() {
            const errors = this.getFieldErrors();

            return this.error || (
                Object(isArray["a" /* default */])(errors) ? errors.join('<br>') : errors
            );
        },

        validFeedback() {
            return Object(isArray["a" /* default */])(this.feedback) ? this.feedback.join('<br>') : this.feedback;
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/FormControl/index.js

/* harmony default export */ var Mixins_FormControl = __webpack_exports__["a"] = (FormControl);


/***/ }),

/***/ "0e5e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2018":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e7a6");

/* harmony default export */ __webpack_exports__["a"] = (_Prefix__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);


/***/ }),

/***/ "280f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("76fc");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_BtnActivity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2c40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SlideDeckControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0e5e");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SlideDeckControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SlideDeckControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SlideDeckControls_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3508":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3bf5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

    computed: {

        colorableClasses() {
            const classes = {};

            for(let i in this.$attrs) {
                if(i.match(/^bg|text|border|bg-gradient-/)) {
                    classes[i] = true;
                }
            }

            return classes;
        }

    }

});


/***/ }),

/***/ "46d8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d216178-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=template&id=3b05516f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{class:_vm.formGroupClasses,attrs:{"group":_vm.group}},[_vm._t("label",[(_vm.label)?_c('form-label',{ref:"label",attrs:{"for":_vm.$attrs.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_c('div',{staticClass:"form-group-inner"},[_vm._t("control",[_c('input',_vm._b({directives:[{name:"bind-events",rawName:"v-bind-events"}],domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}},'input',_vm.controlAttributes,false))]),_vm._t("activity",[_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.activity)?_c('activity-indicator',{key:"test",ref:"activity",attrs:{"type":"dots","size":_vm.size}}):_vm._e()],1)])],2),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):(_vm.invalidFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()]),_vm._t("help",[(_vm.helpText)?_c('help-text',{ref:"help",domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=template&id=3b05516f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d216178-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=template&id=a1476532&
var HelpTextvue_type_template_id_a1476532_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('small',{staticClass:"form-text",class:_vm.classes},[_vm._t("default")],2)}
var HelpTextvue_type_template_id_a1476532_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=template&id=a1476532&

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/index.js + 32 modules
var Functions = __webpack_require__("ca14");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Mixins/Colorable/Colorable.js
var Colorable = __webpack_require__("3bf5");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Mixins/Screenreaders/Screenreaders.js
/* harmony default export */ var Screenreaders = ({

    props: {

        /**
         * Should show only for screenreaders
         *
         * @property Boolean
         */
        srOnly: Boolean,

        /**
         * Should be focusable for screenreaders
         *
         * @property Boolean
         */
        srOnlyFocusable: Boolean

    },

    computed: {
        screenreaderClasses() {
            return {
                'sr-only': this.srOnly,
                'sr-only-focusable': this.srOnlyFocusable
            };
        }
    }

});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=script&lang=js&
//
//
//
//
//
//





/* harmony default export */ var HelpTextvue_type_script_lang_js_ = ({

    name: 'HelpText',

    mixins: [
        Colorable["a" /* default */],
        Screenreaders
    ],

    computed: {
        classes() {
            return Object(Functions["c" /* extend */])({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/HelpText/HelpText.vue?vue&type=script&lang=js&
 /* harmony default export */ var HelpText_HelpTextvue_type_script_lang_js_ = (HelpTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/HelpText/HelpText.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  HelpText_HelpTextvue_type_script_lang_js_,
  HelpTextvue_type_template_id_a1476532_render,
  HelpTextvue_type_template_id_a1476532_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HelpText = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/HelpText/index.js

/* harmony default export */ var Components_HelpText = (HelpText);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d216178-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=template&id=7253de15&
var FormGroupvue_type_template_id_7253de15_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'form-group': !!_vm.group}},[_vm._t("default")],2)}
var FormGroupvue_type_template_id_7253de15_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=template&id=7253de15&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var FormGroupvue_type_script_lang_js_ = ({

    name: 'FormGroup',

    props: {

        group: {
            type: Boolean,
            default: true
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormGroup_FormGroupvue_type_script_lang_js_ = (FormGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue?vue&type=style&index=0&lang=scss&
var FormGroupvue_type_style_index_0_lang_scss_ = __webpack_require__("7c5d");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormGroup/FormGroup.vue






/* normalize component */

var FormGroup_component = Object(componentNormalizer["a" /* default */])(
  FormGroup_FormGroupvue_type_script_lang_js_,
  FormGroupvue_type_template_id_7253de15_render,
  FormGroupvue_type_template_id_7253de15_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormGroup = (FormGroup_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormGroup/index.js

/* harmony default export */ var Components_FormGroup = (FormGroup);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d216178-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=template&id=eee24d34&
var FormLabelvue_type_template_id_eee24d34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classes},[_vm._t("default")],2)}
var FormLabelvue_type_template_id_eee24d34_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=template&id=eee24d34&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=script&lang=js&
//
//
//
//
//
//





/* harmony default export */ var FormLabelvue_type_script_lang_js_ = ({

    name: 'FormLabel',

    mixins: [
        Colorable["a" /* default */],
        Screenreaders
    ],

    computed: {
        classes() {
            return Object(Functions["c" /* extend */])({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormLabel_FormLabelvue_type_script_lang_js_ = (FormLabelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormLabel/FormLabel.vue





/* normalize component */

var FormLabel_component = Object(componentNormalizer["a" /* default */])(
  FormLabel_FormLabelvue_type_script_lang_js_,
  FormLabelvue_type_template_id_eee24d34_render,
  FormLabelvue_type_template_id_eee24d34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormLabel = (FormLabel_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormLabel/index.js

/* harmony default export */ var Components_FormLabel = (FormLabel);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d216178-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=template&id=77352d9c&
var FormFeedbackvue_type_template_id_77352d9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'invalid-feedback': _vm.invalid, 'valid-feedback': _vm.valid && !_vm.invalid}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)}
var FormFeedbackvue_type_template_id_77352d9c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=template&id=77352d9c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var FormFeedbackvue_type_script_lang_js_ = ({

    name: 'FormFeedback',

    mixins: [
        Colorable["a" /* default */]
    ],

    props: {

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: String,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        invalid: Boolean,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        valid: Boolean

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var FormFeedback_FormFeedbackvue_type_script_lang_js_ = (FormFeedbackvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormFeedback/FormFeedback.vue





/* normalize component */

var FormFeedback_component = Object(componentNormalizer["a" /* default */])(
  FormFeedback_FormFeedbackvue_type_script_lang_js_,
  FormFeedbackvue_type_template_id_77352d9c_render,
  FormFeedbackvue_type_template_id_77352d9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormFeedback = (FormFeedback_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/FormFeedback/index.js

/* harmony default export */ var Components_FormFeedback = (FormFeedback);

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Mixins/Colorable/index.js
var Mixins_Colorable = __webpack_require__("c681");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/index.js + 16 modules
var ActivityIndicator = __webpack_require__("a633");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Mixins/FormControl/index.js + 1 modules
var FormControl = __webpack_require__("0ab3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var InputFieldvue_type_script_lang_js_ = ({

    name: 'InputField',

    components: {
        HelpText: Components_HelpText,
        FormGroup: Components_FormGroup,
        FormLabel: Components_FormLabel,
        FormFeedback: Components_FormFeedback,
        ActivityIndicator: ActivityIndicator["a" /* default */]
    },

    mixins: [
        Mixins_Colorable["a" /* default */],
        FormControl["a" /* default */]
    ]

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=script&lang=js&
 /* harmony default export */ var InputField_InputFieldvue_type_script_lang_js_ = (InputFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/InputField/InputField.vue?vue&type=style&index=0&lang=scss&
var InputFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("7aa6");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputField/InputField.vue






/* normalize component */

var InputField_component = Object(componentNormalizer["a" /* default */])(
  InputField_InputFieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputField = (InputField_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/InputField/index.js

/* harmony default export */ var Components_InputField = __webpack_exports__["a"] = (InputField);


/***/ }),

/***/ "4c54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f111';
var svgPathData = 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "586e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SlideDeck_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d587");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SlideDeck_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SlideDeck_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SlideDeck_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "68db":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "76fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7aa6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("68db");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_InputField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7c5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("04b4");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_FormGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "87f6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9863":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d216178-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue?vue&type=template&id=c8180882&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn",class:_vm.classes,attrs:{"type":_vm.type},on:{"click":_vm.onClick}},[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "+_vm._s(_vm.label)+"\n    "),_vm._t("default"),_c('activity-indicator',_vm._b({},'activity-indicator',_vm.indicatorProps,false))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue?vue&type=template&id=c8180882&

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/index.js + 32 modules
var Functions = __webpack_require__("ca14");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/index.js + 16 modules
var ActivityIndicator = __webpack_require__("a633");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//




const convertAnimationDelayToInt = function(delay) {
    const num = parseFloat(delay, 10);
    const matches = delay.match(/m?s/);
    const unit = matches ? matches[0] : false;

    let milliseconds;

    switch (unit) {
    case 's': // seconds
        milliseconds = num * 1000;
        break;
    case 'ms':
    default:
        milliseconds = num;
        break;
    }

    return milliseconds || 0;
};

const animated = function(el, callback) {
    const defaultView = (el.ownerDocument || document).defaultView;

    setTimeout(() => {
        callback.apply();
    }, convertAnimationDelayToInt(defaultView.getComputedStyle(el).animationDuration));
};

/* harmony default export */ var BtnActivityvue_type_script_lang_js_ = ({

    name: 'BtnActivity',

    components: {
        ActivityIndicator: ActivityIndicator["a" /* default */]
    },

    props: {

        /**
         * Make the button appear with the active state.
         *
         * @property {Boolea}n}
         */
        active: Boolean,

        /**
         * Show the activity indicator inside the button.
         *
         * @property {Boolea}n}
         */
        activity: Boolean,

        /**
         * Display the button as block width.
         *
         * @property {Boolea}n}
         */
        block: Boolean,

        /**
         * Make the button appear with the disabled state.
         *
         * @property {Boolea}n}
         */
        disabled: Boolean,

        /**
         * The button label. If not passed as a property, label must be passed
         * inside the element's html.
         *
         * @property {String}
         */
        label: String,

        /**
         * The button icon
         *
         * @property {String}
         */
        icon: String,

        /**
         * The `type` attribute for the button element.
         *
         * @property {String}
         */
        type: String,

        /**
         * The size of the button.
         *
         * @property {String}
         */
        size: {
            type: String,
            default: 'md'
        },

        /**
         * The variant of the button.
         *
         * @property {String}
         */
        variant: {
            type: String,
            default: 'primary'
        },

        /**
         * The type of activity indicator inside the button.
         *
         * @property {String}
         */
        indicator: {
            type: [Object, String],
            default: 'spinner'
        },

        /**
         * The orientation of the activity button inside the button.
         *
         * @property {String}
         */
        orientation: {
            type: String,
            default: 'right'
        }
    },

    computed: {

        /**
         * An object of classes to append to the button.
         *
         * @return void
         */
        classes() {
            const classes = {
                'disabled': this.disabled,
                'active': this.active,
                'btn-block': this.block,
                'btn-activity': this.activity
            };

            classes['btn-' + this.size.replace('btn-', '')] = !!this.size;
            classes['btn-' + this.variant.replace('btn-', '')] = !!this.variant;
            classes['btn-activity-' + this.orientation.replace('btn-activity-', '')] = !!this.orientation;
            classes['btn-activity-indicator-' + this.indicatorProps.type.replace('btn-activity-indicator-', '')] = !!this.indicatorProps.type;

            return classes;
        },

        indicatorProps() {
            return Object.assign({
                type: 'spinner'
            }, (Object(Functions["j" /* isString */])(this.indicator) ? {
                type: this.indicator
            } : this.indicator) || {});
        }

    },

    watch: {

        activity(value) {
            if(value) {
                this.showActivity();
            }
            else {
                this.hideActivity();
            }
        }

    },

    methods: {

        /**
         * Disable the button.
         *
         * @return void
         */
        disable() {
            this.$el.disabled = true;
        },

        /**
         * Enable the button.
         *
         * @return void
         */
        enable() {
            this.$el.disabled = false;
        },

        /**
         * Show the activity indicator inside the button.
         *
         * @return void
         */
        showActivity() {
            this.disable();

            animated(this.$el, () => {
                this.$el.classList.add('btn-activity');
                this.$emit('show-activity');
            });
        },

        /**
         * Hide the activity indicator inside the button.
         *
         * @return void
         */
        hideActivity() {
            this.$el.classList.add('btn-hide-activity');

            animated(this.$el, () => {
                this.enable();
                this.$el.classList.remove('btn-activity', 'btn-hide-activity');
                this.$emit('hide-activity');
            });
        },

        /**
         * The click callback function
         *
         * @return void
         */
        onClick(event) {
            if(!this.disabled) {
                this.$emit('click', event);
            }
            else {
                event.preventDefault();
            }
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue?vue&type=script&lang=js&
 /* harmony default export */ var BtnActivity_BtnActivityvue_type_script_lang_js_ = (BtnActivityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue?vue&type=style&index=0&lang=scss&
var BtnActivityvue_type_style_index_0_lang_scss_ = __webpack_require__("280f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnActivity/BtnActivity.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  BtnActivity_BtnActivityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnActivity = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/BtnActivity/index.js

/* harmony default export */ var Components_BtnActivity = __webpack_exports__["a"] = (BtnActivity);


/***/ }),

/***/ "9d01":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("87f6");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a633":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d216178-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=template&id=9bdfd590&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.center)?_c('div',{staticClass:"center-wrapper",class:{'position-relative': _vm.relative, 'position-fixed': _vm.fixed},style:(_vm.style)},[_c('div',{staticClass:"center-content d-flex flex-column align-items-center"},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)]):_c('div',{staticClass:"d-flex flex-column justify-content-center align-items-center",style:(_vm.style)},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=template&id=9bdfd590&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d216178-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=template&id=004e82ac&
var BaseTypevue_type_template_id_004e82ac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity-indicator",class:_vm.classes},_vm._l((_vm.nodes),function(i){return _c('div',{key:i})}),0)}
var BaseTypevue_type_template_id_004e82ac_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=template&id=004e82ac&

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/kebabCase.js
var kebabCase = __webpack_require__("5471");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var BaseTypevue_type_script_lang_js_ = ({

    props: {
        nodes: {
            type: Number,
            default: 3
        },
        size: {
            type: String,
            default: ''
        },
        prefix: {
            type: String,
            default: 'activity-indicator-'
        }
    },

    computed: {
        classes: function() {
            const classes = {};
            const name = Object(kebabCase["a" /* default */])(this.$options.name);

            classes[name] = !!name;
            classes[this.prefix + this.size.replace(this.prefix, '')] = !!this.size;

            return classes;
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_BaseTypevue_type_script_lang_js_ = (BaseTypevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/BaseType.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Types_BaseTypevue_type_script_lang_js_,
  BaseTypevue_type_template_id_004e82ac_render,
  BaseTypevue_type_template_id_004e82ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BaseType = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/unit.js
var unit = __webpack_require__("0f2b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue?vue&type=script&lang=js&



/* harmony default export */ var Dotsvue_type_script_lang_js_ = ({

    name: 'ActivityIndicatorDots',

    extends: BaseType
});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Dotsvue_type_script_lang_js_ = (Dotsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue?vue&type=style&index=0&lang=scss&
var Dotsvue_type_style_index_0_lang_scss_ = __webpack_require__("e75e");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Dots.vue
var Dots_render, Dots_staticRenderFns





/* normalize component */

var Dots_component = Object(componentNormalizer["a" /* default */])(
  Types_Dotsvue_type_script_lang_js_,
  Dots_render,
  Dots_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dots = (Dots_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/index.js + 32 modules
var Functions = __webpack_require__("ca14");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=script&lang=js&




/* harmony default export */ var Spinnervue_type_script_lang_js_ = ({

    name: 'ActivityIndicatorSpinner',

    extends: BaseType,

    props: Object(Functions["c" /* extend */])({}, BaseType.props, {
        nodes: {
            type: Number,
            default: 12
        }
    })
});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Types_Spinnervue_type_script_lang_js_ = (Spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue?vue&type=style&index=0&lang=scss&
var Spinnervue_type_style_index_0_lang_scss_ = __webpack_require__("9d01");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/Types/Spinner.vue
var Spinner_render, Spinner_staticRenderFns





/* normalize component */

var Spinner_component = Object(componentNormalizer["a" /* default */])(
  Types_Spinnervue_type_script_lang_js_,
  Spinner_render,
  Spinner_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Spinner = (Spinner_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var ActivityIndicatorvue_type_script_lang_js_ = ({

    name: 'ActivityIndicator',

    components: {
        ActivityIndicatorDots: Dots,
        ActivityIndicatorSpinner: Spinner
    },

    extends: BaseType,

    props: {

        center: Boolean,

        fixed: Boolean,

        label: String,

        relative: Boolean,

        type: {
            type: String,
            default: 'dots'
        },

        height: [String, Number],

        maxHeight: [String, Number],

        minHeight: [String, Number],

        width: [String, Number],

        maxWidth: [String, Number],

        minWidth: [String, Number]

    },

    computed: {

        style() {
            return {
                width: Object(unit["a" /* default */])(this.width),
                maxWidth: Object(unit["a" /* default */])(this.maxWidth),
                minWidth: Object(unit["a" /* default */])(this.minWidth),
                height: Object(unit["a" /* default */])(this.height),
                maxHeight: Object(unit["a" /* default */])(this.maxHeight),
                minHeight: Object(unit["a" /* default */])(this.minHeight)
            };
        },

        component() {
            return Object(kebabCase["a" /* default */])(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=script&lang=js&
 /* harmony default export */ var ActivityIndicator_ActivityIndicatorvue_type_script_lang_js_ = (ActivityIndicatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue?vue&type=style&index=0&lang=scss&
var ActivityIndicatorvue_type_style_index_0_lang_scss_ = __webpack_require__("00c4");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/ActivityIndicator.vue






/* normalize component */

var ActivityIndicator_component = Object(componentNormalizer["a" /* default */])(
  ActivityIndicator_ActivityIndicatorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ActivityIndicator = (ActivityIndicator_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/ActivityIndicator/index.js

/* harmony default export */ var Components_ActivityIndicator = __webpack_exports__["a"] = (ActivityIndicator);


/***/ }),

/***/ "a6f4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Functions/index.js + 32 modules
var Functions = __webpack_require__("ca14");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/SlideDeck/Slides.vue?vue&type=script&lang=js&



/* harmony default export */ var Slidesvue_type_script_lang_js_ = ({

    name: 'Slides',

    props: {

        /**
         * The active slide index or key.
         *
         * @type {String|Number}
         */

        active: {
            type: [String, Number],
            default: 0
        }

    },

    data() {
        return {
            lastSlide: null,
            currentSlide: this.active
        };
    },

    watch: {

        active(value, oldValue) {
            this.lastSlide = oldValue;
            this.currentSlide = value;
        }

    },

    methods: {

        /**
         * Get the HTML nodes from the default slots (exluding children without tags).
         *
         * @return {Array}
         */
        slides() {
            return this.$slots.default
                .filter((vnode, i) => {
                    return !!vnode.tag;
                })
                .map((vnode, i) => {
                    if(!vnode.key || (!vnode.data && !vnode.data.key)) {
                        vnode.data = Object(Functions["c" /* extend */])(vnode.data, {
                            key: vnode.key = i
                        });
                    }

                    return vnode;
                });
        },

        /**
         * Get a slide by index.
         *
         * @return {Array}
         */
        slide(index) {
            return this.findSlideByKey(index) || this.findSlideByIndex(index) || this.findSlideByIndex(0);
        },

        /**
         * Find a slide by a given key or return null if non found.
         *
         * @param  {Number|String} key
         * @return {VNode|null}
         */
        findSlideByKey(key) {
            return Object(Functions["e" /* first */])(this.slides().filter((vnode, i) => {
                if(vnode.key === key) {
                    return vnode;
                }
                else if(vnode.data && vnode.data.key === key) {
                    return vnode;
                }

                return null;
            }));
        },

        /**
         * Find a slide by a given index or return null if non found.
         *
         * @param  {Number|String} key
         * @return {VNode|null}
         */
        findSlideByIndex(index) {
            return this.slides()[index] || null;
        },

        /**
         * Get the slide index for a give slide object or key
         *
         * @param  {Number|String} slide
         * @return {VNode|null}
         */
        getSlideIndex(slide) {
            let key = slide;
            
            if(slide && !Object(Functions["k" /* isUndefined */])(slide.data)) {
                key = slide.data.key;
            }
            else if(slide && slide.key) {
                key = slide.key;
            }
            
            return Object(Functions["d" /* findIndex */])(this.slides(), (vnode, i) => {
                if(slide === vnode) {
                    return true;
                }
                else if(vnode.data && vnode.data.key === key) {
                    return true;
                }
                else if(vnode.key && vnode.key === key) {
                    return true;
                }
                else if(i === slide) {
                    return true;
                }

                return false;
            });
        }

    },

    render(h) {
        return this.slide(this.currentSlide);
    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/Slides.vue?vue&type=script&lang=js&
 /* harmony default export */ var SlideDeck_Slidesvue_type_script_lang_js_ = (Slidesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/Slides.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  SlideDeck_Slidesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Slides = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d216178-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/SlideDeck/SlideDeck.vue?vue&type=template&id=48decca4&
var SlideDeckvue_type_template_id_48decca4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slide-deck",class:{'slide-deck-flex': _vm.center, 'is-sliding': _vm.isSliding}},[_vm._t("top"),_c('div',{ref:"content",staticClass:"slide-deck-content",style:({width: _vm.width, height: _vm.height})},[_c('keep-alive',[_c('transition',{attrs:{"name":("slide-" + _vm.direction)},on:{"after-enter":_vm.onSlideAfterEnter,"before-enter":_vm.onSlideBeforeEnter,"enter":_vm.onSlideEnter,"after-leave":_vm.onSlideAfterLeave,"before-leave":_vm.onSlideBeforeLeave,"leave":_vm.onSlideLeave}},[_c('slides',{key:_vm.currentSlide,ref:"slides",attrs:{"active":_vm.currentSlide}},[_vm._t("default")],2)],1)],1)],1),_vm._t("middle"),_vm._t("controls",[(_vm.controls)?_c('slide-deck-controls',{ref:"controls",attrs:{"slides":_vm.slides(),"active":_vm.currentSlide},on:{"click":_vm.onClickControl}}):_vm._e()],{"slides":_vm.slides(),"active":_vm.currentSlide}),_vm._t("bottom")],2)}
var SlideDeckvue_type_template_id_48decca4_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/SlideDeck.vue?vue&type=template&id=48decca4&

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Helpers/Transition/index.js + 1 modules
var Transition = __webpack_require__("d555");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d216178-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/SlideDeck/SlideDeckControls.vue?vue&type=template&id=505c3032&
var SlideDeckControlsvue_type_template_id_505c3032_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slide-deck-controls"},_vm._l((_vm.slides),function(slide,i){return _c('a',{key:i,staticClass:"slide-deck-control-icon",class:{'is-active': (slide.data ? slide.data.key : slide.key) === _vm.active},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.onClick($event, slide)}}},[_c('font-awesome-icon',{attrs:{"icon":"circle"}})],1)}),0)}
var SlideDeckControlsvue_type_template_id_505c3032_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/SlideDeckControls.vue?vue&type=template&id=505c3032&

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__("ecee");

// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var vue_fontawesome_index_es = __webpack_require__("ad3d");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/faCircle.js
var faCircle = __webpack_require__("4c54");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/SlideDeck/SlideDeckControls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





index_es["c" /* library */].add(faCircle["faCircle"]);

/* harmony default export */ var SlideDeckControlsvue_type_script_lang_js_ = ({

    name: 'SlideDeckControls',
    
    components: {
        FontAwesomeIcon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */]
    },

    props: {

        /**
         * The slide key or index that should show.
         *
         * @type {Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * An array of slide vnodes
         *
         * @type {Number}
         */
        slides: {
            type: Array,
            required: true
        }

    },

    data() {
        return {};
    },

    computed: {

    },

    methods: {

        onClick(event, slide) {
            this.$emit('click', event, slide);
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/SlideDeckControls.vue?vue&type=script&lang=js&
 /* harmony default export */ var SlideDeck_SlideDeckControlsvue_type_script_lang_js_ = (SlideDeckControlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/SlideDeckControls.vue?vue&type=style&index=0&lang=scss&
var SlideDeckControlsvue_type_style_index_0_lang_scss_ = __webpack_require__("2c40");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/SlideDeckControls.vue






/* normalize component */

var SlideDeckControls_component = Object(componentNormalizer["a" /* default */])(
  SlideDeck_SlideDeckControlsvue_type_script_lang_js_,
  SlideDeckControlsvue_type_template_id_505c3032_render,
  SlideDeckControlsvue_type_template_id_505c3032_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SlideDeckControls = (SlideDeckControls_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-interface/src/Components/SlideDeck/SlideDeck.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var SlideDeckvue_type_script_lang_js_ = ({

    name: 'SlideDeck',

    components: {
        Slides: Slides,
        SlideDeckControls: SlideDeckControls
    },

    props: {

        /**
         * The slide key or index that should show.
         *
         * @type {Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * Center the slide-deck.
         *
         * @type Boolean
         */
        center: {
            type: Boolean,
            default: true
        },

        /**
         * Show the slide-deck controls to change the slide.
         *
         * @type Boolean
         */
        controls: Boolean,

        /**
         * Flex the content within the popover.
         *
         * @type Boolean
         */
        flex: {
            type: Boolean,
            default: true
        },

        /**
         * Give a selector or Element to use apply a hidden overflow. If false,
         * no overflow will be applied. Defaults to the slide deck's container.
         *
         * @type {String|Element|Boolean}
         */
        overflow: {
            type: [Object, String, Element, Boolean],
            default: true
        },

        /**
         * The mode determines how the popover content will flex based on the
         * varying heights of the slides.
         *
         * @type Boolean
         */
        resizeMode: {
            type: [Function, Boolean, String],
            default: 'auto',
            validate(value) {
                return ['auto', 'initial', 'inherit'].indexOf(value) !== 1;
            }
        }

    },

    data() {
        return {
            height: null,
            width: null,
            lastSlide: null,
            isSliding: false,
            currentSlide: this.active,
            direction: 'forward'
        };
    },

    computed: {

        overflowElement() {
            if(this.overflow === true) {
                return this.$el;
            }
            else if(this.overflow instanceof Element) {
                return this.overflow;
            }
            else if(this.overflow && this.overflow.elm) {
                return this.overflow.elm;
            }
            else if(this.overflow) {
                return document.querySelector(this.overflow);
            }

            return null;
        },

        nodes() {
            return this.$slots.default;
        }

    },

    watch: {

        active(value, oldValue) {
            this.lastSlide = oldValue;
            this.currentSlide = value;
        },

        isSliding(value) {
            if(this.overflowElement) {
                this.overflowElement.style.overflow = value ? 'hidden' : 'inherit';
            }
        },

        currentSlide(value, oldValue) {
            this.direction = this.$refs.slides.getSlideIndex(oldValue) > this.$refs.slides.getSlideIndex(value) ? 'backward' : 'forward';
        }

    },

    methods: {

        resize(el) {
            if(Object(Functions["h" /* isFunction */])(this.resizeMode)) {
                this.resizeMode(el || this.$el);
            }
            else {
                const style = getComputedStyle(el);

                if(!el.style.width) {
                    el.width = el.style.width = `calc(${style.width} + ${style.marginLeft} + ${style.marginRight})`;
                }

                if(!el.style.height) {
                    el.height = el.style.height = `calc(${style.height} + ${style.marginTop} + ${style.marginBottom})`;
                }
            }
        },

        slides() {
            return this.$refs.slides ? this.$refs.slides.slides() : [];
        },

        slide(index) {
            return this.$refs.slides ? this.$refs.slides.slide(index || this.active) : null;
        },

        onClickControl(event, vnode) {
            this.currentSlide = vnode.data ? vnode.data.key : vnode.key;
        },

        onSlideAfterEnter(el) {
            if(el.width) {
                el.width = el.style.width = null;
            }

            if(el.height) {
                el.height = el.style.height = null;
            }

            this.width = null;
            this.height = null;

            if(this.$refs.slides) {
                this.$emit(
                    'after-enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide)
                );
            }
        },

        onSlideBeforeEnter(el) {
            this.isSliding = true;
            
            if(this.$refs.slides) {
                this.$emit(
                    'before-enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide)
                );
            }
        },

        onSlideEnter(el, done) {
            this.resize(el);
            this.width = el.style.width;
            this.height = el.style.height;

            Object(Transition["a" /* default */])(el).then(delay => {
                this.isSliding = false;
                this.$nextTick(done);
            });

            if(this.$refs.slides) {
                this.$emit(
                    'enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide)
                );
            }
        },

        onSlideAfterLeave(el) {
            if(el.width) {
                el.width = el.style.width = null;
            }

            if(el.height) {
                el.height = el.style.height = null;
            }

            this.$nextTick(() => {
                if(this.$refs.slides) {
                    this.$emit(
                        'after-leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide)
                    );
                }
            });
        },

        onSlideBeforeLeave(el) {
            this.resize(el);

            if(this.$refs.slides) {
                this.$emit(
                    'before-leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide)
                );
            }
        },

        onSlideLeave(el, done) {
            Object(Transition["a" /* default */])(el).then(delay => {
                this.$nextTick(done);
            });

            if(this.$refs.slides) {
                this.$emit(
                    'leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide)
                );
            }
        }

    }

});

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/SlideDeck.vue?vue&type=script&lang=js&
 /* harmony default export */ var SlideDeck_SlideDeckvue_type_script_lang_js_ = (SlideDeckvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/SlideDeck.vue?vue&type=style&index=0&lang=scss&
var SlideDeckvue_type_style_index_0_lang_scss_ = __webpack_require__("586e");

// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/SlideDeck.vue






/* normalize component */

var SlideDeck_component = Object(componentNormalizer["a" /* default */])(
  SlideDeck_SlideDeckvue_type_script_lang_js_,
  SlideDeckvue_type_template_id_48decca4_render,
  SlideDeckvue_type_template_id_48decca4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SlideDeck = (SlideDeck_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/index.js
/* unused concated harmony import Slides */
/* unused concated harmony import SlideDeckControls */






/* harmony default export */ var Components_SlideDeck = __webpack_exports__["a"] = (SlideDeck);


/***/ }),

/***/ "c681":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Colorable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3bf5");

/* harmony default export */ __webpack_exports__["a"] = (_Colorable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);


/***/ }),

/***/ "cdf6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d587":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e75e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3508");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_css_loader_index_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_lib_loader_js_ref_8_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Dots_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=CapsuleErrorReport.common.0.js.map