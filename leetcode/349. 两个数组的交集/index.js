/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// todo set 原理方法
var intersection = function (nums1, nums2) {
  const setFun = (set1, set2) => {
    if (set1.length > set2.length) {
      return setFun(set1, set2);
    }
    let result = [];
    for (let num of set1) {
      if (set2.has(num)) {
        result.push(num);
      }
    }
    return result;
  };
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  return setFun(set1, set2);
};
// todo set 优化方法
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter(item => set2.has(item));
};

// todo 排序+双指针
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1.sort((x, y) => x - y);
  nums2.sort((x, y) => x - y);
  console.log(nums1, nums2);
  let i = 0,
    j = 0;
  let result = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      if (!result.length || nums1[i] !== result[result.length - 1]) {
        result.push(nums1[i]);
      }
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};
