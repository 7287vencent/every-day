/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  let arr = [];
  let res = 0;
  const dfs = (root, index) => {
    if (!root) return null;
    arr[index] = root.val;
    let target = 0;
    for (let i = index; i >= 0; i--) {
      target += arr[i];
      if (target === sum) {
        res++;
      }
    }
    dfs(root.left, index + 1);
    dfs(root.right, index + 1);
  };
  dfs(root, 0);
  return res;
};
