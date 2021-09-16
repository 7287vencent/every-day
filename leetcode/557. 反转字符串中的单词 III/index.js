/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let n = s.length;
  let i = 0;
  let t = "";
  const reverse = (left, right) => {
    while (left <= right) {
      t += s[right];
      right--;
    }
  };
  while (i < n) {
    let j = i;
    while (i < n && s[i] !== " ") {
      i++;
    }
    reverse(j, i - 1);
    while (i < n && s[i] === " ") {
      i++;
      t += " ";
    }
  }
  return t;
};
