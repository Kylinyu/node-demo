"use strict";

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

require("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var func = function func(haha) {
  return haha;
};

function addAll() {
  return (0, _from2.default)(arguments).reduce(function (a, b) {
    return a + b;
  });
}