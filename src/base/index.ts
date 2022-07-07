/**
 *去除字符串两端的空格
 * @param str
 *
 * @return string
 */


export function trim(str: string): string {
  const reg = /^\s*|\s*$/g;
  return str.replace(reg, "")
}

/**
 * 文本格式化 无数据显示-
 * @param input
 */

export function textFormat(input: string): string {
  if (input === '' || input === 'null' || input === 'undefined') {
    return '-'
  } else {
    return input
  }
}

/**
 * 数字格式化
 * @param number
 * @param format
 */
export function numberFormat(number: number, format?: number): number | string {
  if (isNaN(number)) {
    return '-'
  } else {
    format = format ? format : 2
    return number.toFixed(format)
  }
}

/**
 * 富文本转化为纯文本
 * @param input
 * @param length
 */
export function fullTextFormat(input: string, length = 0): string {
  let str = input.replace(/<[^<>]+>/g, '').replace(/&nbsp;/ig, '').replace(/\s+/g, ' ')
  let result
  if (length < 0) {
    if (str.length > length) {
      result = str.slice(0, length) + "..."
    } else {
      result = str.slice(0, length)
    }
  } else {
    result = str.slice(0, length)
  }

  return result
}

/**
 * 一维数组转化为树结构
 * @param arr 数组
 * @returns 
 */
export function arrToTree(arr: any[]): object[] {
  let parents = arr.filter((item) => item.parent_id === null);
  let children = arr.filter((item) => item.parent_id !== null);
  function translator(parents, children) {
    parents.forEach((parent, vv) => {
      children.forEach((child, vvv) => {
        if (child.parent_id === parent.id) {
          let temp = JSON.parse(JSON.stringify(children));
          temp.splice(vvv, 1);
          parent.children
            ? parent.children.push(child)
            : (parent.children = [child]);
          translator([child], temp);
        }
      });
    });
  }
  translator(parents, children);
  return parents;
}




