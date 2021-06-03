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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) {
    return [];
  }
  let stack = [root];
  let prev = null;
  while (stack.length) {
    const cur = stack.pop();
    if (prev !== null) {
      prev.left = null;
      prev.right = cur;
    }
    // ? 先 右 后 左
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
    prev = cur;
  }
};

// todo 前驱节点方法
var flatten = function (root) {
  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left;
      let predecessor = next;
      while (predecessor.right !== null) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
};
