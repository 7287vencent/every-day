// todo 普通解法
function leftpad(str, length, ch) {
  let len = len - str.length + 1;
  return Array(len).join(ch) + str;
}

// todo 二分法解法
function leftpad2(str, length, ch) {
  let len = length - str.length;
  let total = "";
  while (len) {
    if (len % 2 === 1) { // ? 可优化为 len & 1
      total += ch;
    }
    if (len === 1) {
      return total + str;
    }
    ch += ch;
    len = parseInt(len / 2); // ? 可优化为 len >> 1
  }
}

console.log(leftpad2("hello", 10, "0"));
