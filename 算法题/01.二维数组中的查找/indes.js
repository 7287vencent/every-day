function Find (target, array) {
  if (array == null || array.length == 0 || array[0].length == 0)
    return false;
  let rows = array.length,
    cols = array[0].length;
  let r = 0,
    c = cols - 1;
  while (r <= rows - 1 && c >= 0) {
    if (target == array[r][c]) {
      return true;
    } else if (target > array[r][c]) {
      r++;
    } else {
      c--;
    }
  }
  return false;
}