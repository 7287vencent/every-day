function f() {}
var a = f.prototype, b = Object.getPrototypeOf(f);
a === b         
