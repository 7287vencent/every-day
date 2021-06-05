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
  if (!root) {
    return root;
  }
  let start = root;
  let last = null;
  let nextStart = null;
  const handler = p => {
    if (last !== null) {
      last.next = p;
    }
    if (nextStart === null) {
      nextStart = p;
    }
    last = p;
  };
  while (start) {
    last = null;
    nextStart = null;
    let p = start;
    while (p) {
      p.left && handler(p.left);
      p.right && handler(p.right);
      p = p.next;
    }
    start = nextStart;
  }
  return root;
};



// todo 层次遍历
var connect = function(root) {
  if (root === null) {
      return null;
  }
  const queue = [root];
  while (queue.length) {
      const n = queue.length;
      let last = null;
      for (let i = 1; i <= n; ++i) {
          let f = queue.shift();
          if (f.left !== null) {
              queue.push(f.left);
          }
          if (f.right !== null) {
              queue.push(f.right);
          }
          if (i !== 1) {
              last.next = f;
          }
          last = f;
      }
  }
  return root;
};
