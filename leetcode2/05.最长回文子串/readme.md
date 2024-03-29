## 题目 05.最长回文子串


### 解题思路
  第五个方法叫做Manacher算法，是一种线性时间的方法，非常巧妙。引入一个技巧，可以使得奇数和偶数的情况统一处理。具体做法如下：abba转换为#a#b#b#a#，也就是在每一个字符两边都加上一个特殊字符，这样，不管是奇数长度的字符串还是偶数长度的字符串就都能转化为奇数长度的字符串了。
  然后创建一个新的P[i]表示，以第i个字符为中心的回文字串的半径。例如上面的例子，对应的P如下,设S为原始字符串：
  S	#	a	#	b	#	b	#	a	#
  P	1	2	1	2	5	2	1	2	1
  通过观察上面的表，大家可以发现P[i]-1就是实际回文字串的长度。如果知道P，遍历一次就知道最长的回文子串。可以该如何计算P呢？这是这个算法最核心的部分。
