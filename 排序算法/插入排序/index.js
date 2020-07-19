// 第一版
// function binaryInsertionSort (arr) {
//   let key, j
//   for (let i = 1; i < arr.length; i++) {
//     key = arr[i]
//     j = i - 1
//     while (j >= 0 && arr[j] >= key) {
//       arr[j + 1] = arr[j]
//       j--
//     }
//     arr[j + 1] = key
//   }
//   return arr
// }

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(binaryInsertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// 采用 二分法
function binaryInsertionSort (arr) {
  let key, j
  for (let i = 1; i < arr.length; i++) {
    key = arr[i]
    let left = 0
    let right = i - 1
    // 二分法
    while (left <= right) {
      let mid = (left + right) / 2 | 0
      if (arr[mid] < key) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j]
    }
    arr[left] = key
  }
  return arr
}