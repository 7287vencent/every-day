/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree (pRoot1, pRoot2) {
  // write code here
  // 先判断是否为空树
  if (!pRoot1 || !pRoot2) {
    return false;
  }
  // 根节点 左子树 右子树 三个
  return isSubtree(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
}
function isSubtree (root1, root2) {
  // 最后 root2 = null 时 可以确定是子树
  if (!root2) {
    return true;
  }
  // root1 先为null 不是子树
  if (!root1) {
    return false;
  }
  // 判断当前节点的值是否相等
  if (root1.val == root2.val) {
    return isSubtree(root1.left, root2.left) &&
      isSubtree(root1.right, root2.right);
  } else {
    return false;
  }
}