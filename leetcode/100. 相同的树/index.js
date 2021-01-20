/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// todo 深度优先搜索
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// todo 广度优先搜索
var isSameTree = function (p, q) {
  let queue1 = [p];
  let queue2 = [q];
  while (queue1.length && queue2.length) {
    let a = queue1.shift();
    let b = queue2.shift();
    if (!a && !b) continue;
    if (!a || !b) return false;
    if (a.val !== b.val) return false;
    queue1.push(a.left, a.right);
    queue2.push(b.left, b.right);
  }
  return true;
};
