/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function (num) {
  if (num == 1) {
    return [2, -1];
  }
  if (num >= 2147483647) {
    return [-1, -1];
  }
  let arr = [];
  // ? 1 的 个数
  let findnum = function (str) {
    return str.toString(2).match(/1/g).length;
  };
  // ? 获取一个个数
  let geshu1 = findnum(num);
  let nums1 = num + 1;
  let nums2 = num - 1;
  // ? 大值
  while (true) {
    if (findnum(nums1) == geshu1) {
      arr.push(nums1);
      break;
    }
    nums1++;
  }
  // ? 小值
  while (true) {
    if (findnum(nums2) == geshu1) {
      arr.push(nums2);
      break;
    }
    nums2--;
  }
  return arr;
};
