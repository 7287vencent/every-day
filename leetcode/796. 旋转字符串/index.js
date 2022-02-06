/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let n = s.length;
  if (n !== goal.length) return false;
  if (n === 0) return false;
  return (s + s).includes(goal);
};
