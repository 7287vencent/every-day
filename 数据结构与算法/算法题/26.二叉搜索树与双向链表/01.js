/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert (root) {
  // write code here
  if (root === null) {
    return null
  }
  var stack = []
  var pre = null
  var p = root
  var isFirst = true
  while (p !== null || stack.length !== 0) {
    while (p !== null) {
      stack.push(p)
      p = p.left
    }
    p = stack.pop()
    if (isFirst) {
      root = p
      pre = root
      isFirst = false
    } else {
      pre.right = p
      p.left = pre
      pre = p
    }
    p = p.right
  }
  return root
}
