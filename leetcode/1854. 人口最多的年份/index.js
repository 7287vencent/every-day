/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  let offset = 1950;
  let diff = Array(101).fill(0);
  for (let [a, b] of logs) {
    diff[a - offset]++;
    diff[b - offset]--;
  }
  let cur = 0;
  let mx = 0;
  let res = 0;
  for (let i = 0; i < 101; i++) {
    cur += diff[i];
    if (cur > mx) {
      mx = cur;
      res = i;
    }
  }
  return res + offset;
};
