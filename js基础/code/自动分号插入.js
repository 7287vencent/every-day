function foo1 () {
  return {
    bar: "hello"
  };
}

function foo2 () {
  return
  {
    bar: "hello"
  };
}
var a = foo1();
var b = foo2();
console.log(a) //Object {bar: "hello"}
console.log(b) //underfind
//仔细看就知道了
// 会在第10行加入一个`;`
