/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
  let arr = path.split("/");
  for (let item of arr) {
    if (item === "..") {
      stack.length && stack.pop();
    } else if (item && item != ".") {
      stack.push(item);
    }
  }
  return "/" + stack.join("/");
};
