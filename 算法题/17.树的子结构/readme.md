## 题目 17.树的子结构
  输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

### 解题思路
  使用递归的思路
  
  使用一个判断节点的函数
  function sub(root1, root2) {
    if (!root2) {
      true
    }
    if (!root1) {
      false
    }
    if (root1.val === root2.val) {
      return sub(root1.left, root2.left) && sub(root1.right, root2.right)
    } else {
      false
    }
  }