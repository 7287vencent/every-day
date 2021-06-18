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
var largestBSTSubtree = function (root) {
  let ans = 0;
  let dfs = root => {
    if (!root.left && !root.right) {
      ans = Math.max(ans, 1);
      // todo:l,r表示当前节点为根的二叉搜索树里的值的范围[l,r]，sz为这棵树的节点数，如果不是BST,则sz=-1，还未递归前l=r=root->val
      return { l: root.val, r: root.val, st: 1 };
    }
    let st = 1;
    let l = root.val;
    let r = root.val;
    let pos = true;
    if (root.left) {
      let L = dfs(root.left);
      if (L.st != -1 && root.val > L.r) {
        st += L.st;
        l = L.l;
      } else {
        pos = false;
      }
    }
    if (root.right) {
      let R = dfs(root.right);
      if (R.st != -1 && root.val < R.l) {
        st += R.st;
        r = R.r;
      } else {
        pos = false;
      }
    }
    if (pos) {
      ans = Math.max(ans, st);
      return { l: l, r: r, st: st };
    }
    return { l: -1, r: -1, st: -1 };
  };
  if (!root) {
    return 0;
  }
  dfs(root);
  return ans;
};
