/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = new Set();
  for (let num of nums) {
    if (hash.has(num)) {
      return true;
    }
    hash.add(num);
  }
  return false;
};
