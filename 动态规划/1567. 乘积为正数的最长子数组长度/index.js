/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let pre = nums[0] > 0 ? 1 : 0;
  let nev = nums[0] < 0 ? 1 : 0;
  let res = pre;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      pre++;
      nev = nev > 0 ? nev + 1 : 0;
    } else if (nums[i] < 0) {
      let tpre = nev > 0 ? nev + 1 : 0;
      let tnev = pre + 1;
      pre = tpre;
      nev = tnev;
    } else {
      pre = 0;
      nev = 0;
    }
    res = Math.max(res, pre);
  }
  return res;
};
