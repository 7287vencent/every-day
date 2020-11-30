/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let map = new Map()
  for (const ch of s) {
    map.set(ch, !map.has(ch))
  }
  for (const ch of s) {
    if (map.get(ch)) {
      return ch
    }
  }
  return ' '
};

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
      return char
    }
  }
  return " "



};