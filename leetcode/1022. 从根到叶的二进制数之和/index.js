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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let res = 0;
  const dfs = (root, list) => {
    list.push(root.val);
    if (!root.left && !root.right) {
      res += cal(list);
    }
    if (root.left) {
      dfs(root.left, list);
      list.pop();
    }
    if (root.right) {
      dfs(root.right, list);
      list.pop();
    }
  };
  const cal = list => {
    let res = 0;
    for (let i = 0, len = list.length; i < len; i++) {
      res |= list[i] << (len - i - 1);
    }
    return res;
  };
  dfs(root, []);
  return res;
};
