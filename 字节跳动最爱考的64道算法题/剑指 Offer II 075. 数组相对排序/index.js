/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let n = Math.max(...arr1);
  let pos = Array(n + 1).fill(0);
  for (let x of arr1) {
    ++pos[x];
  }
  let ans = [];
  for (let x of arr2) {
    for (let i = 0; i < pos[x]; i++) {
      ans.push(x);
    }
    pos[x] = 0;
  }
  for (let x = 0; x <= n; x++) {
    for (let i = 0; i < pos[x]; i++) {
      ans.push(x);
    }
  }
  return ans;
};
