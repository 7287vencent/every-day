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
var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  const exists = (root, level, k) => {
    let bits = 1 << (level - 1);
    let node = root;
    while (node && bits > 0) {
      if (!(bits & k)) {
        node = node.left;
      } else {
        node = node.right;
      }
      bits >>= 1;
    }
    return node !== null;
  };
  let level = 0;
  let node = root;
  while (node.left) {
    level++;
    node = node.left;
  }
  let low = 1 << level;
  let high = (1 << (level + 1)) - 1;
  while (low < high) {
    let mid = Math.floor((high - low + 1) / 2) + low;
    if (exists(root, level, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return low;
};
