// 这个代码有问题 pre 出错


function TreeNode (x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function Convert (pRootOfTree) {
  // write code here
  // console.log("pRootOfTree->>>", pRootOfTree)

  if (pRootOfTree === null) return null

  convertHelper(pRootOfTree, null)
  let root = pRootOfTree
  while (root.left) {
    root = root.left
  }
  console.log("root->>>", root)
  // return root
}
let pre = null
function convertHelper (cur) {
  // 如果当前节点为null
  if (cur === null) return
  // 中序遍历左子树
  convertHelper(cur.left)
  // console.log("cur", cur, "pre=>>>>>", pre)
  // 找到最后一个
  cur.left = pre
  if (pre) {
    pre.right = cur
  }
  pre = cur
  // 遍历右侧
  convertHelper(cur.right)
}

/**
 *       10
 *   6       14
 * 4   8  12   16
 */

let a = new TreeNode(10)
let a1 = new TreeNode(6)
let a2 = new TreeNode(14)
let a3 = new TreeNode(4)
let a4 = new TreeNode(8)
let a5 = new TreeNode(12)
let a6 = new TreeNode(16)

a.left = a1
a.right = a2
a1.left = a3
a1.right = a4
a2.left = a5
a2.right = a6
Convert(a)