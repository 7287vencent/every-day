### 实现 asyncSum

#### 题目
字节跳动面试题目：利用已知函数 add 实现 asyncSum。
``` js
function add (a, b, callback) {
  callback(a + b)
}

async function asyncSum(...args) {
  // 具体实现
}

// await asyncSum(1, 2, 3, 4, 5) 的结果应当为 1 + 2 + 3 + 4+ 5 = 15
```
### 解体思路

解题思路：
``` js
实现任意参数的求和函数 sum
求和函数依赖了异步的 add 函数，add 函数一次只能计算两数之和，所以任意参数要分组，每组两个参数调用 add 函数
重复第 2 步，直到 可分组参数数量为 1
[1, 2, 3, 4, 5] // 传参
[[1, 2], [3, 4], [5, 0]] // 分组
[3, 7, 5] // 各组求和
[[3, 7], [5, 0]] // 继续分组
[10, 5] // 继续各组求和
[[10, 5]] // 继续分组
[15] // 求和
```
首先，实现分组函数，将参数分成 2 个一组。
``` js
function chunk(arr) {
  let ret = []

  for (let i = 0; i < arr.length; i += 2) {
    ret.push([arr[i], arr[i + 1] ? arr[i + 1] : 0])
  }

  return ret
}

chunk([1, 2, 3, 4, 5]) // [[1, 2], [3, 4], [5, 0]]
``` 
然后，实现 sum 函数对分组的数字依次求和。由于需要强依赖 add 函数，首先将 add 函数 promisify。
``` js
function add (a, b, callback) {
  callback(a + b)
}

function asyncAdd(a, b) {
  return new Promise(resolve => add(a, b, sum => resolve(sum)))
}
```
实现 sum 函数。
``` js
function sum(nums) {
  return Promise.all(chunk(nums).map(([a, b]) => asyncAdd(a, b)))
}

// await sum([1, 2, 3, 4, 5]) 结果 [3, 7, 5]
```
至此，可以看出数字长度在缩减，所以只需要继续拆分数组调用 sum 函数直到数字长度为 1 即为最终求和。
``` js
async function asyncSum(...args) {
  let ret = await sum(args)

  while (ret.length > 1) {
    ret = await sum(ret)
  }

  return ret[0]
}
```
完整实现。
``` js
function chunk(arr) {
  let ret = []

  for (let i = 0; i < arr.length; i += 2) {
    ret.push([arr[i], arr[i + 1] ? arr[i + 1] : 0])
  }

  return ret
}

function add (a, b, callback) {
  callback(a + b)
}

function asyncAdd(a, b) {
  return new Promise(resolve => add(a, b, sum => resolve(sum)))
}

function sum(nums) {
  return Promise.all(chunk(nums).map(([a, b]) => asyncAdd(a, b)))
}

async function asyncSum(...args) {
  let ret = await sum(args)

  while (ret.length > 1) {
    ret = await sum(ret)
  }

  return ret[0]
}
```