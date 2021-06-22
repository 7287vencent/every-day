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
var findFrequentTreeSum = function (root) {
  if (!root) {
    return [];
  }
  let resSum = [];
  let res = [];
  let total = 0;
  const helper = root => {
    if (!root.left && !root.right) {
      // ? 叶子节点
      resSum.push(root.val);
      return root.val;
    }
    let f1 = 0;
    let f2 = 0;
    root.left && (f1 = helper(root.left));
    root.right && (f2 = helper(root.right));
    let f = f1 + f2 + root.val;
    resSum.push(f);
    return f;
  };
  helper(root);
  // ? 使用 map 计算出 最多的值
  let map = new Map();
  for (let i of resSum) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
    let count = map.get(i);
    if (count > total) {
      total = count;
      res = [i];
    } else if (count == total) {
      res.push(i);
    }
  }
  return res;
};
