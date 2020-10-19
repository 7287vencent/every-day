## 题目 02.05. 链表求和
给定两个用链表表示的整数，每个节点包含一个数位。

这些数位是反向存放的，也就是个位排在链表首部。

编写函数对这两个整数求和，并用链表形式返回结果。

 

示例：

输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
输出：2 -> 1 -> 9，即912
进阶：假设这些数位是正向存放的，请再做一遍。

示例：

输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
输出：9 -> 1 -> 2，即912


### 解题思路
  链表求和(包含进阶)
给定两个用链表表示的整数，每个节点包含一个数位。

这些数位是反向存放的，也就是个位排在链表首部。

编写函数对这两个整数求和，并用链表形式返回结果。


示例：
输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
输出：2 -> 1 -> 9，即912
进阶：假设这些数位是正向存放的，请再做一遍。


示例：
输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
输出：9 -> 1 -> 2，即912
题解：
使用变量carry记录进位,每次循环计算加上carry,当l1,l2为空,carry等于0退出循环


var addTwoNumbers = function (l1, l2) {
    let carry = 0, root = new ListNode(null);
    let p = root;
    while (true) {
        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        //进位
        carry = Math.floor(val / 10);
        //值
        val = val % 10;
        /* 新结点赋值 */
        p.next = new ListNode(val);
        p = p.next;
        /* 判断l1,l2 */
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        /* carry为0才能退出 */
        if (!l1 && !l2 && !carry)
            break;
    }
    return root.next;
};
进阶：
栈记录路径，从低位往高位计算，每次将旧节点放到后面即可


function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function (l1, l2) {
    let carry = 0, root = new ListNode(null);
    let stack1 = [], stack2 = [];
    while (l1) {
        stack1.push(l1);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2);
        l2 = l2.next;
    }
    let cur = null;
    while (stack1.length || stack2.length || carry) {
        /* 取出栈最后的数 */
        let val1 = stack1.length ? stack1.pop().val : 0;
        let val2 = stack2.length ? stack2.pop().val : 0;
        /* 取余数和进位 */
        val = val1 + val2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
        /* 创建新结点，将旧节点放到尾部 */
        let node = new ListNode(val);
        node.next = cur;
        cur = node;
    }
    return cur;
};

作者：aeipyuan
链接：https://leetcode-cn.com/problems/sum-lists-lcci/solution/lian-biao-qiu-he-bao-han-jin-jie-by-aeipyuan/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。