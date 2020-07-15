// 最初版的 冒泡排序
function bubbleSort (arr) {
  let temp
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort2(arr));

// **改进冒泡排序： **设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。
// pos 之后的 数据 是排序后的正确顺序

function bubbleSort2 (arr) {
  let i = arr.length
  let pos
  while (i > 0) {
    pos = 0 // 为了解决 最后排序完成，跳不出循环
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j
        var temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
    i = pos
  }
  return arr
}