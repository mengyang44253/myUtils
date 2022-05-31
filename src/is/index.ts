export function isObject(obj:object):boolean {
  return Object.prototype.toString.call(obj) === "[object Object]";
}