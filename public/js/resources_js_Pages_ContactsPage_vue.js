"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ContactsPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Mixins_GlobalMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mixins/GlobalMixin */ "./resources/js/Mixins/GlobalMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ContactCard",
  mixins: [_Mixins_GlobalMixin__WEBPACK_IMPORTED_MODULE_0__.globalMixin],
  props: {
    connectionId: {
      required: true
    },
    threadId: {
      required: false
    },
    name: {
      type: String,
      required: true
    },
    image: {
      required: true
    }
  },
  computed: {
    showThread: function showThread() {
      return typeof this.$route.params.threadId !== "undefined";
    },
    imageUrl: function imageUrl() {
      return (this === null || this === void 0 ? void 0 : this.$store.getters.getImageStorageUrl) + this.$props.image;
    }
  },
  methods: {
    signalSelected: function signalSelected() {
      if (this.$props.threadId === null || typeof this.$props.threadId === "undefined") {
        this.$emit("start-thread", this.$props.connectionId);
      } else {
        this.$emit("go-to-thread", this.$props.threadId);
      }
    },
    signalBlocked: function signalBlocked() {
      var data = {
        connectionId: this.$props.connectionId,
        threadId: this.$props.threadId
      };
      this.$emit("block-thread", data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/LottieComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/LottieComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LottieComponent",
  data: function data() {
    return {};
  },
  props: {
    jsonUrl: {
      type: String,
      required: true
    },
    background: {
      type: String,
      "default": "transparent"
    },
    speed: {
      type: String
    },
    loop: {
      type: Boolean,
      "default": true
    },
    autoplay: {
      type: Boolean,
      "default": true
    },
    controls: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_LottieComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/LottieComponent */ "./resources/js/Components/LottieComponent.vue");
/* harmony import */ var _Components_ContactCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/ContactCard */ "./resources/js/Components/ContactCard.vue");
/* harmony import */ var _Mixins_GlobalMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Mixins/GlobalMixin */ "./resources/js/Mixins/GlobalMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ContactsPage",
  components: {
    ContactCard: _Components_ContactCard__WEBPACK_IMPORTED_MODULE_1__.default,
    LottieComponent: _Components_LottieComponent__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mixins: [_Mixins_GlobalMixin__WEBPACK_IMPORTED_MODULE_2__.globalMixin],
  data: function data() {
    return {
      showAddNewContact: true,
      stepOne: true,
      newConnection: {
        connectionId: "",
        message: ""
      },
      contacts: [{
        name: "Jacob Ross",
        image: null,
        threadId: null,
        connectionId: 1
      }, {
        name: "Some new User",
        image: null,
        threadId: 1,
        connectionId: 1
      }]
    };
  },
  methods: {
    makeConnectionRequest: function makeConnectionRequest() {},
    startThread: function startThread(id) {
      console.log("Start thread with connection-id: ", id);
    },
    goToThread: function goToThread(id) {
      console.log("Go to thread: ", id);
    },
    blockThread: function blockThread(id) {
      console.log("Block thread: ", id);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contact-card[data-v-6cae7255] {\n  max-width: 300px;\n  min-height: 248px;\n  background: #ffffff;\n  box-shadow: 0 0 58px -48px #000000;\n  border-radius: 5px;\n  border: 1px solid #d8edf8;\n  width: 100%;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n.contact-card__top[data-v-6cae7255] {\n  padding: 25px;\n}\n.contact-card__top img[data-v-6cae7255] {\n  max-width: 100px;\n  max-height: 100px;\n  border-radius: 50%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  display: block;\n  margin: auto;\n}\n.contact-card__top h3[data-v-6cae7255] {\n  font-weight: 500;\n  font-size: 22px;\n  color: #2c3e4f;\n  width: 100%;\n  text-align: center;\n  margin: 5px 0;\n}\n.contact-card__bottom[data-v-6cae7255] {\n  display: flex;\n  justify-content: space-evenly;\n  border-top: 1px solid #f1f1f1;\n  padding: 0;\n}\n.contact-card__bottom button[data-v-6cae7255] {\n  background: #ffffff;\n  width: 100%;\n  text-align: center;\n  cursor: pointer;\n}\n.contact-card__bottom button svg[data-v-6cae7255] {\n  fill: #909fb5;\n  width: 20px;\n  margin: auto;\n}\n.contact-card__bottom button.chat[data-v-6cae7255]:hover {\n  background: #f6f6f6;\n}\n.contact-card__bottom button.chat:hover svg[data-v-6cae7255] {\n  fill: #00d25b;\n}\n.contact-card__bottom button.block[data-v-6cae7255]:hover {\n  background: #f6f6f6;\n}\n.contact-card__bottom button.block:hover svg[data-v-6cae7255] {\n  fill: #d90808;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contacts-page[data-v-5c2f9aab] {\n  background: #eff3ff;\n  min-height: 100vh;\n}\n.page-header[data-v-5c2f9aab] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 20px;\n  background: #ffffff;\n  box-shadow: 0 0 20px -12px #000000;\n}\n.page-header h1[data-v-5c2f9aab] {\n  font-size: 24px;\n  font-weight: 500;\n  color: #2c3e4f;\n  margin: 0;\n}\n.page-header .buttons-container button[data-v-5c2f9aab] {\n  background: #394f65;\n  padding: 4px 16px;\n  border-radius: 5px;\n  outline: none !important;\n  cursor: pointer;\n  box-shadow: 0 0 6px -3px #2c3e4f;\n}\n.page-header .buttons-container button[data-v-5c2f9aab]:hover {\n  background: #2c3e4f;\n  box-shadow: 0 0 18px -10px #2c3e4f;\n}\n.page-header .buttons-container button svg[data-v-5c2f9aab] {\n  fill: #fff;\n}\n.contact-cards[data-v-5c2f9aab] {\n  width: 100%;\n  padding: 20px 0 0 20px;\n  max-height: calc(100vh - 52px);\n  overflow: auto;\n}\n.contact-cards__container[data-v-5c2f9aab] {\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n.add-new-contact-page[data-v-5c2f9aab] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(-50%, -50%);\n  height: 450px;\n  width: 345px;\n  background: #ffffff;\n  box-shadow: 0 0 20px -12px #000000;\n  overflow: hidden;\n  transition: all 0.5s;\n}\n.add-new-contact-page .back-button[data-v-5c2f9aab] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  background: #ffffff00;\n}\n.add-new-contact-page.smaller[data-v-5c2f9aab] {\n  height: 240px;\n}\n.add-new-contact-page.smaller .back-button[data-v-5c2f9aab] {\n  display: none;\n}\n.add-new-contact-page .card-body[data-v-5c2f9aab] {\n  padding: 10px;\n}\n.add-new-contact-page .card-body form[data-v-5c2f9aab] {\n  overflow: hidden;\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n}\n.add-new-contact-page .card-body form textarea[data-v-5c2f9aab] {\n  max-width: 350px;\n  margin: 10px auto;\n  color: #707070;\n  height: 200px;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #d3d3d3;\n  display: block;\n  font-family: sans-serif;\n  padding: 10px;\n  outline: none !important;\n}\n.add-new-contact-page .card-body form .containing-section[data-v-5c2f9aab] {\n  width: 650px;\n  position: relative;\n  display: flex;\n  transition: all 1s ease;\n}\n.add-new-contact-page .card-body form .containing-section.next[data-v-5c2f9aab] {\n  transform: translateX(-325px);\n}\n.add-new-contact-page .card-body form .containing-section .first-section[data-v-5c2f9aab] {\n  width: 325px;\n}\n.add-new-contact-page .card-body form .containing-section .second-section[data-v-5c2f9aab] {\n  width: 325px;\n}\n.add-new-contact-page .card-body .cancel-btn[data-v-5c2f9aab] {\n  cursor: pointer;\n  background: #ffffff00;\n}\n.add-new-contact-page .card-body .cancel-btn[data-v-5c2f9aab]:hover {\n  text-decoration: underline;\n}\n.add-new-contact-page .card-body .submit-btn[data-v-5c2f9aab] {\n  background: #394f65;\n  padding: 9px 14px;\n  border-radius: 5px;\n  outline: none !important;\n  cursor: pointer;\n  box-shadow: 0 0 6px -3px #2c3e4f;\n  color: #ffffff;\n  margin-left: 8px;\n}\n.add-new-contact-page .card-body .submit-btn[data-v-5c2f9aab]:hover {\n  background: #2c3e4f;\n  box-shadow: 0 0 18px -10px #2c3e4f;\n}\n.lottie-component[data-v-5c2f9aab] {\n  max-width: 150px;\n  margin: auto;\n  height: 164px;\n}\n.button-container[data-v-5c2f9aab] {\n  display: flex;\n  justify-content: flex-end;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactCard_vue_vue_type_style_index_0_id_6cae7255_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactCard_vue_vue_type_style_index_0_id_6cae7255_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactCard_vue_vue_type_style_index_0_id_6cae7255_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsPage_vue_vue_type_style_index_0_id_5c2f9aab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsPage_vue_vue_type_style_index_0_id_5c2f9aab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsPage_vue_vue_type_style_index_0_id_5c2f9aab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/Components/ContactCard.vue":
/*!*************************************************!*\
  !*** ./resources/js/Components/ContactCard.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactCard_vue_vue_type_template_id_6cae7255_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactCard.vue?vue&type=template&id=6cae7255&scoped=true& */ "./resources/js/Components/ContactCard.vue?vue&type=template&id=6cae7255&scoped=true&");
/* harmony import */ var _ContactCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactCard.vue?vue&type=script&lang=js& */ "./resources/js/Components/ContactCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _ContactCard_vue_vue_type_style_index_0_id_6cae7255_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss& */ "./resources/js/Components/ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ContactCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ContactCard_vue_vue_type_template_id_6cae7255_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContactCard_vue_vue_type_template_id_6cae7255_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6cae7255",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/ContactCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/LottieComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Components/LottieComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LottieComponent_vue_vue_type_template_id_2e32acba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LottieComponent.vue?vue&type=template&id=2e32acba&scoped=true& */ "./resources/js/Components/LottieComponent.vue?vue&type=template&id=2e32acba&scoped=true&");
/* harmony import */ var _LottieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LottieComponent.vue?vue&type=script&lang=js& */ "./resources/js/Components/LottieComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LottieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LottieComponent_vue_vue_type_template_id_2e32acba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LottieComponent_vue_vue_type_template_id_2e32acba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2e32acba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/LottieComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ContactsPage.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/ContactsPage.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactsPage_vue_vue_type_template_id_5c2f9aab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactsPage.vue?vue&type=template&id=5c2f9aab&scoped=true& */ "./resources/js/Pages/ContactsPage.vue?vue&type=template&id=5c2f9aab&scoped=true&");
/* harmony import */ var _ContactsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactsPage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ContactsPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _ContactsPage_vue_vue_type_style_index_0_id_5c2f9aab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss& */ "./resources/js/Pages/ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ContactsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ContactsPage_vue_vue_type_template_id_5c2f9aab_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContactsPage_vue_vue_type_template_id_5c2f9aab_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5c2f9aab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ContactsPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/ContactCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/ContactCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/LottieComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/LottieComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LottieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LottieComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/LottieComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LottieComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/ContactsPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/ContactsPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactsPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactCard_vue_vue_type_style_index_0_id_6cae7255_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=style&index=0&id=6cae7255&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/Pages/ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsPage_vue_vue_type_style_index_0_id_5c2f9aab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=style&index=0&id=5c2f9aab&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/Components/ContactCard.vue?vue&type=template&id=6cae7255&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/ContactCard.vue?vue&type=template&id=6cae7255&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactCard_vue_vue_type_template_id_6cae7255_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactCard_vue_vue_type_template_id_6cae7255_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactCard_vue_vue_type_template_id_6cae7255_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactCard.vue?vue&type=template&id=6cae7255&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=template&id=6cae7255&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/LottieComponent.vue?vue&type=template&id=2e32acba&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Components/LottieComponent.vue?vue&type=template&id=2e32acba&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LottieComponent_vue_vue_type_template_id_2e32acba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LottieComponent_vue_vue_type_template_id_2e32acba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LottieComponent_vue_vue_type_template_id_2e32acba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LottieComponent.vue?vue&type=template&id=2e32acba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/LottieComponent.vue?vue&type=template&id=2e32acba&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/ContactsPage.vue?vue&type=template&id=5c2f9aab&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/ContactsPage.vue?vue&type=template&id=5c2f9aab&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsPage_vue_vue_type_template_id_5c2f9aab_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsPage_vue_vue_type_template_id_5c2f9aab_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsPage_vue_vue_type_template_id_5c2f9aab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactsPage.vue?vue&type=template&id=5c2f9aab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=template&id=5c2f9aab&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=template&id=6cae7255&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactCard.vue?vue&type=template&id=6cae7255&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "contact-card" }, [
    _c("div", { staticClass: "contact-card__top" }, [
      _c("img", { attrs: { src: _vm.imageUrl, alt: "" } }),
      _vm._v(" "),
      _c("h3", [_vm._v(_vm._s(_vm.$props.name))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "contact-card__bottom" }, [
      _c("button", { staticClass: "chat", on: { click: _vm.signalSelected } }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "50",
              height: "50"
            }
          },
          [
            _c("path", {
              attrs: {
                "fill-rule": "evenodd",
                d:
                  "M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z"
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "block", on: { click: _vm.signalBlocked } }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              width: "50",
              height: "50"
            }
          },
          [
            _c("path", {
              attrs: {
                "fill-rule": "evenodd",
                d:
                  "M1.5 8a6.5 6.5 0 0110.535-5.096l-9.131 9.131A6.472 6.472 0 011.5 8zm2.465 5.096a6.5 6.5 0 009.131-9.131l-9.131 9.131zM8 0a8 8 0 100 16A8 8 0 008 0z"
              }
            })
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/LottieComponent.vue?vue&type=template&id=2e32acba&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/LottieComponent.vue?vue&type=template&id=2e32acba&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("lottie-player", {
        attrs: {
          src: _vm.$props.jsonUrl,
          background: _vm.$props.background,
          speed: _vm.$props.speed,
          loop: _vm.$props.loop,
          controls: _vm.$props.controls,
          autoplay: _vm.$props.autoplay
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=template&id=5c2f9aab&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ContactsPage.vue?vue&type=template&id=5c2f9aab&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "contacts-page" }, [
    _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Contacts")]),
      _vm._v(" "),
      _c("div", { staticClass: "buttons-container" }, [
        _c(
          "button",
          {
            attrs: { title: "Add a New Contact" },
            on: {
              click: function($event) {
                _vm.showAddNewContact = true
              }
            }
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24"
                }
              },
              [
                _c("path", {
                  attrs: {
                    "fill-rule": "evenodd",
                    d:
                      "M19.25 1a.75.75 0 01.75.75V4h2.25a.75.75 0 010 1.5H20v2.25a.75.75 0 01-1.5 0V5.5h-2.25a.75.75 0 010-1.5h2.25V1.75a.75.75 0 01.75-.75zM9 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM4 9.5a5 5 0 117.916 4.062 7.973 7.973 0 015.018 7.166.75.75 0 11-1.499.044 6.469 6.469 0 00-12.932 0 .75.75 0 01-1.499-.044 7.973 7.973 0 015.059-7.181A4.993 4.993 0 014 9.5z"
                  }
                })
              ]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "contact-cards" }, [
      _c(
        "div",
        { staticClass: "contact-cards__container" },
        _vm._l(_vm.contacts, function(item, index) {
          return _c("contact-card", {
            key: index,
            attrs: {
              name: item.name,
              image: _vm.pictureOrDefaultPicture(item.image),
              "thread-id": item.threadId,
              "connection-id": item.connectionId
            },
            on: {
              "start-thread": function($event) {
                return _vm.startThread($event)
              },
              "go-to-thread": function($event) {
                return _vm.goToThread($event)
              },
              "block-thread": function($event) {
                return _vm.blockThread($event)
              }
            }
          })
        }),
        1
      )
    ]),
    _vm._v(" "),
    _vm.showAddNewContact
      ? _c(
          "div",
          {
            staticClass: "add-new-contact-page",
            class: [{ smaller: _vm.stepOne }]
          },
          [
            _c(
              "button",
              {
                staticClass: "back-button",
                on: {
                  click: function($event) {
                    _vm.stepOne = true
                  }
                }
              },
              [_vm._v("\n            back\n        ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("lottie-component", {
                  staticClass: "lottie-component",
                  attrs: {
                    "json-url":
                      "https://assets5.lottiefiles.com/packages/lf20_lKnuQT.json",
                    speed: "0.5"
                  }
                }),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { action: "#" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.makeConnectionRequest.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "containing-section",
                        class: [{ next: !_vm.stepOne }]
                      },
                      [
                        _c("div", { staticClass: "first-section" }, [
                          _c(
                            "button",
                            {
                              staticClass: "submit-btn",
                              on: {
                                click: function($event) {
                                  _vm.stepOne = false
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            Next\n                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "second-section" }, [
                          _c("textarea", {
                            attrs: {
                              placeholder:
                                "To start talking, send them an introduction message, it's just polite!"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "button-container" }, [
                            _c(
                              "button",
                              {
                                staticClass: "cancel-btn",
                                on: {
                                  click: function($event) {
                                    _vm.showAddNewContact = false
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                Cancel\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "submit-btn",
                                attrs: { type: "submit" }
                              },
                              [
                                _vm._v(
                                  "\n                                Send Request\n                            "
                                )
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  ]
                )
              ],
              1
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);