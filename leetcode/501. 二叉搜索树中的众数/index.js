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
var findMode = function (root) {
  let base = 0,
    count = 0,
    maxCount = 0;
  let ans = [];
  const update = x => {
    if (x === base) {
      count++;
    } else {
      count = 1;
      base = x;
    }
    if (count === maxCount) {
      ans.push(x);
    }
    if (maxCount < count) {
      maxCount = count;
      ans = [x];
    }
  };
  const dfs = root => {
    if (root) {
      dfs(root.left);
      update(root.val);
      dfs(root.right);
    }
  };
  dfs(root);
  return ans;
};
