/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12) {
    return [];
  }
  let res = [];
  const track = [];
  const backtrack = (s, track, res) => {
    if (track.length === 4 && s.length === 0) {
      res.push(track.join("."));
      return;
    }
    let len = s.length >= 3 ? 3 : s.length;
    for (let i = 0; i < len; i++) {
      const c = s.slice(0, i + 1);
      if (parseInt(c) > 255) {
        continue;
      }
      // ? 防止前导 0
      if (i >= 1 && parseInt(c) < parseInt(1 + "0".repeat(i))) continue;
      track.push(c);
      backtrack(s.slice(i + 1), track, res);
      track.pop();
    }
  };
  backtrack(s, track, res);
  return res;
};
