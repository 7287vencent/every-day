/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function (birth, death) {
  let a = Array(2003).fill(0);
  let n = birth.length;
  for (let i = 0; i < n; i++) {
    a[birth[i]] += 1;
    a[death[i] + 1] -= 1;
  }
  let sum = 0,
    max = 0,
    y = 0;
  for (let i = 1900; i <= 2000; i++) {
    sum += a[i];
    if (max < sum) {
      max = sum;
      y = i;
    }
  }
  return y;
};
