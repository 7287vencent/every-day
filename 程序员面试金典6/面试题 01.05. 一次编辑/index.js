/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  let len1 = first.length;
  let len2 = second.length;
  if (Math.abs(len1 - len2) > 1) {
    return false;
  }
  let pos = true;
  for (let i = 0, j = 0; i < len1 && j < len2; i++, j++) {
    // 这里的化 有可能是删除 或 添加
    if (first[i] !== second[j]) {
      // 这里 这么写的原因 是保证 place / pace 这样的，而不是 place / plla 这种，两个字符串有多个不同
      if (!pos) return false; // ?一次差别
      pos = false;
      if (len1 !== len2) {
        // j-- 表示，place / pace 这种
        // i-- 表示, pace / place 这种
        len1 > len2 ? j-- : i--;
      }
    }
  }
  return true;
};
