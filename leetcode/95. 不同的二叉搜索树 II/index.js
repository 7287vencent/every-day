/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const buildTree = (start, end) => {
    let res = [];
    if (start > end) return [null];
    for (let i = start; i <= end; i++) {
      let left = buildTree(start, i - 1);
      let right = buildTree(i + 1, end);
      for (let leftNode of left) {
        for (let rightNode of right) {
          let node = new TreeNode(i);
          node.left = leftNode;
          node.right = rightNode;
          res.push(node);
        }
      }
    }
    return res;
  };
  if (n === 0) return [];
  return buildTree(1, n);
};
