function reConstructBinaryTree (pre, vin) {
  // write code here
  let result = null
  if (pre.length > 1) {
    let root = pre[0]   // 父节点
    let vinRootIndex = vin.indexOf(root)
    let vinLeft = vin.slice(0, vinRootIndex)
    let vinRight = vin.slice(vinRootIndex + 1)
    pre.shift()
    var preLeft = pre.slice(0, vinLeft.length)
    var preRight = pre.slice(vinLeft.length)
    result = {
      val: root,
      left: reConstructBinaryTree(preLeft, vinLeft),
      right: reConstructBinaryTree(preRight, vinRight)
    }
  } else if (pre.length === 1) {
    result = {
      val: pre[0],
      left: null,
      right: null
    }
  }
  return result
}