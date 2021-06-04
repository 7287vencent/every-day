/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  let leftNode = root; // ? 从根节点开始
  while (leftNode.left) {
    let head = leftNode; // ? 当前成已经 遍历成了链表
    while (head) {
      // ? 开始遍历下一层
      head.left.next = head.right;
      if (head.next) {
        // ? 为 当前节点的右子树 建立 next 关系
        head.right.next = head.next.left;
      }
      // ? 同层右节点
      head = head.next;
    }
    // ? 更新 leftNode 为下一层的 最左节点
    leftNode = leftNode.left;
  }
  return root;
};

// todo 层次遍历
var connect = function (root) {
  if (root === null) {
    return root;
  }

  // 初始化队列同时将第一层节点加入队列中，即根节点
  const Q = [root];

  // 外层的 while 循环迭代的是层数
  while (Q.length > 0) {
    // 记录当前队列大小
    const size = Q.length;

    // 遍历这一层的所有节点
    for (let i = 0; i < size; i++) {
      // 从队首取出元素
      const node = Q.shift();

      // 连接
      if (i < size - 1) {
        node.next = Q[0];
      }

      // 拓展下一层节点
      if (node.left !== null) {
        Q.push(node.left);
      }
      if (node.right !== null) {
        Q.push(node.right);
      }
    }
  }

  // 返回根节点
  return root;
};
