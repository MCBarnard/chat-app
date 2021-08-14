"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ContactsPage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AlertComponent",
  data: function data() {
    return {
      closed: false,
      loaded: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.loaded = true;
    }, 200);
  },
  computed: {
    success: function success() {
      return this.$props.variant.toLowerCase() === "success";
    },
    warning: function warning() {
      return this.$props.variant.toLowerCase() === "warning";
    },
    danger: function danger() {
      return this.$props.variant.toLowerCase() === "danger";
    },
    info: function info() {
      return this.$props.variant.toLowerCase() === "info";
    }
  },
  props: {
    variant: {
      type: String,
      "default": "info"
    },
    dismissible: {
      type: Boolean,
      "default": true
    },
    heading: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
});

/***/ }),

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
/* harmony import */ var _Components_AlertComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/AlertComponent */ "./resources/js/Components/AlertComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AlertComponent: _Components_AlertComponent__WEBPACK_IMPORTED_MODULE_3__.default,
    ContactCard: _Components_ContactCard__WEBPACK_IMPORTED_MODULE_1__.default,
    LottieComponent: _Components_LottieComponent__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mixins: [_Mixins_GlobalMixin__WEBPACK_IMPORTED_MODULE_2__.globalMixin],
  data: function data() {
    return {
      showAddNewContact: false,
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
    closeModal: function closeModal() {
      this.showAddNewContact = false;
      this.resetStepOne();
      this.newConnection.connectionId = "";
      this.newConnection.message = "";
    },
    resetStepOne: function resetStepOne() {
      this.stepOne = true;
    },
    makeConnectionRequest: function makeConnectionRequest() {
      this.closeModal();
      console.log("sending!");
    },
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".main-component[data-v-6faaed8c] {\n  position: relative;\n  overflow: hidden;\n  max-height: 300px;\n  transform: translateX(-200%);\n}\n.main-component.loaded[data-v-6faaed8c] {\n  transition: all 1s linear;\n  transform: unset;\n}\n.main-component.closed[data-v-6faaed8c] {\n  max-height: 0;\n}\n.main-component.closed .wrapper[data-v-6faaed8c], .main-component.closed .color-circle[data-v-6faaed8c] {\n  transform: translateX(200%);\n}\n.color-circle[data-v-6faaed8c] {\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  z-index: 0;\n  height: calc(100% - 40px);\n  margin: 20px;\n}\n.color-circle.red[data-v-6faaed8c] {\n  background: linear-gradient(to right, red -140%, transparent 25%);\n}\n.color-circle.green[data-v-6faaed8c] {\n  background: linear-gradient(to right, #00da2f -140%, transparent 25%);\n}\n.color-circle.orange[data-v-6faaed8c] {\n  background: linear-gradient(to right, #ff9d02 -140%, transparent 25%);\n}\n.color-circle.blue[data-v-6faaed8c] {\n  background: linear-gradient(to right, #02d1ff -140%, transparent 25%);\n}\n.wrapper[data-v-6faaed8c] {\n  transition: transform 1s ease;\n  max-width: 100%;\n  padding: 5px;\n  margin: 20px;\n  background: rgba(216, 215, 215, 0.05);\n  box-shadow: 0 -1px 19px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.wrapper.red[data-v-6faaed8c] {\n  border: 1px solid red;\n}\n.wrapper.green[data-v-6faaed8c] {\n  border: 1px solid #00da2f;\n}\n.wrapper.orange[data-v-6faaed8c] {\n  border: 1px solid #ff9d02;\n}\n.wrapper.blue[data-v-6faaed8c] {\n  border: 1px solid #02d1ff;\n}\n.wrapper__section-container[data-v-6faaed8c] {\n  display: flex;\n  position: relative;\n}\n.wrapper__section-container button[data-v-6faaed8c] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: transparent;\n  outline: none !important;\n  cursor: pointer;\n  height: 20px;\n}\n.wrapper__section-container button svg[data-v-6faaed8c] {\n  fill: #6e6e6e;\n  width: 20px;\n  height: 20px;\n  transition: all 0.3s ease;\n}\n.wrapper__section-container button:hover svg[data-v-6faaed8c] {\n  fill: #1e344b;\n}\n.wrapper__section-container__left[data-v-6faaed8c] {\n  max-width: 100px;\n  padding: 10px;\n}\n.wrapper__section-container__left svg[data-v-6faaed8c] {\n  width: 25px;\n}\n.wrapper__section-container__left .red-svg[data-v-6faaed8c] {\n  fill: red;\n}\n.wrapper__section-container__left .green-svg[data-v-6faaed8c] {\n  fill: #00da2f;\n}\n.wrapper__section-container__left .orange-svg[data-v-6faaed8c] {\n  fill: #ff9d02;\n}\n.wrapper__section-container__left .blue-svg[data-v-6faaed8c] {\n  fill: #02d1ff;\n}\n.wrapper__section-container__right[data-v-6faaed8c] {\n  width: 100%;\n  padding: 10px;\n}\n.wrapper__section-container__right__heading[data-v-6faaed8c] {\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.wrapper__section-container__right__heading.red[data-v-6faaed8c] {\n  color: red;\n}\n.wrapper__section-container__right__heading.green[data-v-6faaed8c] {\n  color: #00da2f;\n}\n.wrapper__section-container__right__heading.orange[data-v-6faaed8c] {\n  color: #ff9d02;\n}\n.wrapper__section-container__right__heading.blue[data-v-6faaed8c] {\n  color: #02d1ff;\n}\n.wrapper__section-container__right__message[data-v-6faaed8c] {\n  color: #5f7586;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, ".contacts-page[data-v-5c2f9aab] {\n  background: #eff3ff;\n  min-height: 100vh;\n}\n.page-header[data-v-5c2f9aab] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 20px;\n  background: #ffffff;\n  box-shadow: 0 0 20px -12px #000000;\n}\n.page-header h1[data-v-5c2f9aab] {\n  font-size: 24px;\n  font-weight: 500;\n  color: #2c3e4f;\n  margin: 0;\n}\n.page-header .buttons-container button[data-v-5c2f9aab] {\n  background: #394f65;\n  padding: 4px 16px;\n  border-radius: 5px;\n  outline: none !important;\n  cursor: pointer;\n  box-shadow: 0 0 6px -3px #2c3e4f;\n}\n.page-header .buttons-container button[data-v-5c2f9aab]:hover {\n  background: #2c3e4f;\n  box-shadow: 0 0 18px -10px #2c3e4f;\n}\n.page-header .buttons-container button svg[data-v-5c2f9aab] {\n  fill: #fff;\n}\n.contact-cards[data-v-5c2f9aab] {\n  width: 100%;\n  padding: 20px 0 0 20px;\n  max-height: calc(100vh - 52px);\n  overflow: auto;\n}\n.contact-cards__container[data-v-5c2f9aab] {\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n.add-new-contact-page[data-v-5c2f9aab] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  right: 50%;\n  bottom: 50%;\n  transform: translate(-50%, -50%);\n  height: 450px;\n  width: 345px;\n  background: #ffffff;\n  box-shadow: 0 0 20px -12px #000000;\n  overflow: hidden;\n  transition: all 0.5s;\n}\n.add-new-contact-page .back-button[data-v-5c2f9aab] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n  background: #ffffff00;\n  outline: none !important;\n  transition: all 0.3s ease;\n}\n.add-new-contact-page .back-button svg[data-v-5c2f9aab] {\n  fill: #d2d2d2;\n  width: 30px;\n  height: 30px;\n  transition: all 0.8s ease;\n}\n.add-new-contact-page .back-button:hover svg[data-v-5c2f9aab] {\n  fill: #1f3c4b;\n}\n.add-new-contact-page .close-button[data-v-5c2f9aab] {\n  position: absolute;\n  top: 4px;\n  right: 0;\n  background: #ffffff;\n  outline: none !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.add-new-contact-page .close-button svg[data-v-5c2f9aab] {\n  fill: #d2d2d2;\n  width: 20px;\n  height: 20px;\n  transition: all 0.8s ease;\n}\n.add-new-contact-page .close-button:hover svg[data-v-5c2f9aab] {\n  fill: red;\n}\n.add-new-contact-page .hidden-button[data-v-5c2f9aab] {\n  opacity: 0 !important;\n  transition: none !important;\n  pointer-events: none !important;\n}\n.add-new-contact-page.smaller[data-v-5c2f9aab] {\n  height: 220px;\n}\n.add-new-contact-page.smaller .back-button[data-v-5c2f9aab] {\n  display: none;\n}\n.add-new-contact-page .card-body[data-v-5c2f9aab] {\n  padding: 10px;\n}\n.add-new-contact-page .card-body form[data-v-5c2f9aab] {\n  overflow: hidden;\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n}\n.add-new-contact-page .card-body form textarea[data-v-5c2f9aab] {\n  max-width: 350px;\n  margin: 10px auto;\n  color: #707070;\n  height: 200px;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #d3d3d3;\n  display: block;\n  font-family: sans-serif;\n  padding: 10px;\n  outline: none !important;\n}\n.add-new-contact-page .card-body form .containing-section[data-v-5c2f9aab] {\n  width: 650px;\n  position: relative;\n  display: flex;\n  transition: all 1s ease;\n}\n.add-new-contact-page .card-body form .containing-section.next[data-v-5c2f9aab] {\n  transform: translateX(-325px);\n}\n.add-new-contact-page .card-body form .containing-section .first-section[data-v-5c2f9aab] {\n  width: 325px;\n  display: flex;\n  height: 34px;\n}\n.add-new-contact-page .card-body form .containing-section .first-section input[data-v-5c2f9aab] {\n  width: 100%;\n  outline: none !important;\n  border-left: 1px solid #d4d4d4;\n  border-top: 1px solid #d4d4d4;\n  border-bottom: 1px solid #d4d4d4;\n  background: #eff3ff;\n  color: #7c7c7c;\n  border-radius: 5px 0 0 5px;\n  padding: 5px;\n}\n.add-new-contact-page .card-body form .containing-section .first-section input[data-v-5c2f9aab]:focus, .add-new-contact-page .card-body form .containing-section .first-section input[data-v-5c2f9aab]:active {\n  color: #000000;\n}\n.add-new-contact-page .card-body form .containing-section .first-section button[data-v-5c2f9aab] {\n  margin: 0;\n  border-radius: 0 5px 5px 0;\n  transition: all 0.3s ease;\n}\n.add-new-contact-page .card-body form .containing-section .second-section[data-v-5c2f9aab] {\n  width: 325px;\n}\n.add-new-contact-page .card-body form .containing-section .hidden[data-v-5c2f9aab] {\n  opacity: 0 !important;\n  transition: none !important;\n  pointer-events: none !important;\n}\n.add-new-contact-page .card-body .cancel-btn[data-v-5c2f9aab] {\n  cursor: pointer;\n  background: #ffffff00;\n}\n.add-new-contact-page .card-body .cancel-btn[data-v-5c2f9aab]:hover {\n  text-decoration: underline;\n}\n.add-new-contact-page .card-body .submit-btn[data-v-5c2f9aab] {\n  background: #394f65;\n  padding: 9px 14px;\n  border-radius: 5px;\n  outline: none !important;\n  cursor: pointer;\n  box-shadow: 0 0 6px -3px #2c3e4f;\n  color: #ffffff;\n  margin-left: 8px;\n}\n.add-new-contact-page .card-body .submit-btn[data-v-5c2f9aab]:hover {\n  background: #2c3e4f;\n  box-shadow: 0 0 18px -10px #2c3e4f;\n}\n.lottie-component[data-v-5c2f9aab] {\n  max-width: 150px;\n  margin: auto;\n  height: 164px;\n}\n.button-container[data-v-5c2f9aab] {\n  display: flex;\n  justify-content: flex-end;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_style_index_0_id_6faaed8c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_style_index_0_id_6faaed8c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_style_index_0_id_6faaed8c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/Components/AlertComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/Components/AlertComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertComponent_vue_vue_type_template_id_6faaed8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertComponent.vue?vue&type=template&id=6faaed8c&scoped=true& */ "./resources/js/Components/AlertComponent.vue?vue&type=template&id=6faaed8c&scoped=true&");
/* harmony import */ var _AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertComponent.vue?vue&type=script&lang=js& */ "./resources/js/Components/AlertComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _AlertComponent_vue_vue_type_style_index_0_id_6faaed8c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss& */ "./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AlertComponent_vue_vue_type_template_id_6faaed8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlertComponent_vue_vue_type_template_id_6faaed8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6faaed8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/AlertComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/Components/AlertComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/AlertComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_style_index_0_id_6faaed8c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss&");


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

/***/ "./resources/js/Components/AlertComponent.vue?vue&type=template&id=6faaed8c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/AlertComponent.vue?vue&type=template&id=6faaed8c&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_template_id_6faaed8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_template_id_6faaed8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_template_id_6faaed8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertComponent.vue?vue&type=template&id=6faaed8c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=template&id=6faaed8c&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=template&id=6faaed8c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=template&id=6faaed8c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "main-component",
      class: [{ closed: _vm.closed }, { loaded: _vm.loaded }]
    },
    [
      _c("div", {
        staticClass: "color-circle",
        class: [
          { green: _vm.success },
          { orange: _vm.warning },
          { red: _vm.danger },
          { blue: _vm.info }
        ]
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "wrapper",
          class: [
            { green: _vm.success },
            { orange: _vm.warning },
            { red: _vm.danger },
            { blue: _vm.info }
          ]
        },
        [
          _c("div", { staticClass: "wrapper__section-container" }, [
            _vm.dismissible
              ? _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        _vm.closed = true
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
                          width: "50",
                          height: "50"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M2.75 6a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75zM6 11.75a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm4 4.938a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"
                          }
                        })
                      ]
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "wrapper__section-container__left" }, [
              _vm.success
                ? _c("div", { staticClass: "green-svg" }, [
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
                              "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.28-2.72a.75.75 0 00-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l6.5-6.5z"
                          }
                        })
                      ]
                    )
                  ])
                : _vm.warning
                ? _c("div", { staticClass: "orange-svg" }, [
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
                            d:
                              "M13 15.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-8.25a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0v-4.5z"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            d:
                              "M11.46.637a1.75 1.75 0 011.08 0l8.25 2.675A1.75 1.75 0 0122 4.976V10c0 6.19-3.77 10.705-9.401 12.83a1.699 1.699 0 01-1.198 0C5.771 20.704 2 16.19 2 10V4.976c0-.76.49-1.43 1.21-1.664L11.46.637zm.617 1.426a.25.25 0 00-.154 0L3.673 4.74a.249.249 0 00-.173.237V10c0 5.461 3.28 9.483 8.43 11.426a.2.2 0 00.14 0C17.22 19.483 20.5 15.46 20.5 10V4.976a.25.25 0 00-.173-.237l-8.25-2.676z"
                          }
                        })
                      ]
                    )
                  ])
                : _vm.danger
                ? _c("div", { staticClass: "red-svg" }, [
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
                              "M3.404 12.596a6.5 6.5 0 119.192-9.192 6.5 6.5 0 01-9.192 9.192zM2.344 2.343a8 8 0 1011.313 11.314A8 8 0 002.343 2.343zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"
                          }
                        })
                      ]
                    )
                  ])
                : _c("div", { staticClass: "blue-svg" }, [
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
                              "M6.5.75a.75.75 0 00-1.5 0V2H3.75A1.75 1.75 0 002 3.75V5H.75a.75.75 0 000 1.5H2v3H.75a.75.75 0 000 1.5H2v1.25c0 .966.784 1.75 1.75 1.75H5v1.25a.75.75 0 001.5 0V14h3v1.25a.75.75 0 001.5 0V14h1.25A1.75 1.75 0 0014 12.25V11h1.25a.75.75 0 000-1.5H14v-3h1.25a.75.75 0 000-1.5H14V3.75A1.75 1.75 0 0012.25 2H11V.75a.75.75 0 00-1.5 0V2h-3V.75zm5.75 11.75h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v8.5a.25.25 0 01-.25.25zM5.75 5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5zm.75 4.5v-3h3v3h-3z"
                          }
                        })
                      ]
                    )
                  ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "wrapper__section-container__right" }, [
              _c(
                "div",
                {
                  staticClass: "wrapper__section-container__right__heading",
                  class: [
                    { green: _vm.success },
                    { orange: _vm.warning },
                    { red: _vm.danger },
                    { blue: _vm.info }
                  ]
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.heading) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "wrapper__section-container__right__message" },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.body) +
                      "\n                "
                  )
                ]
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



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
  return _c(
    "div",
    { staticClass: "contacts-page" },
    [
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
      _vm.alert.show
        ? _c("alert-component", {
            attrs: {
              heading: _vm.alert.heading,
              body: _vm.alert.message,
              variant: _vm.alert.variant,
              dismissible: _vm.alert.dismissible
            }
          })
        : _vm._e(),
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
                  class: [{ "hidden-button": _vm.stepOne }],
                  on: { click: _vm.resetStepOne }
                },
                [
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
                            "M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "close-button",
                  class: [{ "hidden-button": !_vm.stepOne }],
                  on: { click: _vm.closeModal }
                },
                [
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
                            "M3.404 12.596a6.5 6.5 0 119.192-9.192 6.5 6.5 0 01-9.192 9.192zM2.344 2.343a8 8 0 1011.313 11.314A8 8 0 002.343 2.343zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"
                        }
                      })
                    ]
                  )
                ]
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
                          _c(
                            "div",
                            {
                              staticClass: "first-section",
                              class: [{ hidden: !_vm.stepOne }]
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.newConnection.connectionId,
                                    expression: "newConnection.connectionId"
                                  }
                                ],
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter a connection id"
                                },
                                domProps: {
                                  value: _vm.newConnection.connectionId
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.newConnection,
                                      "connectionId",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
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
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "second-section",
                              class: [{ hidden: _vm.stepOne }]
                            },
                            [
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
                                    on: { click: _vm.closeModal }
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
                                    on: { click: _vm.makeConnectionRequest }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Send Request\n                            "
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);