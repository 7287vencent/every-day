/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  const fn = (temp, begin) => {
    if (temp.length === k) {
      res.push([...temp]);
      return;
    }
    for (let i = begin; i <= n; i++) {
      temp.push(i);
      fn(temp, i + 1);
      temp.pop();
    }
  };
  fn([], 1);
  return res;
};
