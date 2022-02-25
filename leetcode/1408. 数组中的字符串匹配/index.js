/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  let fullWords = "";
  for (let word of words) {
    fullWords += " " + word;
  }
  let res = [];
  for (let word of words) {
    if (fullWords.indexOf(word) !== fullWords.lastIndexOf(word)) {
      res.push(word);
    }
  }
  return res;
};
