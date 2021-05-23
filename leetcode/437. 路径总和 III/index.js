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
 * @param {number} targetSum
 * @return {number}
 */
// todo 前缀和思路
var pathSum = function (root, targetSum) {
  let map = new Map();
  let ans = 0;
  const dfs = (root, presum) => {
    if (!root) {
      return 0;
    }
    map.set(presum, (map.get(presum) || 0) + 1);
    let target = presum + root.val;
    ans += map.get(target - targetSum) || 0;
    dfs(root.left, target);
    dfs(root.right, target);
    map.set(presum, map.get(presum) - 1);
  };
  dfs(root, 0);
  return ans;
};

// todo 双递归思路
//从根节点出发,遍历所有节点,找到每个节点满足条件的路径,然后相加
var pathSum = function (root, targetSum) {
  if (!root) return 0;
  //y为从root出发,满足路径权重和等于targetSum的路径总数
  const y = curNode(root, targetSum);
  //y1为从root.left出发
  const y1 = pathSum(root.left, targetSum);
  //y2为从root.right出发
  const y2 = pathSum(root.right, targetSum);
  return y + y1 + y2;
};
//从任意节点出发,满足路径权重和等于targetSum的路径总数
const curNode = (root, sum) => {
  //递归出口
  if (!root) return 0;
  //当前节点值正好等于需要的sum,x =1 ;
  const x = root.val === sum ? 1 : 0;
  //再从当前节点的左子树里找
  const x1 = curNode(root.left, sum - root.val);
  const x2 = curNode(root.right, sum - root.val);
  return x + x1 + x2;
};
