/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return []
  let queue = [root]
  let res = []
  while (queue.length !== 0) {
    let level = []
    // ? 在queue 中的数据一定在 同一层,理解这个是关键
    for (let i = 0, len = queue.length; i < len; i++) {
      root = queue.shift()
      level.push(root.val)
      if (root.left) {
        queue.push(root.left)
      }
      if (root.right) {
        queue.push(root.right)
      }
    }
    res.push(level)
  }
  return res
};


// todo 方法二
// ? 该方法 标记了 每一层
var levelOrder = function (root) {
  let res = [];

  function transal (root, depth) {
    if (!root) return null;

    if (!res[depth]) res[depth] = [];

    res[depth].push(root.val);
    transal(root.left, depth + 1);
    transal(root.right, depth + 1);
  }

  transal(root, 0);
  return res;
};