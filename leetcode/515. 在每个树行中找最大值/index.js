/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  console.log(root);
  let queue = [root];
  let res = [];
  while (queue.length) {
    let len = queue.length;
    let ans = -Infinity;
    while (len--) {
      let node = queue.shift();
      if (ans < node.val) {
        ans = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(ans);
  }
  return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  const res = [];
  const largest = (root, level) => {
    if (!root) return;
    if (level >= res.length) res[level] = Number.MIN_SAFE_INTEGER;
    res[level] = Math.max(res[level], root.val);
    root.left && largest(root.left, level + 1);
    root.right && largest(root.right, level + 1);
  };
  largest(root, 0);
  return res;
};
