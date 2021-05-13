/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let COUNT = 4;
  let arr = [];
  let res = [];
  const dfs = (pos, start) => {
    if (pos === COUNT) {
      if (start === s.length) {
        res.push(arr.join("."));
      }
      return;
    }
    if (start === s.length) {
      return;
    }
    if (s.charAt(start) === "0") {
      arr[pos] = 0;
      dfs(pos + 1, start + 1);
    }
    let addr = 0;
    for (let i = start; i < s.length; i++) {
      addr = addr * 10 + (s.charAt(i) - "0");
      if (addr > 0 && addr <= 255) {
        arr[pos] = addr;
        dfs(pos + 1, i + 1);
      } else {
        break;
      }
    }
  };
  dfs(0, 0);
  return res;
};
