// function Fn () {
//   this.num = 10
//   console.log(this)
// }
// let obj = new Fn() // Fn { num: 10 }

// Fn.num = 20
// Fn.prototype.num = 30
// Fn.prototype.method = function () {
//   console.log(this.num)
// }
// // prototype 可以看成一个 {}
// let prototype = Fn.prototype
// let method = Fn.prototype.method

// new Fn().method() // 10
// console.log(prototype.num) // 30
// prototype.method() // 30

// method() // undefined

prototype = {
  num: 30,
  method: function () {
    console.log(this.num)
  }
}

// console.log(prototype.num)
// prototype.method()

let a = prototype.method
a()
// method()  等价于 下面的逻辑

let obj1 = {
  num: 40,
  fn: function () {
    console.log(this.num)
  }
}

let abc = obj1.fn
// obj1.fn()
abc()

// let obj2 = {
//   num: 10,
//   method: function () {
//     console.log(this.num)
//   }
// }
// obj2.method()