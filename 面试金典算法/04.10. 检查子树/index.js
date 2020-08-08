const isSameTree = (t1, t2) => {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;

  return t1.val == t2.val
    && isSameTree(t1.left, t2.left)
    && isSameTree(t1.right, t2.right);
}

const dfs = (root, t2) => {
  if (!root) return false;
  if (root.val === t2.val && isSameTree(root, t2))
    return true;
  return dfs(root.left, t2) || dfs(root.right, t2);
}

if (!t2) return true;
return dfs(t1, t2);