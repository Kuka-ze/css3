"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _index = _interopRequireDefault(require("./route/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import axios from 'axios'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
_vue["default"].config.productionTip = false; // Vue.prototype.axios = axios
// Vue.use(axios)

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _index["default"]
}).$mount('#app');