function jumpFloor (number) {
  // write code here
  if (number < 2) {
    return 1
  }
  let arr = [1, 1]
  for (let i = 2; i <= number; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[number]
}