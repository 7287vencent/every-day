/**
 * 1.如果是基本数据类型，直接返回
 * 2.如果是 RegExp 或者 Date 类型，返回对应类型
 * 3.如果是复杂数据类型，递归。
 * 4.考虑循环引用的问题
 */

function deepClone (obj, hash = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj) // 正则
  if (obj instanceof Date) return new Date(obj) // 时间

  if (obj === null || typeof obj !== 'object') {
    // 基础数据类型
    return obj
  }
  // 先判断映射里面有没有这个obj
  if (hash.has(obj)) {
    return hash.get(obj) // 直接返回
  }

  /**
   * 如果 obj 是 数组，那么 obj.constructor 是 [Function: Array]
   * 如果 obj 是 对象，那么 obj.constructor 是 [Function: Object]
   */
  let t = new obj.constructor()
  // console.log("=>>", obj, t)
  hash.set(obj, t)
  for (let key in obj) {
    // 递归
    if (obj.hasOwnProperty(key)) { // 先检查是否是自身属性
      t[key] = deepClone(obj[key], hash)
    }
  }
  return t
}


let obj = {
  '1': 1,
  fn: function () {
    console.log(2)
  },
  key: {
    a: 'a'
  },
  arr: [3, 4]
}

let obj2 = deepClone(obj)

console.log(obj2)