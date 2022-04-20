/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0;
  let r = 0;
  let m = new Map();
  // ? 收集 t 中每个字符出现的次数
  for (let c of t) {
    if (!m.has(c)) {
      m.set(c, 1);
    } else {
      m.set(c, m.get(c) + 1);
    }
  }
  let mlen = m.size; // ? 字符的种类
  let slen = s.length;
  let res = "";
  while (r < slen) {
    let c = s[r];
    if (m.has(c)) {
      m.set(c, m.get(c) - 1);
    }
    if (m.get(c) === 0) {
      mlen--;
    }
    // ? 下面需要使用滑动窗口找出结果
    // ? 这里代表 l - r 范围之内包含了 t
    while (mlen === 0) {
      let nres = s.substring(l, r + 1);
      if (!res || nres.length < res.length) {
        res = nres;
      }
      // ? 开始滑动
      let lc = s[l];
      if (m.has(lc)) {
        m.set(lc, m.get(lc) + 1);
      }
      if (m.get(lc) === 1) {
        mlen += 1;
      }
      l++;
    }
    r++;
  }
  return res;
};
