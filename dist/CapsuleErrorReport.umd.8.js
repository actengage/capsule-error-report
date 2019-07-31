((typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpCapsuleErrorReport"] || []).push([[8],{

/***/ "03bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e8a1ac48-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Editor.vue?vue&type=template&id=49fff850&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('capsule-editor',{ref:"editor",attrs:{"demo-mode":"","errors":_vm.lint.errors,"filename":_vm.lint.filename,"api-key":_vm.apiKey,"contents":_vm.lint.html,"environment":_vm.environment},on:{"lint-errors":_vm.onLintError,"lint-success":_vm.onLintSuccess,"close":function($event){return _vm.$router.push({name: 'home'})}},scopedSlots:_vm._u([{key:"success",fn:function(){return [_c('slide-deck',{attrs:{"active":_vm.active}},[_c('div',{key:0},[_c('div',{staticClass:"text-center position-relative"},[_c('animate-css',{attrs:{"name":"fade","up":"","leave-active-class":"position-absolute w-100 h-100"}},[(!_vm.activity && !_vm.error)?_c('div',[_c('img',{staticClass:"capsule-editor-modal-logo",attrs:{"src":__webpack_require__("5f9a")}}),_c('h1',{staticClass:"font-weight-light mb-4"},[_vm._v("Document Fixed!")]),_c('h5',{staticClass:"font-weight-light mb-4 mx-5"},[_vm._v("Do you want to automatically send it back to us or download it and manually email it as an attachment?")]),_c('div',{staticClass:"mb-5"},[_c('btn',{staticClass:"mr-2",attrs:{"size":"lg","variant":"success"},on:{"click":_vm.onClickSend}},[_c('icon',{attrs:{"icon":"envelope"}}),_vm._v(" Send Now")],1),_c('btn',{attrs:{"size":"lg","variant":"success","outline":""},on:{"click":_vm.onClickDownload}},[_c('icon',{attrs:{"icon":"download"}}),_vm._v(" Download")],1)],1)]):_vm._e()]),_c('animate-css',{attrs:{"name":"fade","up":"","leave-active-class":"position-absolute w-100 h-100"}},[(_vm.activity)?_c('div',{staticClass:"my-5 py-5"},[_c('div',{staticClass:"my-5"},[_c('hourglass',{attrs:{"label":_vm.hourGlassLabel,"animate":""}})],1)]):(_vm.error)?_c('http-exception',{attrs:{"error":_vm.error}},[_c('div',{staticClass:"text-center"},[_c('btn',{staticClass:"mr-2",attrs:{"size":"lg"},on:{"click":_vm.onClickSend}},[_c('icon',{attrs:{"icon":"redo"}}),_vm._v(" Try Again\n                                ")],1),_c('btn',{attrs:{"size":"lg","variant":"secondary"},on:{"click":_vm.onClickCancel}},[_c('icon',{attrs:{"icon":"times-circle"}}),_vm._v(" Cancel\n                                ")],1)],1)]):_vm._e()],1)],1)]),_c('div',{key:1},[_c('animate-css',{attrs:{"name":"fade","leave-active-class":"position-absolute w-100 h-100"}},[_c('div',{staticClass:"text-center position-relative my-5"},[_c('icon',{staticClass:"text-success",attrs:{"icon":"check-circle","size":"6x"}}),_c('h1',{staticClass:"font-weight-light mt-3 mb-0"},[_vm._v("Thank You!")]),_c('h5',{staticClass:"font-weight-light my-4 mx-5 px-1"},[_vm._v("Thank you for your assistance in fixing these errors. We have received your document and will process it shortly.")]),_c('btn',{attrs:{"size":"lg"},on:{"click":_vm.onClickClose}},[_c('icon',{attrs:{"icon":"window-close"}}),_vm._v(" Close Window\n                        ")],1)],1)])],1),_c('div',{key:2},[_c('div',{staticClass:"text-center position-relative my-5"},[_c('icon',{staticClass:"text-secondary",attrs:{"icon":['far', 'file-archive'],"size":"6x"}}),_c('h1',{staticClass:"font-weight-light mt-3 mb-0"},[_vm._v("File Downloaded!")]),_c('h4',{staticClass:"font-weight-light mt-3 mb-1"},[_vm._v(_vm._s(_vm.download.zipname))]),_c('h5',{staticClass:"font-weight-light mb-4"},[_vm._v("("+_vm._s(_vm.download.size)+")")]),_c('div',[_c('btn',{staticClass:"mr-2",attrs:{"size":"lg","variant":"success"},on:{"click":_vm.onClickDownloadAgain}},[_c('icon',{attrs:{"icon":"download"}}),_vm._v(" Download Again\n                        ")],1),_c('btn',{attrs:{"size":"lg"},on:{"click":_vm.onClickClose}},[_c('icon',{attrs:{"icon":"window-close"}}),_vm._v(" Close Window\n                        ")],1)],1)],1)])])]},proxy:true}]),model:{value:(_vm.editor),callback:function ($$v) {_vm.editor=$$v},expression:"editor"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/Editor.vue?vue&type=template&id=49fff850&

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");

// EXTERNAL MODULE: ./node_modules/vue-hourglass/src/index.js + 5 modules
var src = __webpack_require__("6610");

// EXTERNAL MODULE: ./src/Components/HttpException.vue + 31 modules
var HttpException = __webpack_require__("5eb8");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/Btn/index.js + 5 modules
var Btn = __webpack_require__("9719");

// EXTERNAL MODULE: ./node_modules/capsule-editor/src/Editor.vue + 144 modules
var Editor = __webpack_require__("9530");

// EXTERNAL MODULE: ./src/Helpers/Functions/index.js + 4 modules
var Functions = __webpack_require__("b360");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/SlideDeck/index.js + 13 modules
var SlideDeck = __webpack_require__("a6f4");

// EXTERNAL MODULE: ./node_modules/vue-interface/src/Components/AnimateCss/index.js + 5 modules
var AnimateCss = __webpack_require__("566e");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__("ecee");

// EXTERNAL MODULE: ./node_modules/@fortawesome/vue-fontawesome/index.es.js
var vue_fontawesome_index_es = __webpack_require__("ad3d");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js
var free_regular_svg_icons_index_es = __webpack_require__("b702");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__("c074");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Components/Editor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












index_es["c" /* library */].add(free_solid_svg_icons_index_es["q" /* faRedo */]);
index_es["c" /* library */].add(free_solid_svg_icons_index_es["g" /* faEnvelope */]);
index_es["c" /* library */].add(free_solid_svg_icons_index_es["f" /* faDownload */]);
index_es["c" /* library */].add(free_solid_svg_icons_index_es["c" /* faCheckCircle */]);
index_es["c" /* library */].add(free_regular_svg_icons_index_es["b" /* faFileArchive */]);
index_es["c" /* library */].add(free_solid_svg_icons_index_es["r" /* faTimesCircle */]);
index_es["c" /* library */].add(free_solid_svg_icons_index_es["t" /* faWindowClose */]);
const throttled = Object(lodash["throttle"])(fn => {
  fn && fn();
}, 2500);
/* harmony default export */ var Editorvue_type_script_lang_js_ = ({
  name: 'Editor',
  components: {
    Btn: Btn["a" /* default */],
    Icon: vue_fontawesome_index_es["a" /* FontAwesomeIcon */],
    Hourglass: src["a" /* default */],
    SlideDeck: SlideDeck["a" /* default */],
    AnimateCss: AnimateCss["a" /* default */],
    CapsuleEditor: Editor["a" /* default */],
    HttpException: HttpException["a" /* default */]
  },
  props: {
    lint: {
      type: Object,
      required: true
    },
    errors: Array,
    apiKey: {
      type: String,
      required: true
    },
    environment: {
      type: String,

      default() {
        return "production";
      }

    }
  },

  data() {
    const errors = this.errors || [];
    return {
      active: 0,
      error: null,
      editor: null,
      revision: null,
      activity: false,
      download: {
        blob: null,
        size: null,
        zipname: null,
        filename: null
      },
      hourGlassLabel: null,
      originalErrors: this.errors,
      currentErrors: errors.slice(0),
      currentFilename: this.lint.filename,
      originalFilename: this.lint.filename,
      currentContents: this.lint.html || this.getSlotContents(),
      originalContents: this.lint.html || this.getSlotContents()
    };
  },

  computed: {
    httpRequestOptions() {
      return {
        baseURL: `http://api.thecapsule.${this.environment === 'production' ? 'email' : 'test'}/v1`,
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      };
    }

  },
  watch: {
    editor({
      filename,
      contents
    }) {
      this.currentFilename = filename;
      this.currentContents = contents;
    }

  },
  methods: {
    formatBytes(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },

    onClickSend() {
      throttled(() => {
        this.error = null;
        this.activity = true;
        this.hourGlassLabel = 'Sending...';
        Object(Functions["c" /* revision */])({
          filename: this.currentFilename,
          revised_html: this.currentContents,
          original_html: this.originalContents
        }, this.httpRequestOptions).then(response => {
          throttled(() => {
            this.active = 1;
            this.error = null;
            this.activity = false;
          });
        }, e => {
          throttled(() => {
            this.error = e;
            this.activity = false;
          });
        });
      });
    },

    onClickCancel() {
      this.error = null;
      this.active = 0;
    },

    onClickDownloadAgain() {
      Object(Functions["a" /* download */])(this.download.blob, this.download.zipname);
    },

    onClickDownload() {
      throttled(() => {
        this.hourGlassLabel = 'Generating...';
        this.activity = true;
        Object(Functions["d" /* zip */])(this.currentContents, this.currentFilename).then(blob => {
          this.download.blob = blob;
          this.download.filename = this.currentFilename;
          this.download.size = this.formatBytes(blob.size);
          this.download.zipname = this.currentFilename.replace(/\.html/, '.zip');
          throttled(() => {
            this.active = 2;
            setTimeout(() => {
              Object(Functions["a" /* download */])(blob, this.download.zipname);
            }, 250);
          });
        });
      });
    },

    onClickClose() {
      window.close();
    },

    onLintError(e, errors) {
      this.currentErrors = errors;
    },

    onLintSuccess(e) {
      this.currentErrors = [];
    },

    getSlotContents() {
      return this.$slots.default ? this.$slots.default.filter(vnode => {
        return vnode.tag.toLowerCase() === 'textarea';
      }).reduce((carry, vnode) => {
        return carry + vnode.children.map(child => {
          return child.text;
        }).join('');
      }, '') : null;
    },

    format(error) {
      return `Line ${error.line},${error.column} :: ${error.code} ${error.msg} (${error.rule})`;
    }

  },

  mounted() {
    this.$nextTick(() => {
      const {
        line,
        ch,
        code
      } = this.$route.query;
      this.$refs.editor.$refs.field.cm.state.lint.errors.forEach(error => {
        if (error.code === code && error.line === line && error.ch === ch) {
          error.focus();
        }
      });
    });
  }

});
// CONCATENATED MODULE: ./src/Components/Editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var Components_Editorvue_type_script_lang_js_ = (Editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Components/Editor.vue?vue&type=style&index=0&lang=scss&
var Editorvue_type_style_index_0_lang_scss_ = __webpack_require__("f64a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Components/Editor.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Components_Editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_Editor = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "2a68":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f64a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a68");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=CapsuleErrorReport.umd.8.js.map