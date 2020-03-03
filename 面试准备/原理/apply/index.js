Function.prototype.apply = function (thisArg, rest) {
  let result; //函数返回结果
  if (!thisArg) {
    //context为null或者是undefined
    thisArg = typeof window === 'undefined' ? global : window;
  }
  //this的指向的是当前函数 func (func.call)
  thisArg.func = this;
  if (!rest) {
    //第二个参数为 null / undefined 
    result = thisArg.func();
  } else {
    result = thisArg.func(...rest);
  }
  delete thisArg.func; //thisArg上并没有 func 属性，因此需要移除
  return result;
}