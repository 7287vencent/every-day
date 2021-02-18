/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let len = triangle.length - 1;
  let temp = triangle[len];
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      temp[j] = triangle[i][j] + Math.min(temp[j], temp[j + 1]);
    }
  }
  return temp[0];
};
