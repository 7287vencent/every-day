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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];
  const bfs = (root, path) => {
    if (root) {
      path += root.val + "";
      if (!root.left && !root.right) {
        paths.push(path);
      } else {
        path += "->";
        bfs(root.left, path);
        bfs(root.right, path);
      }
    }
  };
  bfs(root, "");
  return paths;
};
