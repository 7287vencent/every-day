/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let sum = 0;
  let max = 0,
    min = Number.MAX_VALUE;
  for (let salar of salary) {
    sum += salar;
    if (max < salar) {
      max = salar;
    }
    if (min > salar) {
      min = salar;
    }
  }
  sum = sum - max - min;
  return sum / (salary.length - 2);
};
