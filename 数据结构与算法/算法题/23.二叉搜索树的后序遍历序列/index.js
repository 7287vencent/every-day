function VerifySquenceOfBST (sequence) {
  // write code here
  let size = sequence.length
  if (size === 0) {
    return false
  }
  let i = 0
  while (--size) {
    while (sequence[i] < sequence[size]) {
      // console.log(i, sequence[i])
      i++
    }

    while (sequence[i] > sequence[size]) {
      // console.log("=>>>>>>", i, sequence[i])
      i++
    }

    if (i < size) {
      return false
    }
    i = 0
  }
  return true
}
// let arr = [4, 8, 6, 12, 16, 14, 10]
// console.log(VerifySquenceOfBST(arr))