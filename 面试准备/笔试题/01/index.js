// 方法一 这个 只能实现两个的 (1)(2) 或 (1, 2)
// function sum () {
//   let num = arguments[0]
//   if (arguments.length === 1) {
//     return (sec) => num + sec
//   } else {
//     let arr = [...arguments]
//     return arr.reduce((pre, next) => pre + next)
//   }
// }

// console.log(sum(1, 2))


// 方法二 
// function sum (a) {
//   let temp = function (b) {
//     return sum(a + b)
//   }
//   temp.toString = function () {
//     return a
//   }
//   return temp
// }
// let result = sum(1)(2)(3)
// console.log(result.toString())

// 方法三 函数柯里化 这个是最好的答案
// let sum = 0
// function add (...args) {
//   for (let i = 0; i < args.length; i++) {
//     sum = sum + args[i]
//   }
//   return sum
// }

// function curSum (fn) {
//   let val = null
//   let temp = function (...newVal) {
//     val = fn.apply(this, newVal)
//     return temp
//   }
//   temp.toString = function () {
//     // sum = 0
//     return val
//   }
//   return temp
// }

// let addCurry = curSum(add)

// console.log(addCurry(1)(2)(3).toString())
