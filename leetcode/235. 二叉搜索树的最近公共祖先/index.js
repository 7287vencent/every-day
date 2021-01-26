/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// todo 两次遍历
var lowestCommonAncestor = function (root, p, q) {
  const getPath = (root, target) => {
    let path = [];
    let cur = root;
    while (cur !== target) {
      path.push(cur);
      if (target.val < cur.val) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    path.push(cur);
    return path;
  };

  let path_p = getPath(root, p);
  let path_q = getPath(root, q);
  let result = null;
  for (let i = 0; i < path_p.length && i < path_q.length; i++) {
    if (path_p[i] === path_q[i]) {
      result = path_p[i];
    } else {
      break;
    }
  }
  return result;
};

// todo 一次遍历
var lowestCommonAncestor = function (root, p, q) {
  let result = root;
  while (true) {
    if (p.val < result.val && q.val < result.val) {
      result = result.left;
    } else if (p.val > result.val && q.val > result.val) {
      result = result.right;
    } else {
      break;
    }
  }
  return result;
};
