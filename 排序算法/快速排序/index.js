var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr, 0, arr.length - 1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
// console.log(quickSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

function quickSort (arr, left, right) {
  if (left < right) {
    let pos = arr[right] // 卫兵节点
    let i = left - 1 // 用来确定 中心的顺序
    let temp
    for (let j = left; j <= right; j++) {
      if (arr[j] <= pos) {
        i++
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
    quickSort(arr, left, i - 1)
    quickSort(arr, i + 1, right)
  }
  return arr
}


function quickSort2 (arr) {
  if (arr.length <= 1) return arr
  // 找一个为列兵节点
  let pivotIndex = arr.length / 2 | 0
  let pivot = arr.splice(pivotIndex, 1)[0]

  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort2(left).concat([pivot], quickSort2(right))
}