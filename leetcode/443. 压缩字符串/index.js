/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let write = 0,
    left = 0;
  let n = chars.length;
  const reverse = (chars, left, right) => {
    while (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  };
  for (let read = 0; read < n; read++) {
    if (read === n - 1 || chars[read] !== chars[read + 1]) {
      chars[write++] = chars[read];
      let num = read - left + 1;
      if (num > 1) {
        let ans = write;
        while (num > 0) {
          chars[write++] = "" + (num % 10);
          num = (num / 10) >>> 0;
        }
        reverse(chars, ans, write - 1);
      }
      left = read + 1;
    }
  }

  return write;
};
