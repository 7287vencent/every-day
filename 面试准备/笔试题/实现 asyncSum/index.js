// 首先分块
function chunk (arr) {
  let res = []
  for (let i = 0; i < arr.length; i += 2) {
    res.push([arr[i], arr[i + 1] ? arr[i + 1] : 0])
  }
  return res
}

function add (a, b, callback) {
  callback(a + b)
}

function asyncAdd (a, b) {
  return new Promise((resolve) => add(a, b, sum => resolve(sum)))
}

function sum (args) {
  return Promise.all(chunk(args).map(item => asyncAdd(...item)))
}

async function asyncSum (...args) {
  // 具体实现
  let res = await sum(args)
  while (res.length !== 1) {
    res = await sum(res)
  }
  // console.log(res[0])
  return res[0]
}
asyncSum(1, 2, 3, 4, 5, 10) 
