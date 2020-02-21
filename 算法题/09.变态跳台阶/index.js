function jumpFloorII (number) {
  // write code here
  let i = 1;
  while (--number) {
    i *= 2;
  }
  return i;
}

function jumpFloorII (number) {
  return 1 << (--number);
}
