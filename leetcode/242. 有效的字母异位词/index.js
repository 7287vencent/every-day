/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) {
      return false
    }
    let res = s.split('').sort().join('')
    let ret = t.split('').sort().join('')
    console.log(res,ret)
    if(res === ret) {
      return true
    }
    return false
};

let s = "anagram", t = "nagaram"
isAnagram(s,t)