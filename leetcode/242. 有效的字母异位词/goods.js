/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
  if (s.length !== t.length) {
      return false;
  }
  
  let map = {};
  
  for (let i = 0, tmp; i < s.length; i++) {
      tmp = s.charAt(i);
      if (map[tmp] !== undefined) {
          map[tmp]++;
      } else {
          map[tmp] = 1;
      }
  }
  
  for (let i = 0, tmp; i < t.length; i++) {
      tmp = t.charAt(i);
      if (map[tmp] !== undefined) {
          map[tmp]--;
      }
  }
  
  return Object.keys(map).every(key => map[key] === 0);
};