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
  let result = [];
  let curnode = [];
  const helper = (root, level) => {
    if (!root) {
      return null;
    }
    if (level in result) {
      // ? 右侧其他节点
      let node = new ListNode(root.val);
      curnode[level].next = node;
      curnode[level] = node;
    } else {
      // ? 每层左侧第一个节点做表头
      result[level] = curnode[level] = new ListNode(root.val);
    }
    helper(root.left, level + 1);
    helper(root.right, level + 1);
  };
  helper(tree, 0);
  return result;
};

const listOfDepth = tree => {
  const queue = [tree];
  const result = [];
  const current = new ListNode(null);

  while (queue.length) {
    let node = current;
    const totalSize = queue.length;

    for (let i = 0; i < totalSize; i += 1) {
      const { val, left, right } = queue.shift();
      node.next = new ListNode(val);
      node = node.next;
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
    }

    result.push(current.next);
  }

  return result;
};
