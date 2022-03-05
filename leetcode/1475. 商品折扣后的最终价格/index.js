/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let stack = [];
  let res = [...prices];
  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
      let j = stack.pop();
      res[j] = prices[j] - prices[i];
    }
    stack.push(i);
  }
  return res;
};
