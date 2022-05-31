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

export { clearCache, deleteCache, getCache, setCache };
