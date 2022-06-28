/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let num of asteroids) {
    if (stack.length > 0 && stack[stack.length - 1] > 0 && num < 0) {
      let isbreak = false;
      while (stack.length && !isbreak && stack[stack.length - 1] > 0) {
        let x = stack[stack.length - 1];
        if (Math.abs(x) < Math.abs(num)) {
          stack.pop();
        } else if (Math.abs(x) === Math.abs(num)) {
          stack.pop();
          isbreak = true;
        } else {
          isbreak = true;
        }
      }
      if (!isbreak) {
        stack.push(num);
      }
    } else {
      stack.push(num);
    }
  }
  return stack;
};
