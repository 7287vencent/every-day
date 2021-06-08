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
var rightSideView = function (root) {
  let res = [];
  const dfs = (root, depth) => {
    if (!root) {
      return;
    }
    // ? depth 代表的是层级, res 存储的是每层的最右节点, 即 res的 下标就是层级
    // ? 如果当前 层不存在 res 里面，root 代表的是当前层的最右节点
    if (depth === res.length) {
      res.push(root.val);
    }
    // ? 因为先递归的是 root.right
    dfs(root.right, depth + 1);
    dfs(root.left, depth + 1);
  };
  dfs(root, 0);
  return res;
};
