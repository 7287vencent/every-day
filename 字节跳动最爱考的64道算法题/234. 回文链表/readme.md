### 题目 234. 回文链表
#### 题目描述
给你一个单链表的头节点 `head` ，请你判断该链表是否为回文链表。如果是，返回 `true` ；否则，返回 `false` 。

 

示例 1：


```js
输入：head = [1,2,2,1]
输出：true
```
示例 2：


```js
输入：head = [1,2]
输出：false
```
 

提示：

- 链表中节点数目在范围[1, 105] 内
- 0 <= Node.val <= 9
 

- 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

### 解题思路
#### 题解1
利用链表的后续遍历，使用函数调用栈作为后序遍历栈，来判断是否回文

<details>
<summary>展开全部</summary>

```js
/**
  *
  */
var isPalindrome = function(head) {
    let left = head;
    function traverse(right) {
        if (right == null) return true;
        let res = traverse(right.next);
        res = res && (right.val === left.val);
        left = left.next;
        return res;
    }
    return traverse(head);
};
```
</details>



#### 题解2
通过 快、慢指针找链表中点，然后反转链表，比较两个链表两侧是否相等，来判断是否是回文链表

<details>
<summary>展开全部</summary>

```js
/**
  *
  */
var isPalindrome = function(head) {
    // 反转 slower 链表
    let right = reverse(findCenter(head));
    let left = head;
    // 开始比较
    while (right != null) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
}
function findCenter(head) {
    let slower = head, faster = head;
    while (faster && faster.next != null) {
        slower = slower.next;
        faster = faster.next.next;
    }
    // 如果 faster 不等于 null，说明是奇数个，slower 再移动一格
    if (faster != null) {
        slower = slower.next;
    }
    return slower;
}
function reverse(head) {
    let prev = null, cur = head, nxt = head;
    while (cur != null) {
        nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    return prev;
}
```
</details>
