/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let res = [];
  while (queue.length) {
    let k = queue.length;
    let arr = [];
    for (let i = 0; i < k; i++) {
      let node = queue.shift();
      arr.push(node.val);
      if (node.children && node.children.length > 0) {
        queue.push(...node.children);
      }
    }
    res.push(arr);
  }
  return res;
};
