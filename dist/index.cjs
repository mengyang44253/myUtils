'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getCache = function(key) {
  var value = window.localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
};
var setCache = function(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
};
var deleteCache = function(key) {
  window.localStorage.removeItem(key);
};
var clearCache = function() {
  window.localStorage.clear();
};

exports.clearCache = clearCache;
exports.deleteCache = deleteCache;
exports.getCache = getCache;
exports.setCache = setCache;
