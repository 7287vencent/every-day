### 题目 面试题 04.06. 后继者
#### 题目描述
设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。

如果指定节点没有对应的“下一个”节点，则返回null。

示例 1:

输入: root = [2,1,3], p = 1

      2
     / \
    1   3

输出: 2
示例 2:

输入: root = [5,3,6,2,4,null,null,1], p = 6

          5
         / \
        3   6
       / \
      2   4
     /   
    1

输出: null

### 解题思路
  题解
#### BST+递归
首先本题中的二叉树还是个二叉搜索树，也就是中序遍历是单调递增的，所以我们可以利用这个性质来简化查找过程。

- 如果结点 p 的值大于等于 root 的值，说明 p 的后继结点在 root 右子树中，那么就递归到右子树中查找。
- 如果结点 p 的值小于 root 的值，说明 p 在 root 左子树中，而它的后继结点有两种可能，要么也在左子树中，要么就是 root：
- 如果左子树中找到了后继结点，那就直接返回答案。
- 如果左子树中没有找到后继结点，那就说明 p 的右儿子为空，那么 root 就是它的后继结点。
#### BST+非递归
- 如果 p 有右儿子，那么它的后继结点就是右子树的最左边的儿子。
- 如果 p 没有右儿子，那么它的后继结点就是，沿着 p 往上到 root 的路径中，第一个左儿子在路径上的结点。因为这个结点的左子树中 p 是最右边的结点，是最大的，所以它就是 p 的后继结点。因为是二叉搜索树，我们就可以从根结点开始往 p 走，根据结点值的大小决定走的方向。
#### 一般树+递归
那如果是一般的二叉树，中序遍历就不满足单调递增了，这时候我们就只能找出中序遍历的结点顺序，然后才能得到 p 的后继结点。

所以我们直接采用递归来做中序遍历就行了，中序遍历结果保存下来，最后取 p 的下一个结点。

#### 一般树+非递归
当然还可以采用栈来做中序遍历，这样就是非递归了。同样结果保存下来，最后取 p 的下一个结点。

一般树+Morris遍历
如果看过我前两天的一道关于二叉搜索树的题解：

那么你一定会知道这个 Morris 遍历算法，用常数空间来解决结点无法访问父结点的问题。这里就不细讲了，请直接看之前的题解。方法是一样的，用 Morris 遍历得到中序遍历，然后遍历一遍找到 p ，输出它的下一个结点就行了。

代码
BST+递归（c++）
```
class Solution {
public:
    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        if (root == NULL || p == NULL) return NULL;
        if (p->val >= root->val) {
            return inorderSuccessor(root->right, p);
        } else {
            TreeNode* left = inorderSuccessor(root->left, p);
            return left ? left : root;
        }
    }
};
```
BST+非递归（c++）
```
class Solution {
public:
    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        if (p->right) {
            p = p->right;
            while (p->left) p = p->left;
            return p;
        }
        TreeNode* res = NULL;
        while (root != p) {
            if (root->val < p->val) {
                root = root->right;
            } else {
                res = root;
                root = root->left;
            }
        }
        return res;
    }
};
```
一般树+递归（c++）
```
class Solution {
public:
    void inorder(TreeNode* root, vector<TreeNode*>& res) {
        if (root->left) inorder(root->left, res);
        res.push_back(root);
        if (root->right) inorder(root->right, res);
    }

    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        vector<TreeNode*> res;
        inorder(root, res);
        res.push_back(NULL);
        for (int i = 0; i < res.size(); ++i) {
            if (res[i] == p) {
                return res[i+1];
            }
        }
        return NULL;
    }
};
```
一般树+非递归（c++）
```
class Solution {
public:
    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        vector<TreeNode*> res;
        stack<TreeNode*> st;
        while (!st.empty() || root) {
            while (root) {
                st.push(root);
                root = root->left;
            }
            root = st.top();
            st.pop();
            res.push_back(root);
            root = root->right;
        }
        res.push_back(NULL);
        for (int i = 0; i < res.size(); ++i) {
            if (res[i] == p) {
                return res[i+1];
            }
        }
        return NULL;
    }
};
```
一般树+Morris遍历（c++）
```
class Solution {
public:
    TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
        vector<TreeNode*> res;
        TreeNode *rightmost = NULL;
        while (root) {
            if (root->left) {
                rightmost = root->left;
                while (rightmost->right && rightmost->right != root) {
                    rightmost = rightmost->right;
                }
                if (rightmost->right != root) {
                    rightmost->right = root;
                    root = root->left;
                } else {
                    res.push_back(root);
                    rightmost->right = NULL;
                    root = root->right;
                }
            } else {
                res.push_back(root);
                root = root->right;
            }
        }
        res.push_back(NULL);
        for (int i = 0; i < res.size(); ++i) {
            if (res[i] == p) {
                return res[i+1];
            }
        }
        return NULL;
    }
};
```
https://leetcode-cn.com/problems/successor-lcci/solution/zhong-xu-bian-li-de-xia-yi-ge-yuan-su-5da-jie-fa-h/