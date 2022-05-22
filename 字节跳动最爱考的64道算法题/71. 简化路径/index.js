/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let arr = path.split("/");
  let stack = [];
  for (let v of arr) {
    if (v === "..") {
      if (stack.length) {
        stack.pop();
      }
    } else if (v && v !== ".") {
      stack.push(v);
    }
  }
  return "/" + stack.join("/");
};
