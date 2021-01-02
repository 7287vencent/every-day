/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const quickSelect = (arr, l, r, index) => {
    const q = randomPartition(arr, l, r)
    // console.log(q, arr)
    if (q === index) {
      return arr[q]
    } else {
      return q < index ? quickSelect(arr, q + 1, r, index) : quickSelect(arr, l, q - 1, index)
    }
  }
  // 随机分区
  const randomPartition = (arr, l, r) => {
    const q = (Math.random() * (r - l + 1) + l) >>> 0;
    // 交换，把选择出来的 卫兵放到最后，方便计算出它在排序中的第几项
    [arr[q], arr[r]] = [arr[r], arr[q]];
    return quickSort(arr, l, r)
  }
  // 快速排序
  const quickSort = (arr, l, r) => {
    const x = arr[r]
    let i = l - 1
    for (let j = l; j < r; j++) {
      if (arr[j] <= x) {
        // 交换
        i++
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    // 把卫兵和 放到正确的位置
    i++
    [arr[i], arr[r]] = [arr[r], arr[i]]
    return i
  }
  return quickSelect(nums, 0, nums.length - 1, nums.length - k)
};
