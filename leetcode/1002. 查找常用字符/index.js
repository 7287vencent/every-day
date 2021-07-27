/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let minfreq = Array(26).fill(Infinity);
  for (let word of words) {
    let freq = Array(26).fill(0);
    let length = word.length;
    for (let i = 0; i < length; ++i) {
      let ch = word.charCodeAt(i);
      ++freq[ch - 97];
    }
    for (let i = 0; i < 26; ++i) {
      minfreq[i] = Math.min(minfreq[i], freq[i]);
    }
  }
  let ans = [];
  for (let i = 0; i < 26; ++i) {
    for (let j = 0; j < minfreq[i]; ++j) {
      ans.push(String.fromCharCode(i + 97));
    }
  }
  return ans;
};
