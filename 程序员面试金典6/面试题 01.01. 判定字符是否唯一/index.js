/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  let obj = {};
  for (let i = 0; i < astr.length; i++) {
    if (obj[astr[i]]) {
      return false;
    } else {
      obj[astr[i]] = true;
    }
  }
  return true;
};
