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
 * @return {boolean}
 */
// todo 递归
var isSymmetric = function (root) {
  const check = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q || q.val !== p.val) return false;
    return check(p.left, q.right) && check(p.right, q.left);
  };
  return check(root, root);
};


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
 * @return {boolean}
 */
// todo 迭代
var isSymmetric = function(root) {
  const check = (tree1, tree2) => {
     let left = [tree1], right = [tree2]
     while(left.length) {
         let p = left.shift()
         let q = right.shift()
         // ? 判断同为叶子节点
         if (!p && !q) continue
         if (!p || !q || p.val !== q.val) return false
         left.push(p.left)
         left.push(p.right)
         right.push(q.right)
         right.push(q.left)
     }
     return true
  }
  return check(root, root)
};
