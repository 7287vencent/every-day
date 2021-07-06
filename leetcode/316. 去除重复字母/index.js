/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const vis = new Array(26).fill(0);
  const num = _.countBy(s);

  const sb = new Array();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (!vis[ch.charCodeAt() - "a".charCodeAt()]) {
      while (sb.length > 0 && sb[sb.length - 1] > ch) {
        if (num[sb[sb.length - 1]] > 0) {
          vis[sb[sb.length - 1].charCodeAt() - "a".charCodeAt()] = 0;
          sb.pop();
        } else {
          break;
        }
      }
      vis[ch.charCodeAt() - "a".charCodeAt()] = 1;
      sb.push(ch);
    }
    num[ch]--;
  }
  return sb.join("");
};

var removeDuplicateLetters = function (s) {
  s = s.split("");
  let map = new Map(),
    res = [];
  s.forEach(item => {
    if (!map.get(item)) map.set(item, 0);
    map.set(item, map.get(item) + 1);
  });
  s.forEach((item, index) => {
    if (!res.includes(item)) {
      while (
        res.length &&
        item < res[res.length - 1] &&
        map.get(res[res.length - 1]) > 0
      ) {
        res.pop();
      }
      res.push(item);
    }
    map.set(item, map.get(item) - 1);
  });
  return res.join("");
};
