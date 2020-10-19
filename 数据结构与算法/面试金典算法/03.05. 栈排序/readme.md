## 题目 03.05. 栈排序
栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。该栈支持如下操作：push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。

示例1:

 输入：
["SortedStack", "push", "push", "peek", "pop", "peek"]
[[], [1], [2], [], [], []]
 输出：
[null,null,null,1,null,2]
示例2:

 输入： 
["SortedStack", "pop", "pop", "push", "pop", "isEmpty"]
[[], [], [], [1], [], []]
 输出：
[null,null,null,null,null,true]
说明:

栈中的元素数目在[0, 5000]范围内。


### 解题思路
  利用辅助栈可以保证每次插入新元素的适合s1都是有序的，
比如 s1 = {1,5,6,8,9},插入 7
先把 9和8 插入 s2, s2 = {9,8}
再把 7 插入 s1, s1 = {1,5,6,7}
再把 s2 中数字插入 s1, s1 = {1,5,6,7,8,9}
这样思路最简单但是也比较麻烦



作者：yizhe-shi
链接：https://leetcode-cn.com/problems/sort-of-stacks-lcci/solution/cliang-chong-fu-zhu-zhan-jie-fa-by-yizhe-shi/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。