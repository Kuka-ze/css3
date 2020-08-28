"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HomePage = function HomePage() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/HomePage.vue'));
  });
};

var HelloWorld = function HelloWorld() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/HelloWorld.vue'));
  });
};

var Border = function Border() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/border.vue'));
  });
};

var Radius = function Radius() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/radius.vue'));
  });
};

var Background = function Background() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/background.vue'));
  });
};

var FontFace = function FontFace() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/fontFace.vue'));
  });
};

var Gradients = function Gradients() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/Gradients.vue'));
  });
};

var Text = function Text() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/text.vue'));
  });
};

var TwoD = function TwoD() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/2D.vue'));
  });
};

var ThreeD = function ThreeD() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/3d.vue'));
  });
};

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: "/",
    component: HomePage
  }, {
    path: "/HelloWorld",
    component: HelloWorld
  }, {
    path: "/border",
    component: Border
  }, {
    path: "/Radius",
    component: Radius
  }, {
    path: "/Background",
    component: Background
  }, {
    path: "/FontFace",
    component: FontFace
  }, {
    path: "/Gradients",
    component: Gradients
  }, {
    path: "/TwoD",
    component: TwoD
  }, {
    path: "/ThreeD",
    component: ThreeD
  }, {
    path: "/Text",
    component: Text
  }]
});

exports["default"] = _default;