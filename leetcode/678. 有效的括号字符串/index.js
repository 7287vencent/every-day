/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let lo = 0;
  let hi = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === "(") {
      lo++;
      hi++;
    } else if (c === "*") {
      if (lo > 0) lo--;
      hi++;
    } else {
      if (lo > 0) lo--;
      hi--;
    }
    if (hi < 0) {
      return false;
    }
  }
  return lo === 0;
};
