/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  // 每个节点都 dfs
  // let res = 0
  // function dfs (root, sum) {
  //     if (!root) return null
  //     if (root.val == sum) {
  //         res++
  //     }
  //     if (root.left) {
  //         dfs(root.left, sum - root.val)
  //     }
  //     if (root.right) {
  //         dfs(root.right, sum - root.val)
  //     }
  // }

  // function path (root, sum) {
  //     if (!root) return null
  //     dfs(root, sum)
  //     path(root.left, sum)
  //     path(root.right, sum)
  // }
  // path(root, sum)
  // return res

  // 2. 用一个 arr[] 记录 节点以前的节点
  const arr = []
  let res = 0
  const dfs = (root, index) => {
    if (!root) return null;
    arr[index] = root.val;
    let target = 0;
    // 从当前节点，往前搜索路径，查找是否满足 sum
    for (let i = index; i >= 0; i--) {
      target += arr[i];
      if (target === sum) {
        res++;
      }
    }
    dfs(root.left, index + 1);
    dfs(root.right, index + 1);
  }
  dfs(root, 0);
  return res;
};