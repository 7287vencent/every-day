## 题目 05.06. 整数转换
整数转换。编写一个函数，确定需要改变几个位才能将整数A转成整数B。

示例1:

 输入：A = 29 （或者0b11101）, B = 15（或者0b01111）
 输出：2
示例2:

 输入：A = 1，B = 2
 输出：2
提示:

A，B范围在[-2147483648, 2147483647]之间

### 解题思路
  异或运算
思路
利用异或运算可以很方便地比较 AA 和 BB 的每一位是否不同，不相同的位为 11，相同的位为 00
问题于是转化为计算异或运算结果中 11 的个数
代码
逐位判断是否为 1
略
每次循环将末位 1 变为 0
x &= (x - 1)可以将x的最后一位1变为0，故循环直到x为0，循环的次数即为x中1的个数
注意负数的处理
cpppython
