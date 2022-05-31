/**
 * 是否是一个对象
 * @param obj
 */
export function isObject(obj:object):boolean {
  return Object.prototype.toString.call(obj) === "[object Object]";
}


