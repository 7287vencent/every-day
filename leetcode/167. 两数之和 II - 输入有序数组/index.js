/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let len = numbers.length
    let i = 0, j = len - 1
    // for(let i = 0; i < len; i++) {
    //   for(let j = i + 1; j < len; j++) {
    //     if(numbers[i] + numbers[j] === target) {
    //      return [i + 1,j + 1]
    //     }
    //   } 
    // }

    while(i < j) {
      if(numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]
      } else {
        if (numbers[i] + numbers[j] < target) {
          i++
        } else {
          j--
        }
      }
    }
};
let numbers = [2, 7, 11, 15], target = 9
twoSum(numbers, target)