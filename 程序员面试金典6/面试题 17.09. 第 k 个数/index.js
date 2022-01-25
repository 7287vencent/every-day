/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  let nums = Array(k);
  let p3 = 0,
    p5 = 0,
    p7 = 0;
  nums[0] = 1;
  for (let i = 1; i < k; i++) {
    nums[i] = Math.min(nums[p3] * 3, nums[p5] * 5, nums[p7] * 7);
    if (nums[i] === nums[p3] * 3) p3++;
    if (nums[i] === nums[p5] * 5) p5++;
    if (nums[i] === nums[p7] * 7) p7++;
  }
  return nums[k - 1];
};
