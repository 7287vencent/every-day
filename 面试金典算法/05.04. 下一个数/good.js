/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function(num) {
  let max = nextMax(num);
  let min = nextMin(num);
  return [max, min];
};

function nextMax(num) {
  let index1 = 0,
      index2 = 0,
      temp = num;

  while ((temp & 1) === 0 && temp != 0) {
      index1++;
      temp >>>= 1;
  }
  index2 = index1;
  while ((temp & 1) === 1 && temp != 0) {
      index2++;
      temp >>>= 1;
  }
  index2--;

  let max = num + Math.pow(2, index2);
  if (!index1 || temp === 0 || index1 === index2) return max > Math.pow(2, 31) - 1 ? -1 : max;
  for (let i = index1; i < index2; i++) {
      max -= Math.pow(2, i);
  }
  for (let i = 0; i < index2 - index1; i++) {
      max += Math.pow(2, i);
  }

  return max > Math.pow(2, 31) - 1 ? -1 : max;
}

function nextMin(num) {
  let temp = num;
  let index1 = 0,
      index2 = 0;

  while ((temp & 1) === 1 && temp > 0) {
      index1++;
      temp >>>= 1;
  }
  index2 = index1;

  if (temp > 0) {
      while ((temp & 1) === 0 && temp > 0) {
          index2++;
          temp >>>= 1;
      }
      index2--;
  }

  let min = num - Math.pow(2, index2);
  if (index1 === 0 || temp === 0 || index1 === index2)
      return min < 0 ? -1 : min;

  for (let i = 0; i < index1; i++) {
      min -= Math.pow(2, i);
  }

  let bottom = index2 - index1 - 1;
  for (let i = index2 - 1; i > bottom; i--) {
      min += Math.pow(2, i);
  }
  return min;
}