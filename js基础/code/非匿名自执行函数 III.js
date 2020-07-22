var b = 10;
(function b () {
  console.log(b)
  b = 5
  // console.log(window.b)
  var b = 20
  console.log(b)
})()
