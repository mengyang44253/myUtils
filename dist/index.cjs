'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function trim(str) {
  var reg = /^\s*|\s*$/g;
  return str.replace(reg, "");
}
function textFormat(input) {
  if (input === "" || input === "null" || input === "undefined") {
    return "-";
  } else {
    return input;
  }
}
function numberFormat(number, format) {
  if (isNaN(number)) {
    return "-";
  } else {
    format = format ? format : 2;
    return number.toFixed(format);
  }
}
function fullTextFormat(input, length) {
  if (length === void 0) {
    length = 0;
  }
  var str = input.replace(/<[^<>]+>/g, "").replace(/&nbsp;/ig, "").replace(/\s+/g, " ");
  var result;
  if (length < 0) {
    if (str.length > length) {
      result = str.slice(0, length) + "...";
    } else {
      result = str.slice(0, length);
    }
  } else {
    result = str.slice(0, length);
  }
  return result;
}

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

function getFileType(file) {
  var startIndex = file.lastIndexOf(".");
  if (startIndex !== -1) {
    return file.substring(startIndex + 1, file.length);
  } else
    return "";
}
function getFileName(file) {
  return file.replace(/(.*\/)*([^.]+).*/gi, "$2");
}
function getFileSize(fileByte) {
  var fileSizeByte = fileByte;
  var fileSizeMsg = "";
  if (fileSizeByte < 1048576) {
    fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + "KB";
  } else if (fileSizeByte === 1048576) {
    fileSizeMsg = "1MB";
  } else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) {
    fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + "MB";
  } else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824) {
    fileSizeMsg = "1GB";
  } else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) {
    fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  } else {
    fileSizeMsg = ">1TB";
  }
  return fileSizeMsg;
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

exports.clearCache = clearCache;
exports.deleteCache = deleteCache;
exports.fullTextFormat = fullTextFormat;
exports.getCache = getCache;
exports.getFileName = getFileName;
exports.getFileSize = getFileSize;
exports.getFileType = getFileType;
exports.isObject = isObject;
exports.numberFormat = numberFormat;
exports.setCache = setCache;
exports.textFormat = textFormat;
exports.trim = trim;
