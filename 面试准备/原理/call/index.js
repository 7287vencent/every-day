Function.prototype.call = function () {
  let [thisArg, ...args] = [...arguments];
  if (!thisArg) {
    //context为null或者是undefined
    thisArg = typeof window === 'undefined' ? global : window;
  }
  //this的指向的是当前函数 func (func.call)
  thisArg.func = this;
  //执行函数
  let result = thisArg.func(...args);
  delete thisArg.func; //thisArg上并没有 func 属性，因此需要移除
  return result;
}


let name = "小王", age = 17
let obj = {
  name: '小张',
  objAge: this.age,
  myfun: function () {
    console.log(this.name + '年龄' + this.age)
  }
}
let db = {
  name: '德玛',
  age: 19
}

obj.myfun.call(db)