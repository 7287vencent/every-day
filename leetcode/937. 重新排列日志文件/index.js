/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let arr1 = [];
  let arr2 = [];
  for (let log of logs) {
    Number.isInteger(+log[log.length - 1]) ? arr2.push(log) : arr1.push(log);
  }
  arr1.sort();
  arr1.sort((a, b) => {
    return a.slice(a.indexOf(" ")) < b.slice(b.indexOf(" ")) ? -1 : 1;
  });
  return arr1.concat(arr2);
};
