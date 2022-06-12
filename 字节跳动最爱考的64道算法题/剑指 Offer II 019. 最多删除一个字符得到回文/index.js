/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const valid = (low, high) => {
    while (low < high) {
      if (s[low] === s[high]) {
        low++;
        high--;
      } else {
        return false;
      }
    }
    return true;
  };
  let low = 0,
    high = s.length - 1;
  while (low < high) {
    if (s[low] === s[high]) {
      low++;
      high--;
    } else {
      return valid(low + 1, high) || valid(low, high - 1);
    }
  }
  return true;
};
