/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0;
  let r = 0;
  let m = new Map();
  for (let i = 0; i < t.length; i++) {
    let c = t[i];
    if (m.has(c)) {
      m.set(c, m.get(c) + 1);
    } else {
      m.set(c, 1);
    }
  }
  let mLen = m.size;
  let sLen = s.length;
  let res = "";
  while (r < sLen) {
    let c = s[r];
    if (m.has(c)) {
      m.set(c, m.get(c) - 1);
    }
    if (m.get(c) === 0) {
      mLen--;
    }
    // ? 代表 l - r 之间包含 t 中所有的字符
    while (mLen === 0) {
      let nres = s.slice(l, r + 1);
      if (!res || nres.length < res.length) {
        res = nres;
      }
      // ? 从左开始慢慢减小
      let lc = s[l];
      if (m.has(lc)) {
        m.set(lc, m.get(lc) + 1);
        // ? 这一步是关键，1 代表的是这个数重新进入 map，开始滑动，
        // ? 因为这里 m.get(lc) 可能小于0，代表 lc 在 l - r 之间有很多重复的，大于实际需要的数量，所以得减小到刚好需要的数量
        if (m.get(lc) === 1) mLen += 1;
      }
      l++;
    }
    r++;
  }
  return res;
};

// todo 超详细版

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 创建左指针
  let l = 0;
  // 创建右指针
  let r = 0;
  // 最后需要返回的最小长度子串
  let res = "";
  // 创建字典表
  const m = new Map();
  // 遍历需要匹配的字符
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    // 放入字典表
    m.set(c, m.has(c) ? m.get(c) + 1 : 1);
  }
  // 创建记录需要匹配的字符种类
  let needType = m.size;
  // 遍历字符串
  while (r < s.length) {
    // 获取当前字符
    const c = s[r];
    // 如果是需要匹配的字符
    if (m.has(c)) {
      // 更新字典表中的次数 - 1
      m.set(c, m.get(c) - 1);
      //  如果次数为0，证明这个字符种类在当前窗口已经集齐了，needType - 1
      if (m.get(c) === 0) needType -= 1;
    }
    // 当needType为0，证明所有需要匹配的字符都已经在当前滑动窗口中
    while (needType === 0) {
      const c2 = s[l];
      // 记录当前滑动窗口的字符
      let newRes = s.slice(l, r + 1);
      // 当新的窗口中的字符长度小于上次的字符长度时，更新结果
      // !res 是在结果值为空的时候需要更新一下第一次匹配的值
      if (!res || newRes.length < res.length) res = newRes;
      // 如果左指针移动过程中出现，字典中的值证明需要匹配的字符已经脱离了当前窗口
      if (m.has(c2)) {
        // 更新表中需要出现的次数
        m.set(c2, m.get(c2) + 1);
        // 更新needType
        if (m.get(c2) === 1) needType += 1;
      }
      // 移动左指针
      l++;
    }
    // 移动右指针
    r++;
  }
  // 返回结果值
  return res;
};
