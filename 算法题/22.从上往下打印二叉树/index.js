/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    let arr = []
    let data = []
    if (root) {
        arr.push(root)
    }
    while (arr.length != 0) {
        let node = arr.shift()
        if (node.left) {
            arr.push(node.left)
        }
        if (node.right) {
            arr.push(node.right)
        }
        data.push(node.val)
    }
    return data
}