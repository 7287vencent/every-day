/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length != t.length) {
    return false
  }
  let map = {}
  for(let i = 0,len= s.length; i < len; i++ ) {
    let res = s.charAt(i)
    if(map[res] != undefined) {
      map[res]++
    } else {
      map[res] = 1
    }
  }
  for(let i = 0,len= t.length; i < len; i++ ) {
    let res = t.charAt(i)
    if(map[res] != undefined) {
      map[res]--
    }
  }
  console.log(Object.keys(map))
  return Object.keys(map).every(key => map[key] === 0)
};

let s = "anagram", t = "nagaram"
console.log(isAnagram(s,t))