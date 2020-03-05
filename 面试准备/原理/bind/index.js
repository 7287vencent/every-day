Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  let _this = this
  // 去除构造函数
  let args = [...arguments].slice(1)
  // bind 最后返回的是一个函数
  return function F () {
    // 因为返回了一个函数，我们可以 new F(), 所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}