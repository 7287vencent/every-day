function chunk (arr) {
  let ret = []

  for (let i = 0; i < arr.length; i += 2) {
    ret.push([arr[i], arr[i + 1] ? arr[i + 1] : 0])
  }

  return ret
}

function add (a, b, callback) {
  callback(a + b)
}

function asyncAdd (a, b) {
  return new Promise(resolve => add(a, b, sum => resolve(sum)))
}

function sum (nums) {
  return Promise.all(chunk(nums).map(([a, b]) => asyncAdd(a, b)))
}

async function asyncSum (...args) {
  let ret = await sum(args)

  while (ret.length > 1) {
    ret = await sum(ret)
  }

  return ret[0]
}