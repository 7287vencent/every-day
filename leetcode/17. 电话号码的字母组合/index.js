/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  const map = new Map();
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");
  let len = digits.length;
  let result = [];
  const generate = (i, str) => {
    if (i === len) {
      result.push(str);
      return;
    }
    let tem = map.get(digits[i]);
    for (let j = 0; j < tem.length; j++) {
      generate(i + 1, str + tem[j]);
    }
  };
  generate(0, "");
  return result;
};
