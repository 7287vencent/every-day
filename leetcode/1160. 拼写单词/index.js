/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const calcuteChar = str => {
    let map = {};
    for (let s of str) {
      if (!map[s]) {
        map[s] = 0;
      }
      map[s]++;
    }
    return map;
  };
  let ans = 0;
  let char_map = calcuteChar(chars);
  for (let word of words) {
    let has = true;
    let word_map = calcuteChar(word);
    for (let c in word_map) {
      let vc = char_map[c] || -1;
      if (vc < word_map[c]) {
        has = false;
        break;
      }
    }
    if (has) {
      ans += word.length;
    }
  }
  return map;
};

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let dic = new Array(26).fill(0);
  for (let i = 0; i < chars.length; i++) {
    dic[chars.charCodeAt(i) - 97]++;
  }
  return words.reduce((count, word) => {
    let chars = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      const c = word.charCodeAt(i) - 97;
      chars[c]++;
      if (chars[c] > dic[c]) {
        return count;
      }
    }
    return count + word.length;
  }, 0);
};
