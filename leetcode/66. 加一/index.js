/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length - 1;
    for(let i = n; i >= 0 ;i--) {
      if(digits[i] < 9){
        digits[i]++;
        return digits;
      }
      digits[i] = 0
    }
    let result = new Array( n + 2 ).fill(0)
    result[0] = 1;
    return result;

};
var digits = [1,2,9]
console.log(plusOne(digits))