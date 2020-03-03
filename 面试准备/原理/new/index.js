function _new () {
  let target = {}; //创建的新对象
  //第一个参数是构造函数
  let [constructor, ...args] = [...arguments];
  //执行[[原型]]连接;target 是 constructor 的实例
  target.__proto__ = constructor.prototype;
  //执行构造函数，将属性或方法添加到创建的空对象上
  let result = constructor.apply(target, args);
  if (result && (typeof (result) == "object" || typeof (result) == "function")) {
    //如果构造函数执行的结构返回的是一个对象，那么返回这个对象
    return result;
  }
  //如果构造函数返回的不是一个对象，返回创建的新对象
  return target;
}

// function ne () {
//   let obj = {}
//   // 构造函数和参数
//   let [constructor, ...args] = [...arguments]
//   // 让obj 的隐式原型等于构造函数的显示原型
//   obj.__proto__ = constructor.prototype
//   let result = constructor.apply(obj, ...args)
//   if (result && (typeof (result) == "object" || typeof (result) === 'function')) {
//     //如果构造函数执行的结构返回的是一个对象，那么返回这个对象
//     return result
//   }
//   //如果构造函数返回的不是一个对象，返回创建的新对象
//   return obj
// }