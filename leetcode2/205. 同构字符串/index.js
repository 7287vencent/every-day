/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let Obj1 = new Object(null)
    let Obj2 = new Object(null)
    for(let i = 0,n = s.length; i < n; i++) {
      let c1 = s.charAt(i),
        c2 = t.charAt(i)
        // console.log(c1, c2)
      if(Obj1[c1]) {
        if(Obj1[c1] != c2) return false
      } else {
        Obj1[c1] = c2
      }
      if(Obj2[c2]) {
        if(Obj2[c2] != c1) return false
      } else {
        Obj2[c2] = c1
      }
      // console.log(Obj1)
    }
    return true
};

let s = "ab", 
  t = "aa"

console.log(isIsomorphic(s, t))