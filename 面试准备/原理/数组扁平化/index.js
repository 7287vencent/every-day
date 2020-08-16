let arr = [1, [2], [[3], 4], [[5, 6], [[7]], 8]]

// 利用 reduce 和 concat

function flattenDeep (arr) {
  return arr.reduce((tol, val) => Array.isArray(val) ? tol.concat(flattenDeep(val)) : tol.concat(val), [])
}

console.log(flattenDeep(arr))


function flattenDeep2 (arr) {
  const stack = [...arr]
  const res = []
  while (stack.length) {
    // 取出栈中最后一个
    const next = stack.pop()
    if (Array.isArray(next)) {
      stack.push(...next)
    } else {
      res.push(next)
    }
  }
  return res.reverse()
}

console.log(flattenDeep2(arr))

function flattenDeep3 (arr, deepLength) {
  return arr.flat(deepLength)
}

console.log(flattenDeep3(arr, 10))