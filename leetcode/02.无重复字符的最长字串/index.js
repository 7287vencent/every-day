function lengthOfLongestSubstring(s) {
  let res = 0;
  let cur = 0;
  let p = "";
  for (let i = 0; i < s.length; i++) {
    if (p.indexOf(s[i], 0) == -1)
      p += s[i];
    else {
      if (p.length > res)
        res = p.length;
      let pos = p.indexOf(s[i], 0);
      p = p.slice(pos + 1);
      console.log(p)
      p += s[i];

    }
  }
  if (p.length > res)
    res = p.length;
  return res;
}
console.log(lengthOfLongestSubstring('abcbcbb'));