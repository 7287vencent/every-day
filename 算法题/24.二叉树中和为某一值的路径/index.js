function TreeNode (x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function FindPath (root, expectNumber) {
  // write code here
  let result = []
  if (root === null) {
    return result
  }
  dfsFind(root, expectNumber, [], 0, result)
  return result
}

function dfsFind (root, expectNumber, path, curnum, result) {
  curnum += root.val
  path.push(root.val)

  if (curnum === expectNumber && root.left === null && root.right === null) {
    // 把一个路径存入 result中
    result.push(path.slice(0))
  }
  if (root.left !== null) {
    dfsFind(root.left, expectNumber, path, curnum, result)
  }
  if (root.right !== null) {
    dfsFind(root.right, expectNumber, path, curnum, result)
  }
  // console.log("path", path)
  // 直接到叶子节点的时，可能出现左侧节点不满足的情况，所以需要把左侧节点取出
  path.pop()
}
// {10,5,12,4,7},22
let r = new TreeNode(10),
  r1 = new TreeNode(5),
  r2 = new TreeNode(12),
  r3 = new TreeNode(4),
  r4 = new TreeNode(7)
r.left = r1
r.right = r2
r1.left = r3
r1.right = r4

console.log(FindPath(r, 22))