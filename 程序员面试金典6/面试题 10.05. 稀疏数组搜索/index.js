/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
  let l = 0;
  let r = words.length - 1;
  while (l <= r) {
    let mid = ((l + r) / 2) >> 0;
    if (words[mid] === "") {
      if (words[r] === s) {
        return r;
      }
      r--;
    } else if (words[mid] === s) {
      return mid;
    } else if (words[mid] > s) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};
