"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Throttle = exports.Debounce = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
var Debounce = function Debounce(fn, t) {
  var delay = t || 500;
  var timer;
  console.log(fn);
  console.log(_typeof(fn));
  return function () {
    var _this = this;

    var args = arguments;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      timer = null;
      fn.apply(_this, args);
    }, delay);
  };
};
/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */


exports.Debounce = Debounce;

var Throttle = function Throttle(fn, t) {
  var last;
  var timer;
  var interval = t || 500;
  return function () {
    var _this2 = this;

    var args = arguments;
    var now = +new Date();

    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(_this2, args);
      }, interval);
    } else {
      last = now;
      fn.apply(this, args);
    }
  };
};

exports.Throttle = Throttle;