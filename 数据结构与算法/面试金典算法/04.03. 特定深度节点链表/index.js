/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
  let result = []
  let curlist = []

  function helper (root, level) {
    if (!root) return null
    if (level in result) {
      // 层次 右边的部分 这里就是在 当前的链表后面添加一个值
      let node = new ListNode(root.val)
      curlist[level].next = node
      curlist[level] = node
    } else {
      // 按照 深度 遍历 先创建 当前层次的 链表头 最左侧的节点
      result[level] = curlist[level] = new ListNode(root.val)
    }
    helper(root.left, level + 1)
    helper(root.right, level + 1)
  }
  helper(tree, 0)
  return result

};