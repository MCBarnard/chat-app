"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_ChatPage_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ContactPill",
  methods: {
    threadSelected: function threadSelected() {
      this.$emit("threadSelected", this.$props.threadId);
    }
  },
  computed: {
    messagePreview: function messagePreview() {
      var max_chars = 40;

      if (this.$props.lastMessage.length >= max_chars) {
        return this.$props.lastMessage.substr(0, max_chars - 4) + " ...";
      } else {
        return this.$props.lastMessage;
      }
    },
    truncatedName: function truncatedName() {
      var max_chars = 20;

      if (this.$props.name.length >= max_chars) {
        return this.$props.name.substr(0, max_chars);
      } else {
        return this.$props.name;
      }
    }
  },
  props: {
    threadId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    lastMessage: {
      type: String,
      required: true
    },
    hasNotification: {
      type: Boolean,
      "default": false
    },
    active: {
      type: Boolean,
      "default": false
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MessageBlock",
  computed: {
    imageUrl: function imageUrl() {
      return (this === null || this === void 0 ? void 0 : this.$store.getters.getImageStorageUrl) + this.$props.pictureName;
    }
  },
  props: {
    message: {
      type: String,
      required: true
    },
    messageId: {
      type: Number,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    owner: {
      type: Boolean,
      required: true
    },
    pictureName: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MessageLoader"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ChatInfoPage",
  components: {
    AlertComponent: _Components_AlertComponent__WEBPACK_IMPORTED_MODULE_1__.default
  },
  mixins: [_Mixins_GlobalMixin__WEBPACK_IMPORTED_MODULE_0__.globalMixin],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_MessageBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MessageBlock */ "./resources/js/Components/MessageBlock.vue");
/* harmony import */ var _Components_LottieComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/LottieComponent */ "./resources/js/Components/LottieComponent.vue");
/* harmony import */ var _Mixins_GlobalMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Mixins/GlobalMixin */ "./resources/js/Mixins/GlobalMixin.js");
/* harmony import */ var _Components_ContactPill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/ContactPill */ "./resources/js/Components/ContactPill.vue");
/* harmony import */ var _Components_MessageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/MessageLoader */ "./resources/js/Components/MessageLoader.vue");
/* harmony import */ var _ChatInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatInfo */ "./resources/js/Pages/ChatInfo.vue");
/* harmony import */ var _Components_AlertComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/AlertComponent */ "./resources/js/Components/AlertComponent.vue");
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ChatPage",
  components: {
    ChatInfoPage: _ChatInfo__WEBPACK_IMPORTED_MODULE_6__.default,
    MessageBlock: _Components_MessageBlock__WEBPACK_IMPORTED_MODULE_1__.default,
    LottieComponent: _Components_LottieComponent__WEBPACK_IMPORTED_MODULE_2__.default,
    ContactPill: _Components_ContactPill__WEBPACK_IMPORTED_MODULE_4__.default,
    MessageLoader: _Components_MessageLoader__WEBPACK_IMPORTED_MODULE_5__.default,
    AlertComponent: _Components_AlertComponent__WEBPACK_IMPORTED_MODULE_7__.default
  },
  mixins: [_Mixins_GlobalMixin__WEBPACK_IMPORTED_MODULE_3__.globalMixin],
  data: function data() {
    return {
      loaded: false,
      newMessage: "",
      searchInput: "",
      activeChatName: "",
      threads: [],
      messages: [],
      activeThreadId: "",
      canSubscribe: false
    };
  },
  watch: {
    storeUserId: function storeUserId(val) {
      if (typeof val !== "undefined" && parseInt(val) > 0) {
        this.canSubscribe = true;
      }
    },
    canSubscribe: function canSubscribe(val) {
      var _this = this;

      if (val) {
        window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_8__.default({
          broadcaster: 'pusher',
          key: '89e04b143c11e803ee52',
          cluster: 'ap2',
          useTLS: true,
          csrfToken: window.options.csrfToken
        });
        window.Echo["private"]('messages.' + this.$store.getters.getUserAccount.user_id).listen('NewMessageEvent', function (data) {
          _this.threads.forEach(function (item) {
            if (data.thread === parseInt(item.threadId)) {
              item.lastMessage = data.message;
            }
          });

          if (parseInt(data.thread) === parseInt(_this.activeThreadId)) {
            _this.pushNewMessage({
              messageId: parseInt(data.id),
              message: data.message,
              user: data.username,
              owner: false,
              picture: data.picture
            }); // Remove notification


            if (!_this.$store.getters.getNewUnreadMessages) {
              _this.$store.dispatch("ACT_NEW_UNREAD_MESSAGES", false);
            }

            _this.$store.dispatch("ACT_NEW_UNREAD_MESSAGE", false);
          } else {
            _this.threads.forEach(function (item) {
              if (data.thread === parseInt(item.threadId)) {
                item.hasNotification = true;
              }
            });
          }
        });
      }
    },
    threadId: function threadId() {
      this.activeThreadId = this.$route.params.threadId;
    },
    threads: function threads(val) {
      var hasNotification = false;
      val.forEach(function (item) {
        if (item.hasNotification) {
          hasNotification = true;
        }
      });

      if (!hasNotification) {
        this.$store.dispatch("ACT_NEW_UNREAD_MESSAGE", false);
      }
    }
  },
  computed: {
    storeUserId: function storeUserId() {
      return this.$store.getters.getUserAccount.user_id;
    },
    showThread: function showThread() {
      return typeof this.activeThreadId !== "undefined";
    },
    activeThread: function activeThread() {
      return parseInt(this.activeThreadId);
    },
    cleanThread: function cleanThread() {
      return false;
    },
    emptyThread: function emptyThread() {
      return this.threads.length === 0;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.activeThreadId = _this2.$route.params.threadId;
              _context.next = 3;
              return _this2.fetchThreads(parseInt(_this2.activeThreadId));

            case 3:
              if (!_this2.showThread) {
                _context.next = 8;
                break;
              }

              _this2.setActiveThread(parseInt(_this2.activeThreadId));

              _context.next = 7;
              return _this2.fetchThreadMessages();

            case 7:
              setTimeout(function () {
                _this2.scrollToBottom();
              }, 300);

            case 8:
              if (_this2.storeUserId) {
                _this2.canSubscribe = true;
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    setActiveThread: function setActiveThread(id) {
      var _this3 = this;

      this.threads.forEach(function (item) {
        if (parseInt(item.threadId) === parseInt(id)) {
          _this3.activeChatName = item.name;
          item.active = true;
        } else {
          item.active = false;
        }
      });
    },
    fetchThreads: function fetchThreads() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/data/threads").then(function (response) {
                  var freshThreads = [];
                  response.data.forEach(function (item) {
                    freshThreads.push({
                      name: item.name,
                      lastMessage: item.last_message,
                      threadId: item.thread_id,
                      hasNotification: item.newMessage,
                      active: false
                    });
                  });
                  _this4.threads = freshThreads;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    threadSelected: function threadSelected(id) {
      var _this5 = this;

      if (parseInt(this.activeThreadId) !== id) {
        this.setActiveThread(id);
        this.$router.push({
          name: 'chat-page',
          params: {
            threadId: id
          }
        });
        this.activeThreadId = id;
        this.fetchThreadMessages();
        setTimeout(function () {
          _this5.scrollToBottom();

          _this5.removeMessageNotification(id);

          _this5.setThreadMessagesRead();
        }, 300);
      }
    },
    removeMessageNotification: function removeMessageNotification(id) {
      this.threads.forEach(function (item) {
        if (item.threadId === id) {
          item.hasNotification = false;
        }
      });
    },
    searchForContact: function searchForContact() {
      console.log(this.searchInput);
    },
    setThreadMessagesRead: function setThreadMessagesRead() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get("/data/messages/".concat(_this6.activeThreadId, "/read"));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    fetchThreadMessages: function fetchThreadMessages() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this7.loaded = false;
                _context4.next = 3;
                return axios.get("/data/messages/".concat(_this7.activeThreadId)).then(function (response) {
                  if (response.status === 200) {
                    _this7.messages = response.data.messages;
                    _this7.hasUnread = response.data.hasUnread;
                    _this7.loaded = true;
                  }
                })["catch"](function (error) {
                  _this7.useAlert(true, error.response, "danger");
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    submitNewMessage: function submitNewMessage() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                message = {
                  message: _this8.newMessage,
                  recipient: _this8.activeThread,
                  new_thread: _this8.cleanThread,
                  owner: true,
                  picture: _this8.$store.getters.getUserAccount.profilePicture,
                  user: _this8.$store.getters.getUserAccount.username
                };
                _context5.next = 3;
                return axios.post("/data/messages/new", message).then(function (response) {
                  if (response.status === 201) {
                    var data = _objectSpread(_objectSpread({}, message), {}, {
                      messageId: response.data.id
                    });

                    _this8.pushNewMessage(data);

                    _this8.newMessage = "";
                  }
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    pushNewMessage: function pushNewMessage(item) {
      var _this9 = this;

      this.messages.push({
        id: item.messageId,
        message: item.message,
        username: item.user,
        owner: item.owner,
        picture: item.picture
      });
      setTimeout(function () {
        _this9.scrollToBottom();
      }, 300);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".contact-pill[data-v-50833bfe] {\n  background: #2c3e4f;\n  width: 100%;\n  max-width: 250px;\n  padding: 10px;\n  cursor: pointer;\n  z-index: 0;\n  transition: all 0.4s ease;\n  position: relative;\n}\n.contact-pill[data-v-50833bfe]:hover {\n  background: #4e83b4;\n  z-index: 1;\n  position: relative;\n}\n.contact-pill + .contact-pill[data-v-50833bfe] {\n  margin-top: 1px;\n}\n.contact-pill h4[data-v-50833bfe] {\n  margin: 0;\n  font-size: 16px;\n  color: #dbdbdb;\n  font-weight: 400;\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */\n}\n.contact-pill p[data-v-50833bfe] {\n  font-size: 12px;\n  margin: 0;\n  color: #b6b6b6;\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */\n}\n.active-pill[data-v-50833bfe] {\n  background: #0a76be;\n  cursor: default;\n}\n.active-pill[data-v-50833bfe]:hover {\n  background: #0a76be;\n}\n.notification[data-v-50833bfe] {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  -webkit-animation: push-data-v-50833bfe 0.8s linear infinite;\n          animation: push-data-v-50833bfe 0.8s linear infinite;\n}\n.notification.blue[data-v-50833bfe] {\n  background: #1fa3b5;\n}\n@-webkit-keyframes push-data-v-50833bfe {\n0% {\n    transform: scale(0.9);\n}\n30% {\n    transform: scale(1);\n}\n60% {\n    transform: scale(1.1);\n}\n90% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(0.9);\n}\n}\n@keyframes push-data-v-50833bfe {\n0% {\n    transform: scale(0.9);\n}\n30% {\n    transform: scale(1);\n}\n60% {\n    transform: scale(1.1);\n}\n90% {\n    transform: scale(1);\n}\n100% {\n    transform: scale(0.9);\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".message-container[data-v-39934991] {\n  display: flex;\n  justify-content: flex-start;\n  padding: 8px;\n  margin-bottom: 28px;\n}\n.message-container.owner[data-v-39934991] {\n  justify-content: flex-end;\n}\n.message-section[data-v-39934991] {\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  position: relative;\n}\n.message-section span[data-v-39934991] {\n  display: flex;\n  margin-left: 30px;\n  word-break: break-word;\n  max-width: 500px;\n  background: #2c3e4f;\n  color: #ffffff;\n  padding: 12px;\n  border-radius: 5px;\n  flex-wrap: wrap;\n}\n.message-section img[data-v-39934991] {\n  position: absolute;\n  left: 0;\n  bottom: -35px;\n  max-width: 50px;\n  max-height: 50px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 50%;\n  border: 5px solid #eff3ff;\n}\n.message-section.owner[data-v-39934991] {\n  justify-content: flex-end;\n  color: #2c3e4f;\n}\n.message-section.owner span[data-v-39934991] {\n  margin-left: unset;\n  margin-right: 30px;\n  background: #ffffff;\n  color: #081840;\n}\n.message-section.owner img[data-v-39934991] {\n  left: unset;\n  right: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".loader-container[data-v-7f104482] {\n  height: 100%;\n  align-items: center;\n  background: #eff3ff;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.loader-container h4[data-v-7f104482] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, calc(-50% - 110px));\n  color: #88a0bb;\n  font-weight: 500;\n}\n.loader[data-v-7f104482] {\n  position: relative;\n}\n@-webkit-keyframes rotating-data-v-7f104482 {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes rotating-data-v-7f104482 {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.loader .dot[data-v-7f104482] {\n  -webkit-animation-name: movement-data-v-7f104482;\n          animation-name: movement-data-v-7f104482;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  height: 10px;\n  position: absolute;\n  top: -10px;\n  transform: translate3d(0, -25px, 0) scale(1);\n  width: 10px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(1) {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n  left: 306.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(1)::before {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(2) {\n  -webkit-animation-delay: -1.2s;\n          animation-delay: -1.2s;\n  left: 306.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(2)::before {\n  -webkit-animation-delay: -1.2s;\n          animation-delay: -1.2s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(3) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n  left: 281.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(3)::before {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(4) {\n  -webkit-animation-delay: -1.4s;\n          animation-delay: -1.4s;\n  left: 281.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(4)::before {\n  -webkit-animation-delay: -1.4s;\n          animation-delay: -1.4s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(5) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n  left: 256.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(5)::before {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(6) {\n  -webkit-animation-delay: -1.6s;\n          animation-delay: -1.6s;\n  left: 256.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(6)::before {\n  -webkit-animation-delay: -1.6s;\n          animation-delay: -1.6s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(7) {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n  left: 231.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(7)::before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(8) {\n  -webkit-animation-delay: -1.8s;\n          animation-delay: -1.8s;\n  left: 231.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(8)::before {\n  -webkit-animation-delay: -1.8s;\n          animation-delay: -1.8s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(9) {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n  left: 206.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(9)::before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(10) {\n  -webkit-animation-delay: -2s;\n          animation-delay: -2s;\n  left: 206.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(10)::before {\n  -webkit-animation-delay: -2s;\n          animation-delay: -2s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(11) {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n  left: 181.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(11)::before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(12) {\n  -webkit-animation-delay: -2.2s;\n          animation-delay: -2.2s;\n  left: 181.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(12)::before {\n  -webkit-animation-delay: -2.2s;\n          animation-delay: -2.2s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(13) {\n  -webkit-animation-delay: -1.3s;\n          animation-delay: -1.3s;\n  left: 156.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(13)::before {\n  -webkit-animation-delay: -1.3s;\n          animation-delay: -1.3s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(14) {\n  -webkit-animation-delay: -2.4s;\n          animation-delay: -2.4s;\n  left: 156.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(14)::before {\n  -webkit-animation-delay: -2.4s;\n          animation-delay: -2.4s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(15) {\n  -webkit-animation-delay: -1.5s;\n          animation-delay: -1.5s;\n  left: 131.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(15)::before {\n  -webkit-animation-delay: -1.5s;\n          animation-delay: -1.5s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(16) {\n  -webkit-animation-delay: -2.6s;\n          animation-delay: -2.6s;\n  left: 131.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(16)::before {\n  -webkit-animation-delay: -2.6s;\n          animation-delay: -2.6s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(17) {\n  -webkit-animation-delay: -1.7s;\n          animation-delay: -1.7s;\n  left: 106.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(17)::before {\n  -webkit-animation-delay: -1.7s;\n          animation-delay: -1.7s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(18) {\n  -webkit-animation-delay: -2.8s;\n          animation-delay: -2.8s;\n  left: 106.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(18)::before {\n  -webkit-animation-delay: -2.8s;\n          animation-delay: -2.8s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(19) {\n  -webkit-animation-delay: -1.9s;\n          animation-delay: -1.9s;\n  left: 81.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(19)::before {\n  -webkit-animation-delay: -1.9s;\n          animation-delay: -1.9s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(20) {\n  -webkit-animation-delay: -3s;\n          animation-delay: -3s;\n  left: 81.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(20)::before {\n  -webkit-animation-delay: -3s;\n          animation-delay: -3s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(21) {\n  -webkit-animation-delay: -2.1s;\n          animation-delay: -2.1s;\n  left: 56.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(21)::before {\n  -webkit-animation-delay: -2.1s;\n          animation-delay: -2.1s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(22) {\n  -webkit-animation-delay: -3.2s;\n          animation-delay: -3.2s;\n  left: 56.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(22)::before {\n  -webkit-animation-delay: -3.2s;\n          animation-delay: -3.2s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(23) {\n  -webkit-animation-delay: -2.3s;\n          animation-delay: -2.3s;\n  left: 31.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(23)::before {\n  -webkit-animation-delay: -2.3s;\n          animation-delay: -2.3s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(24) {\n  -webkit-animation-delay: -3.4s;\n          animation-delay: -3.4s;\n  left: 31.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(24)::before {\n  -webkit-animation-delay: -3.4s;\n          animation-delay: -3.4s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(25) {\n  -webkit-animation-delay: -2.5s;\n          animation-delay: -2.5s;\n  left: 6.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(25)::before {\n  -webkit-animation-delay: -2.5s;\n          animation-delay: -2.5s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(26) {\n  -webkit-animation-delay: -3.6s;\n          animation-delay: -3.6s;\n  left: 6.25px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(26)::before {\n  -webkit-animation-delay: -3.6s;\n          animation-delay: -3.6s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(27) {\n  -webkit-animation-delay: -2.7s;\n          animation-delay: -2.7s;\n  left: -18.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(27)::before {\n  -webkit-animation-delay: -2.7s;\n          animation-delay: -2.7s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(28) {\n  -webkit-animation-delay: -3.8s;\n          animation-delay: -3.8s;\n  left: -18.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(28)::before {\n  -webkit-animation-delay: -3.8s;\n          animation-delay: -3.8s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(29) {\n  -webkit-animation-delay: -2.9s;\n          animation-delay: -2.9s;\n  left: -43.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(29)::before {\n  -webkit-animation-delay: -2.9s;\n          animation-delay: -2.9s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(30) {\n  -webkit-animation-delay: -4s;\n          animation-delay: -4s;\n  left: -43.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(30)::before {\n  -webkit-animation-delay: -4s;\n          animation-delay: -4s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(31) {\n  -webkit-animation-delay: -3.1s;\n          animation-delay: -3.1s;\n  left: -68.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(31)::before {\n  -webkit-animation-delay: -3.1s;\n          animation-delay: -3.1s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(32) {\n  -webkit-animation-delay: -4.2s;\n          animation-delay: -4.2s;\n  left: -68.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(32)::before {\n  -webkit-animation-delay: -4.2s;\n          animation-delay: -4.2s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(33) {\n  -webkit-animation-delay: -3.3s;\n          animation-delay: -3.3s;\n  left: -93.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(33)::before {\n  -webkit-animation-delay: -3.3s;\n          animation-delay: -3.3s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(34) {\n  -webkit-animation-delay: -4.4s;\n          animation-delay: -4.4s;\n  left: -93.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(34)::before {\n  -webkit-animation-delay: -4.4s;\n          animation-delay: -4.4s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(35) {\n  -webkit-animation-delay: -3.5s;\n          animation-delay: -3.5s;\n  left: -118.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(35)::before {\n  -webkit-animation-delay: -3.5s;\n          animation-delay: -3.5s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(36) {\n  -webkit-animation-delay: -4.6s;\n          animation-delay: -4.6s;\n  left: -118.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(36)::before {\n  -webkit-animation-delay: -4.6s;\n          animation-delay: -4.6s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(37) {\n  -webkit-animation-delay: -3.7s;\n          animation-delay: -3.7s;\n  left: -143.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(37)::before {\n  -webkit-animation-delay: -3.7s;\n          animation-delay: -3.7s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(38) {\n  -webkit-animation-delay: -4.8s;\n          animation-delay: -4.8s;\n  left: -143.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(38)::before {\n  -webkit-animation-delay: -4.8s;\n          animation-delay: -4.8s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(39) {\n  -webkit-animation-delay: -3.9s;\n          animation-delay: -3.9s;\n  left: -168.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(39)::before {\n  -webkit-animation-delay: -3.9s;\n          animation-delay: -3.9s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(40) {\n  -webkit-animation-delay: -5s;\n          animation-delay: -5s;\n  left: -168.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(40)::before {\n  -webkit-animation-delay: -5s;\n          animation-delay: -5s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(41) {\n  -webkit-animation-delay: -4.1s;\n          animation-delay: -4.1s;\n  left: -193.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(41)::before {\n  -webkit-animation-delay: -4.1s;\n          animation-delay: -4.1s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(42) {\n  -webkit-animation-delay: -5.2s;\n          animation-delay: -5.2s;\n  left: -193.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(42)::before {\n  -webkit-animation-delay: -5.2s;\n          animation-delay: -5.2s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(43) {\n  -webkit-animation-delay: -4.3s;\n          animation-delay: -4.3s;\n  left: -218.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(43)::before {\n  -webkit-animation-delay: -4.3s;\n          animation-delay: -4.3s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(44) {\n  -webkit-animation-delay: -5.4s;\n          animation-delay: -5.4s;\n  left: -218.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(44)::before {\n  -webkit-animation-delay: -5.4s;\n          animation-delay: -5.4s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(45) {\n  -webkit-animation-delay: -4.5s;\n          animation-delay: -4.5s;\n  left: -243.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(45)::before {\n  -webkit-animation-delay: -4.5s;\n          animation-delay: -4.5s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(46) {\n  -webkit-animation-delay: -5.6s;\n          animation-delay: -5.6s;\n  left: -243.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(46)::before {\n  -webkit-animation-delay: -5.6s;\n          animation-delay: -5.6s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(47) {\n  -webkit-animation-delay: -4.7s;\n          animation-delay: -4.7s;\n  left: -268.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(47)::before {\n  -webkit-animation-delay: -4.7s;\n          animation-delay: -4.7s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(48) {\n  -webkit-animation-delay: -5.8s;\n          animation-delay: -5.8s;\n  left: -268.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(48)::before {\n  -webkit-animation-delay: -5.8s;\n          animation-delay: -5.8s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(49) {\n  -webkit-animation-delay: -4.9s;\n          animation-delay: -4.9s;\n  left: -293.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(49)::before {\n  -webkit-animation-delay: -4.9s;\n          animation-delay: -4.9s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(50) {\n  -webkit-animation-delay: -6s;\n          animation-delay: -6s;\n  left: -293.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(50)::before {\n  -webkit-animation-delay: -6s;\n          animation-delay: -6s;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(51) {\n  -webkit-animation-delay: -5.1s;\n          animation-delay: -5.1s;\n  left: -318.75px;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(51)::before {\n  -webkit-animation-delay: -5.1s;\n          animation-delay: -5.1s;\n}\n.loader .dot[data-v-7f104482]::before {\n  -webkit-animation-name: size-opacity-data-v-7f104482;\n          animation-name: size-opacity-data-v-7f104482;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  background: white;\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n.loader .dot[data-v-7f104482]:nth-of-type(even)::before {\n  background-color: #1fa3b5;\n  box-shadow: inset 0 0 4px #187c89;\n}\n@-webkit-keyframes movement-data-v-7f104482 {\n0% {\n    transform: translate3d(0, -25px, 0);\n    z-index: 0;\n}\n50% {\n    transform: translate3d(0, 25px, 0);\n    z-index: 10;\n}\n100% {\n    transform: translate3d(0, -25px, 0);\n    z-index: -5;\n}\n}\n@keyframes movement-data-v-7f104482 {\n0% {\n    transform: translate3d(0, -25px, 0);\n    z-index: 0;\n}\n50% {\n    transform: translate3d(0, 25px, 0);\n    z-index: 10;\n}\n100% {\n    transform: translate3d(0, -25px, 0);\n    z-index: -5;\n}\n}\n@-webkit-keyframes size-opacity-data-v-7f104482 {\n0% {\n    opacity: 1;\n    transform: scale(1);\n}\n25% {\n    transform: scale(1.5);\n}\n50% {\n    opacity: 1;\n}\n75% {\n    opacity: 0.35;\n    transform: scale(0.5);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n@keyframes size-opacity-data-v-7f104482 {\n0% {\n    opacity: 1;\n    transform: scale(1);\n}\n25% {\n    transform: scale(1.5);\n}\n50% {\n    opacity: 1;\n}\n75% {\n    opacity: 0.35;\n    transform: scale(0.5);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".chat-info-page[data-v-4dbf43cf] {\n  background: #eff3ff;\n  min-height: 100vh;\n}\n.page-header[data-v-4dbf43cf] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 20px;\n  background: #ffffff;\n  box-shadow: 0 0 20px -12px #000000;\n}\n.page-header h1[data-v-4dbf43cf] {\n  font-size: 24px;\n  font-weight: 500;\n  color: #2c3e4f;\n  margin: 0;\n}\n.page-header .buttons-container button[data-v-4dbf43cf] {\n  background: #394f65;\n  padding: 4px 16px;\n  border-radius: 5px;\n  outline: none !important;\n  cursor: pointer;\n  box-shadow: 0 0 6px -3px #2c3e4f;\n}\n.page-header .buttons-container button[data-v-4dbf43cf]:hover {\n  background: #2c3e4f;\n  box-shadow: 0 0 18px -10px #2c3e4f;\n}\n.page-header .buttons-container button svg[data-v-4dbf43cf] {\n  fill: #fff;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".empty-shell[data-v-765e6930] {\n  height: 100vh;\n  background: #eff3ff;\n}\n.chatPage[data-v-765e6930] {\n  font-family: \"Inconsolata\", monospace;\n  background: #eff3ff;\n  min-height: 100%;\n  width: 100%;\n  color: #fafafa;\n}\n.container[data-v-765e6930] {\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  max-width: 500px;\n  flex-wrap: wrap;\n}\n.text[data-v-765e6930] {\n  font-weight: 100;\n  font-size: 28px;\n  color: #fafafa;\n}\n.chat-page-section[data-v-765e6930] {\n  display: flex;\n  height: 100vh;\n}\n.chat-page-section__left[data-v-765e6930] {\n  width: 100%;\n  max-width: 250px;\n  background: #23232bfc;\n}\n.chat-page-section__left form[data-v-765e6930] {\n  display: flex;\n  padding: 20px 7px;\n  margin-bottom: 2rem;\n}\n.chat-page-section__left form input[data-v-765e6930] {\n  width: 100%;\n  padding: 5px;\n  border-radius: 11px 0 0 11px;\n  background: #eff3ff;\n  color: #a1a1a1;\n  outline: none !important;\n}\n.chat-page-section__left form input[data-v-765e6930]:focus, .chat-page-section__left form input[data-v-765e6930]:active {\n  color: #000000;\n}\n.chat-page-section__left form button[data-v-765e6930] {\n  background: #eff3ff;\n  border-radius: 0 11px 11px 0;\n  padding: 10px;\n  outline: none !important;\n  cursor: pointer;\n}\n.chat-page-section__left form button svg[data-v-765e6930] {\n  fill: #a1a1a1;\n}\n.chat-page-section__right[data-v-765e6930] {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.chat-page-section__right .active-thread-user[data-v-765e6930] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n  box-shadow: 0 0 20px -12px #000000;\n  z-index: 2;\n  position: relative;\n  background: #ffffff;\n}\n.chat-page-section__right__messages[data-v-765e6930] {\n  width: 100%;\n  height: calc(100% - 80px);\n  overflow: auto;\n  position: relative;\n}\n.chat-page-section__right .chatPage[data-v-765e6930] {\n  min-height: 100%;\n  position: relative;\n  z-index: 1;\n}\n.chat-page-section__right form[data-v-765e6930] {\n  display: flex;\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 0 20px -12px #000000;\n  z-index: 2;\n}\n.chat-page-section__right form input[data-v-765e6930] {\n  width: 100%;\n  padding: 5px;\n  border-radius: 11px 0 0 11px;\n  background: #f1f1f1;\n  color: #a1a1a1;\n  outline: none !important;\n  transition: all 0.3s ease;\n  border-right: 1px solid #dedede;\n}\n.chat-page-section__right form input[data-v-765e6930]:focus, .chat-page-section__right form input[data-v-765e6930]:active {\n  color: #000000;\n  background: #ffffff;\n}\n.chat-page-section__right form input[data-v-765e6930]:focus +, .chat-page-section__right form input[data-v-765e6930]:active + {\n  background: #ffffff;\n}\n.chat-page-section__right form button[data-v-765e6930] {\n  background: #f1f1f1;\n  border: 2px solid #f1f1f1;\n  outline: none !important;\n  padding: 5px 10px;\n  transition: all 0.3s ease;\n}\n.chat-page-section__right form button svg[data-v-765e6930] {\n  transform: rotate(-45deg);\n  max-width: 20px;\n}\n.chat-page-section__right form input:focus + button[data-v-765e6930], .chat-page-section__right form input:active + button[data-v-765e6930] {\n  background: #ffffff;\n  border: 2px solid #ffffff;\n}\n.chat-page-section__right .loading-container[data-v-765e6930] {\n  background: #eff3ff;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.chat-page-section__right .loading-container__wrapper[data-v-765e6930] {\n  margin: auto;\n  width: 400px;\n  height: 400px;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactPill_vue_vue_type_style_index_0_id_50833bfe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactPill_vue_vue_type_style_index_0_id_50833bfe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactPill_vue_vue_type_style_index_0_id_50833bfe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBlock_vue_vue_type_style_index_0_id_39934991_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBlock_vue_vue_type_style_index_0_id_39934991_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBlock_vue_vue_type_style_index_0_id_39934991_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageLoader_vue_vue_type_style_index_0_id_7f104482_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageLoader_vue_vue_type_style_index_0_id_7f104482_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageLoader_vue_vue_type_style_index_0_id_7f104482_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInfo_vue_vue_type_style_index_0_id_4dbf43cf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInfo_vue_vue_type_style_index_0_id_4dbf43cf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInfo_vue_vue_type_style_index_0_id_4dbf43cf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatPage_vue_vue_type_style_index_0_id_765e6930_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatPage_vue_vue_type_style_index_0_id_765e6930_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatPage_vue_vue_type_style_index_0_id_765e6930_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/Components/ContactPill.vue":
/*!*************************************************!*\
  !*** ./resources/js/Components/ContactPill.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactPill_vue_vue_type_template_id_50833bfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactPill.vue?vue&type=template&id=50833bfe&scoped=true& */ "./resources/js/Components/ContactPill.vue?vue&type=template&id=50833bfe&scoped=true&");
/* harmony import */ var _ContactPill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactPill.vue?vue&type=script&lang=js& */ "./resources/js/Components/ContactPill.vue?vue&type=script&lang=js&");
/* harmony import */ var _ContactPill_vue_vue_type_style_index_0_id_50833bfe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss& */ "./resources/js/Components/ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ContactPill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ContactPill_vue_vue_type_template_id_50833bfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContactPill_vue_vue_type_template_id_50833bfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "50833bfe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/ContactPill.vue"
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

/***/ "./resources/js/Components/MessageBlock.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/MessageBlock.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessageBlock_vue_vue_type_template_id_39934991_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageBlock.vue?vue&type=template&id=39934991&scoped=true& */ "./resources/js/Components/MessageBlock.vue?vue&type=template&id=39934991&scoped=true&");
/* harmony import */ var _MessageBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageBlock.vue?vue&type=script&lang=js& */ "./resources/js/Components/MessageBlock.vue?vue&type=script&lang=js&");
/* harmony import */ var _MessageBlock_vue_vue_type_style_index_0_id_39934991_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss& */ "./resources/js/Components/MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _MessageBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MessageBlock_vue_vue_type_template_id_39934991_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MessageBlock_vue_vue_type_template_id_39934991_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "39934991",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/MessageBlock.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/MessageLoader.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/MessageLoader.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessageLoader_vue_vue_type_template_id_7f104482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageLoader.vue?vue&type=template&id=7f104482&scoped=true& */ "./resources/js/Components/MessageLoader.vue?vue&type=template&id=7f104482&scoped=true&");
/* harmony import */ var _MessageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageLoader.vue?vue&type=script&lang=js& */ "./resources/js/Components/MessageLoader.vue?vue&type=script&lang=js&");
/* harmony import */ var _MessageLoader_vue_vue_type_style_index_0_id_7f104482_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss& */ "./resources/js/Components/MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _MessageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MessageLoader_vue_vue_type_template_id_7f104482_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MessageLoader_vue_vue_type_template_id_7f104482_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7f104482",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/MessageLoader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ChatInfo.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/ChatInfo.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatInfo_vue_vue_type_template_id_4dbf43cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatInfo.vue?vue&type=template&id=4dbf43cf&scoped=true& */ "./resources/js/Pages/ChatInfo.vue?vue&type=template&id=4dbf43cf&scoped=true&");
/* harmony import */ var _ChatInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatInfo.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ChatInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _ChatInfo_vue_vue_type_style_index_0_id_4dbf43cf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss& */ "./resources/js/Pages/ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ChatInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ChatInfo_vue_vue_type_template_id_4dbf43cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatInfo_vue_vue_type_template_id_4dbf43cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4dbf43cf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ChatInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ChatPage.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/ChatPage.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChatPage_vue_vue_type_template_id_765e6930_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatPage.vue?vue&type=template&id=765e6930&scoped=true& */ "./resources/js/Pages/ChatPage.vue?vue&type=template&id=765e6930&scoped=true&");
/* harmony import */ var _ChatPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatPage.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ChatPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _ChatPage_vue_vue_type_style_index_0_id_765e6930_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss& */ "./resources/js/Pages/ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ChatPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ChatPage_vue_vue_type_template_id_765e6930_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ChatPage_vue_vue_type_template_id_765e6930_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "765e6930",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ChatPage.vue"
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

/***/ "./resources/js/Components/ContactPill.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/ContactPill.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactPill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactPill.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactPill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/Components/MessageBlock.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/MessageBlock.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/MessageLoader.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/MessageLoader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/ChatInfo.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/ChatInfo.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/ChatPage.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/ChatPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_style_index_0_id_6faaed8c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/AlertComponent.vue?vue&type=style&index=0&id=6faaed8c&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/Components/ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Components/ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactPill_vue_vue_type_style_index_0_id_50833bfe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=style&index=0&id=50833bfe&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/Components/MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Components/MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBlock_vue_vue_type_style_index_0_id_39934991_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=style&index=0&id=39934991&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/Components/MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Components/MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageLoader_vue_vue_type_style_index_0_id_7f104482_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=style&index=0&id=7f104482&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/Pages/ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInfo_vue_vue_type_style_index_0_id_4dbf43cf_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=style&index=0&id=4dbf43cf&scoped=true&lang=scss&");


/***/ }),

/***/ "./resources/js/Pages/ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatPage_vue_vue_type_style_index_0_id_765e6930_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=style&index=0&id=765e6930&scoped=true&lang=scss&");


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

/***/ "./resources/js/Components/ContactPill.vue?vue&type=template&id=50833bfe&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/ContactPill.vue?vue&type=template&id=50833bfe&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactPill_vue_vue_type_template_id_50833bfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactPill_vue_vue_type_template_id_50833bfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactPill_vue_vue_type_template_id_50833bfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactPill.vue?vue&type=template&id=50833bfe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=template&id=50833bfe&scoped=true&");


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

/***/ "./resources/js/Components/MessageBlock.vue?vue&type=template&id=39934991&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/MessageBlock.vue?vue&type=template&id=39934991&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBlock_vue_vue_type_template_id_39934991_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBlock_vue_vue_type_template_id_39934991_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBlock_vue_vue_type_template_id_39934991_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageBlock.vue?vue&type=template&id=39934991&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=template&id=39934991&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/MessageLoader.vue?vue&type=template&id=7f104482&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/MessageLoader.vue?vue&type=template&id=7f104482&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageLoader_vue_vue_type_template_id_7f104482_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageLoader_vue_vue_type_template_id_7f104482_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageLoader_vue_vue_type_template_id_7f104482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageLoader.vue?vue&type=template&id=7f104482&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=template&id=7f104482&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/ChatInfo.vue?vue&type=template&id=4dbf43cf&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/ChatInfo.vue?vue&type=template&id=4dbf43cf&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInfo_vue_vue_type_template_id_4dbf43cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInfo_vue_vue_type_template_id_4dbf43cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatInfo_vue_vue_type_template_id_4dbf43cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatInfo.vue?vue&type=template&id=4dbf43cf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=template&id=4dbf43cf&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/ChatPage.vue?vue&type=template&id=765e6930&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/ChatPage.vue?vue&type=template&id=765e6930&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatPage_vue_vue_type_template_id_765e6930_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatPage_vue_vue_type_template_id_765e6930_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatPage_vue_vue_type_template_id_765e6930_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ChatPage.vue?vue&type=template&id=765e6930&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=template&id=765e6930&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=template&id=50833bfe&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/ContactPill.vue?vue&type=template&id=50833bfe&scoped=true& ***!
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
  return _c(
    "div",
    {
      staticClass: "contact-pill",
      class: [{ "active-pill": _vm.$props.active }],
      attrs: { id: "contact-pill-" + _vm.$props.threadId },
      on: { click: _vm.threadSelected }
    },
    [
      _c("h4", [_vm._v(_vm._s(_vm.truncatedName))]),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.messagePreview))]),
      _vm._v(" "),
      _vm.$props.hasNotification
        ? _c("div", { staticClass: "notification blue" })
        : _vm._e()
    ]
  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=template&id=39934991&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageBlock.vue?vue&type=template&id=39934991&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "message-container", class: [{ owner: _vm.$props.owner }] },
    [
      _c(
        "section",
        {
          staticClass: "message-section",
          class: [{ owner: _vm.$props.owner }]
        },
        [
          _c("span", [_vm._v(_vm._s(_vm.$props.message))]),
          _vm._v(" "),
          _c("img", { attrs: { src: _vm.imageUrl, alt: "" } })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=template&id=7f104482&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/MessageLoader.vue?vue&type=template&id=7f104482&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "loader-container" }, [
    _c("h4", [_vm._v("Fetching Data")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "loader" },
      _vm._l(50, function(index) {
        return _c("div", { key: index, staticClass: "dot" })
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=template&id=4dbf43cf&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatInfo.vue?vue&type=template&id=4dbf43cf&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "chat-info-page" },
    [
      _c("alert-component", {
        attrs: {
          message: "Coming Soon",
          subtitle:
            "We are currently working on this page, look out for the launch...",
          dismissible: false,
          "slide-in": true
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=template&id=765e6930&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/ChatPage.vue?vue&type=template&id=765e6930&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "empty-shell" },
    [
      _vm.emptyThread
        ? _c("alert-component", {
            attrs: {
              message: "You have no open rooms!",
              subtitle: "Open the contacts page to view start a conversation",
              dismissible: false,
              "slide-in": true
            }
          })
        : _c("section", { staticClass: "chat-page-section" }, [
            _c(
              "div",
              { staticClass: "chat-page-section__left" },
              [
                _c(
                  "form",
                  {
                    attrs: { action: "#" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.searchForContact.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.searchInput,
                          expression: "searchInput"
                        }
                      ],
                      staticClass: "searchbar-input",
                      attrs: { type: "text", placeholder: "Search" },
                      domProps: { value: _vm.searchInput },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.searchInput = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("button", { attrs: { type: "submit" } }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 16 16",
                            width: "16",
                            height: "16"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              d:
                                "M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
                            }
                          })
                        ]
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._l(_vm.threads, function(thread, index) {
                  return _c("contact-pill", {
                    key: index,
                    attrs: {
                      "has-notification": thread.hasNotification,
                      "thread-id": thread.threadId,
                      "last-message": thread.lastMessage,
                      name: thread.name,
                      active: thread.active
                    },
                    on: {
                      threadSelected: function($event) {
                        return _vm.threadSelected($event)
                      }
                    }
                  })
                })
              ],
              2
            ),
            _vm._v(" "),
            _vm.showThread && _vm.loaded && _vm.canSubscribe
              ? _c("div", { staticClass: "chat-page-section__right" }, [
                  _c("div", { staticClass: "active-thread-user" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.activeChatName) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "chat-page-section__right__messages" },
                    [
                      _c(
                        "div",
                        { staticClass: "chatPage" },
                        _vm._l(_vm.messages, function(message, index) {
                          return _c("message-block", {
                            key: index,
                            attrs: {
                              "message-id": message.id,
                              message: message.message,
                              user: message.username,
                              owner: message.owner,
                              pictureName: _vm.pictureOrDefaultPicture(
                                message.picture
                              )
                            }
                          })
                        }),
                        1
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
                          return _vm.submitNewMessage.apply(null, arguments)
                        }
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.newMessage,
                            expression: "newMessage"
                          }
                        ],
                        attrs: {
                          type: "text",
                          placeholder: "Enter your message here..."
                        },
                        domProps: { value: _vm.newMessage },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.newMessage = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("button", [
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
                                  "M1.513 1.96a1.374 1.374 0 011.499-.21l19.335 9.215a1.146 1.146 0 010 2.07L3.012 22.25a1.374 1.374 0 01-1.947-1.46L2.49 12 1.065 3.21a1.374 1.374 0 01.448-1.25zm2.375 10.79l-1.304 8.042L21.031 12 2.584 3.208l1.304 8.042h7.362a.75.75 0 010 1.5H3.888z"
                              }
                            })
                          ]
                        )
                      ])
                    ]
                  )
                ])
              : (_vm.showThread && !_vm.loaded) || !_vm.canSubscribe
              ? _c("div", { staticClass: "chat-page-section__right" })
              : !_vm.showThread
              ? _c(
                  "div",
                  { staticClass: "chat-page-section__right" },
                  [_c("chat-info-page")],
                  1
                )
              : _vm._e()
          ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);