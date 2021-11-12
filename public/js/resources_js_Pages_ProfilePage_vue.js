"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ProfilePage_vue"],{

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
    message: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    slideIn: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Mixins_GlobalMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mixins/GlobalMixin */ "./resources/js/Mixins/GlobalMixin.js");
/* harmony import */ var _Components_AlertComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/AlertComponent */ "./resources/js/Components/AlertComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProfilePage",
  components: {
    AlertComponent: _Components_AlertComponent__WEBPACK_IMPORTED_MODULE_1__.default
  },
  mixins: [_Mixins_GlobalMixin__WEBPACK_IMPORTED_MODULE_0__.globalMixin],
  data: function data() {
    return {
      profileData: {
        picture: ""
      },
      hiddenText: 'Copy',
      savedProfilePicture: false
    };
  },
  computed: {
    hiddenTextComputed: function hiddenTextComputed() {
      return this.hiddenText;
    },
    account: function account() {
      return this.$store.getters.getUserAccount;
    },
    username: function username() {
      return this.account.username;
    },
    email: function email() {
      return this.account.email;
    },
    connectionId: function connectionId() {
      return this.account.connectionId;
    },
    profilePicture: function profilePicture() {
      return (this === null || this === void 0 ? void 0 : this.$store.getters.getImageStorageUrl) + this.pictureOrDefaultPicture(this.account.profilePicture);
    }
  },
  methods: {
    resetCopyText: function resetCopyText() {
      this.hiddenText = 'Copy';
    },
    copyConnectionId: function copyConnectionId() {
      this.copyStringToClipboard(this.connectionId);
      this.hiddenText = 'Copied!';
    },
    submitProfile: function submitProfile() {
      var _this = this;

      var formData = new FormData();
      formData.append('image_file', this.profileData.picture);
      formData.append('image_name', "random_image");
      axios.post("profile-data/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        _this.$store.dispatch("ACT_ACCOUNT_PICTURE", response.data);

        _this.savedProfilePicture = true;
      })["catch"](function (error) {
        console.error(error.response.data);
      });
    },
    profilePictureSelected: function profilePictureSelected() {
      this.profileData.picture = this.$refs.profile_image.files[0];

      if (FileReader) {
        var fr = new FileReader();

        fr.onload = function () {
          document.getElementById('profile_preview').src = fr.result;
        };

        fr.readAsDataURL(this.$refs.profile_image.files[0]);
      }
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
___CSS_LOADER_EXPORT___.push([module.id, ".main-component[data-v-6faaed8c] {\n  position: relative;\n  overflow: hidden;\n  max-height: 300px;\n}\n.main-component.slide-in[data-v-6faaed8c] {\n  transform: translateX(-200%);\n}\n.main-component.slide-in.loaded[data-v-6faaed8c] {\n  transition: all 1s linear;\n  transform: unset;\n}\n.main-component.closed[data-v-6faaed8c] {\n  max-height: 0;\n}\n.main-component.closed .wrapper[data-v-6faaed8c], .main-component.closed .color-circle[data-v-6faaed8c] {\n  transform: translateX(200%);\n}\n.color-circle[data-v-6faaed8c] {\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  z-index: 0;\n  height: calc(100% - 40px);\n  margin: 20px;\n}\n.color-circle.red[data-v-6faaed8c] {\n  background: linear-gradient(to right, red -140%, transparent 25%);\n}\n.color-circle.green[data-v-6faaed8c] {\n  background: linear-gradient(to right, #00da2f -140%, transparent 25%);\n}\n.color-circle.orange[data-v-6faaed8c] {\n  background: linear-gradient(to right, #ff9d02 -140%, transparent 25%);\n}\n.color-circle.blue[data-v-6faaed8c] {\n  background: linear-gradient(to right, #02d1ff -140%, transparent 25%);\n}\n.wrapper[data-v-6faaed8c] {\n  transition: transform 1s ease;\n  max-width: 100%;\n  padding: 5px;\n  margin: 20px;\n  background: rgba(216, 215, 215, 0.05);\n  box-shadow: 0 -1px 19px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.wrapper.red[data-v-6faaed8c] {\n  border: 1px solid red;\n}\n.wrapper.green[data-v-6faaed8c] {\n  border: 1px solid #00da2f;\n}\n.wrapper.orange[data-v-6faaed8c] {\n  border: 1px solid #ff9d02;\n}\n.wrapper.blue[data-v-6faaed8c] {\n  border: 1px solid #02d1ff;\n}\n.wrapper__section-container[data-v-6faaed8c] {\n  display: flex;\n  position: relative;\n}\n.wrapper__section-container button[data-v-6faaed8c] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: transparent;\n  outline: none !important;\n  cursor: pointer;\n  height: 20px;\n}\n.wrapper__section-container button svg[data-v-6faaed8c] {\n  fill: #6e6e6e;\n  width: 20px;\n  height: 20px;\n  transition: all 0.3s ease;\n}\n.wrapper__section-container button:hover svg[data-v-6faaed8c] {\n  fill: #1e344b;\n}\n.wrapper__section-container__left[data-v-6faaed8c] {\n  max-width: 100px;\n  padding: 10px;\n}\n.wrapper__section-container__left svg[data-v-6faaed8c] {\n  width: 25px;\n}\n.wrapper__section-container__left .red-svg[data-v-6faaed8c] {\n  fill: red;\n}\n.wrapper__section-container__left .green-svg[data-v-6faaed8c] {\n  fill: #00da2f;\n}\n.wrapper__section-container__left .orange-svg[data-v-6faaed8c] {\n  fill: #ff9d02;\n}\n.wrapper__section-container__left .blue-svg[data-v-6faaed8c] {\n  fill: #02d1ff;\n}\n.wrapper__section-container__right[data-v-6faaed8c] {\n  width: 100%;\n  padding: 10px;\n}\n.wrapper__section-container__right__heading[data-v-6faaed8c] {\n  font-weight: 500;\n  text-transform: capitalize;\n}\n.wrapper__section-container__right__heading.red[data-v-6faaed8c] {\n  color: red;\n}\n.wrapper__section-container__right__heading.green[data-v-6faaed8c] {\n  color: #00da2f;\n}\n.wrapper__section-container__right__heading.orange[data-v-6faaed8c] {\n  color: #ff9d02;\n}\n.wrapper__section-container__right__heading.blue[data-v-6faaed8c] {\n  color: #02d1ff;\n}\n.wrapper__section-container__right__message[data-v-6faaed8c] {\n  color: #5f7586;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".profile-page[data-v-fc86de82] {\n  background: #eff3ff;\n  min-height: 100vh;\n}\n.profile-page .dormant[data-v-fc86de82] {\n  display: none;\n}\n.profile-page .show[data-v-fc86de82] {\n  display: block;\n}\n.profile-page__container[data-v-fc86de82] {\n  max-width: 992px;\n  margin: 20px auto;\n  background: #ffffff;\n  padding: 20px;\n}\n.profile-page__container__profile-picture[data-v-fc86de82] {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  position: relative;\n  margin-bottom: 32px;\n}\n.profile-page__container__profile-picture[data-v-fc86de82]:after {\n  content: \"\";\n  width: 100%;\n  max-width: 685px;\n  height: 5px;\n  border-radius: 5px;\n  background: #0f0f0f;\n  position: absolute;\n  bottom: -25px;\n}\n.profile-page__container__profile-picture form[data-v-fc86de82] {\n  display: flex;\n  padding: 0 0 0 40px;\n  flex-direction: column;\n  justify-content: center;\n}\n.profile-page__container__profile-picture label[data-v-fc86de82] {\n  display: block;\n  max-width: 200px;\n  margin: 0 auto 15px;\n  text-align: center;\n  word-wrap: break-word;\n  color: #1a4756;\n  background: #c7d6e3;\n  padding: 10px 15px;\n  font-weight: 400;\n  font-family: \"Open Sans\", sans-serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.profile-page__container__profile-picture label[data-v-fc86de82]:hover {\n  background: #bccbdb;\n}\n.profile-page__container__profile-picture input[data-v-fc86de82] {\n  display: none;\n}\n.profile-page__container__profile-picture button[data-v-fc86de82] {\n  display: block;\n  max-width: 200px;\n  margin: 0 0 15px auto;\n  text-align: center;\n  word-wrap: break-word;\n  color: #1a4756;\n  background: #ffffff;\n  border: 1px solid #c7d6e3;\n  padding: 10px 15px;\n  font-weight: 400;\n  font-family: \"Open Sans\", sans-serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.profile-page__container__profile-picture button[data-v-fc86de82]:hover {\n  background: #bccbdb;\n}\n.profile-page__container__profile-picture__inner[data-v-fc86de82] {\n  border-radius: 50%;\n  width: 170px;\n  height: 170px;\n  overflow: hidden;\n  margin: auto;\n}\n.profile-page__container__profile-picture__inner img[data-v-fc86de82] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.profile-page__container__profile-picture__outer[data-v-fc86de82] {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n  background: #ffffff;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  box-shadow: -20px -18px 20px -12px #efefef, 17px 20px 20px -12px #d7d7d7;\n}\n.profile-page__container__details[data-v-fc86de82] {\n  font-family: \"Open Sans\", sans-serif;\n  max-width: 685px;\n  width: 100%;\n  margin: 50px auto auto auto;\n}\n.profile-page__container__details h3[data-v-fc86de82] {\n  font-weight: 600;\n}\n.profile-page__container__details #card-content[data-v-fc86de82] {\n  display: block;\n}\n.profile-page__container__details #card-content h2[data-v-fc86de82], .profile-page__container__details #card-content h4[data-v-fc86de82] {\n  margin: 0 0 5px 0;\n}\n.profile-page__container__details #card-content h4[data-v-fc86de82] {\n  display: inline-block;\n  width: 50%;\n  float: left;\n  line-height: 42px;\n  height: 42px;\n}\n.profile-page__container__details #card-content table[data-v-fc86de82], .profile-page__container__details #card-content tr[data-v-fc86de82], .profile-page__container__details #card-content td[data-v-fc86de82] {\n  display: block;\n  font-size: 16px;\n}\n.profile-page__container__details #card-content td[data-v-fc86de82] {\n  padding: 7px 10px 7px 10px;\n  border-top: 1px solid #e3e3e3;\n  line-height: 42px;\n}\n.profile-page__container__details #card-content td > address[data-v-fc86de82] {\n  line-height: initial;\n}\n.profile-page__container__details #card-content td[data-v-fc86de82]:empty {\n  display: none;\n}\n.profile-page__container__details #card-content .connection-id[data-v-fc86de82] {\n  cursor: pointer;\n  font-weight: 600;\n  position: relative;\n}\n.profile-page__container__details #card-content .connection-id .hidden-text[data-v-fc86de82] {\n  position: absolute;\n  top: -45px;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 10px;\n  background: #f0f0f0;\n  border: 1px solid #f5f5f5;\n  text-align: center;\n  font-weight: 400;\n  font-size: 14px;\n  opacity: 0;\n  border-radius: 4px;\n  transition: opacity 0.6s ease;\n  line-height: 14px;\n}\n.profile-page__container__details #card-content .connection-id:hover .hidden-text[data-v-fc86de82] {\n  opacity: 0.8;\n}\n.page-header[data-v-fc86de82] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 20px;\n  background: #ffffff;\n  box-shadow: 0 0 20px -12px #000000;\n}\n.page-header h1[data-v-fc86de82] {\n  font-size: 24px;\n  font-weight: 500;\n  color: #2c3e4f;\n  margin: 0;\n}\n.page-header .buttons-container button[data-v-fc86de82] {\n  background: #394f65;\n  padding: 4px 16px;\n  border-radius: 5px;\n  outline: none !important;\n  cursor: pointer;\n  box-shadow: 0 0 6px -3px #2c3e4f;\n}\n.page-header .buttons-container button[data-v-fc86de82]:hover {\n  background: #2c3e4f;\n  box-shadow: 0 0 18px -10px #2c3e4f;\n}\n.page-header .buttons-container button svg[data-v-fc86de82] {\n  fill: #fff;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_id_fc86de82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_id_fc86de82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_id_fc86de82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/Pages/ProfilePage.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/ProfilePage.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfilePage_vue_vue_type_template_id_fc86de82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=template&id=fc86de82&scoped=true& */ "./resources/js/Pages/ProfilePage.vue?vue&type=template&id=fc86de82&scoped=true&");
/* harmony import */ var _ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ProfilePage.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProfilePage_vue_vue_type_style_index_0_id_fc86de82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss& */ "./resources/js/Pages/ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProfilePage_vue_vue_type_template_id_fc86de82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfilePage_vue_vue_type_template_id_fc86de82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fc86de82",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ProfilePage.vue"
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

/***/ "./resources/js/Pages/ProfilePage.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/ProfilePage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_style_index_0_id_6faaed8c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/Pages/ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_style_index_0_id_fc86de82_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=style&index=0&id=fc86de82&scoped=true&lang=scss&");


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

/***/ "./resources/js/Pages/ProfilePage.vue?vue&type=template&id=fc86de82&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/ProfilePage.vue?vue&type=template&id=fc86de82&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_fc86de82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_fc86de82_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_fc86de82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfilePage.vue?vue&type=template&id=fc86de82&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=template&id=fc86de82&scoped=true&");


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
      class: [
        { closed: _vm.closed },
        { "slide-in": _vm.$props.slideIn },
        { loaded: _vm.loaded }
      ]
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
                      _vm._s(_vm.message) +
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
                      _vm._s(_vm.subtitle) +
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=template&id=fc86de82&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ProfilePage.vue?vue&type=template&id=fc86de82&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "profile-page" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "profile-page__container" },
      [
        _c("alert-component", {
          attrs: {
            message: "This looks weird right now...",
            subtitle: "We are currently developing this section",
            variant: "info",
            dismissible: true,
            "slide-in": true
          }
        }),
        _vm._v(" "),
        _c("alert-component", {
          staticClass: "dormant",
          class: [{ show: _vm.savedProfilePicture }],
          attrs: {
            message: "Successfully saved!",
            subtitle: "Your profile picture has been saved.",
            variant: "success",
            dismissible: true,
            "slide-in": _vm.savedProfilePicture
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "profile-page__container__profile-picture" }, [
          _c(
            "div",
            { staticClass: "profile-page__container__profile-picture__outer" },
            [
              _c(
                "div",
                {
                  staticClass: "profile-page__container__profile-picture__inner"
                },
                [
                  _c("img", {
                    ref: "profile_preview",
                    attrs: {
                      src: this.profilePicture,
                      id: "profile_preview",
                      alt: "User profile picture"
                    }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "form",
            {
              attrs: { action: "#" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitProfile.apply(null, arguments)
                }
              }
            },
            [
              _c("label", { attrs: { for: "profile-picture-input" } }, [
                _vm._v(
                  "\n                    Change profile picture\n                "
                )
              ]),
              _vm._v(" "),
              _c("input", {
                ref: "profile_image",
                attrs: {
                  id: "profile-picture-input",
                  type: "file",
                  placeholder: "Submit an Image"
                },
                on: { change: _vm.profilePictureSelected }
              }),
              _vm._v(" "),
              _c("button", { attrs: { type: "submit" } }, [
                _vm._v("Save Picture")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "profile-page__container__details" }, [
          _c("div", { attrs: { id: "card-content" } }, [
            _c("h2", [_vm._v("Account Details")]),
            _vm._v(" "),
            _c("table", [
              _c("tr", [
                _c("td", [
                  _c("h4", [_vm._v("Full Name")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.username))])
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("h4", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.email))])
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [
                  _c("h4", [_vm._v("Connection ID")]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "connection-id",
                      on: {
                        mouseover: _vm.resetCopyText,
                        click: _vm.copyConnectionId
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.connectionId) +
                          "\n                                "
                      ),
                      _c("span", { staticClass: "hidden-text" }, [
                        _vm._v(_vm._s(_vm.hiddenTextComputed))
                      ])
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Profile")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);