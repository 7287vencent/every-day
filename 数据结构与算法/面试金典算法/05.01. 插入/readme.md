## 题目 05.01. 插入
插入。给定两个32位的整数N与M，以及表示比特位置的i与j。编写一种方法，将M插入N，使得M从N的第j位开始，到第i位结束。假定从j位到i位足以容纳M，也即若M = 10 011，那么j和i之间至少可容纳5个位。例如，不可能出现j = 3和i = 2的情况，因为第3位和第2位之间放不下M。

示例1:

 输入：N = 10000000000, M = 10011, i = 2, j = 6
 输出：N = 10001001100
示例2:

 输入： N = 0, M = 11111, i = 0, j = 4
 输出：N = 11111

### 解题思路

看到 po 上来的很多解题没有举出具体例子，直接带着具体例子写下解题。

```
N: 11111111(255)
M: 0101(5)
i: 3
j: 6
```
把 M 插入 N 的第6位到第3位，得到的结果应该是 10101111(175)。要想得到这个结果应该做三步

- 将 N 的 第j位 到 第i位 置位 0。11111111 -> 10000111
- 将 M 左移i位。0101 -> 00101000
- 将上述两个值做或计算。 10000111 | 00101000 = 10101111
  
这三个步里第一步 "将 N 的 第j位 到 第i位 置位 0" 是比费劲的。可以分为三步：

- 首先可以将 N 的 第j+1位到最高位保持不变，第0 到 第j位 设为0。 具体做法是 N 先右移j+1， 再左移 j+1。得到 nj
```
nj := N >> (j+1) << (j+1)
10000000 = 11111111 >> 7 << 7
```
- 其次将 第i位到最高位 设为0， 其余位保持不变。具体做法是 N 先右移 i 在左移 i, 此时 N 的 0 到 第i 位都变成了0。然后在和 N 做异或操作，得到 ni
```
ni := N >> i << i ^ N
00000111 = 11111111 >> 3 << 3 ^ 11111111
         = 11111000 ^ 11111111
```
- 第三步将上述两步骤得到的 ni, nj 做 或操作，就可以得到 N 的 第i位 到 第j位 为0的 nz
```
nz = nj | ni
10000111 = 10000000 | 00000111
```
将 M 左移i位, 可以将 M(原来的M值) 对应到 N 的 第j到第j位。

```
mi := M << i
00101000 = 0101 << 3
```
将 mi 和 nz 做或操作即可得到结果

```
res := mi | nz
10101111 = 00101000 | 10000111
```
代码
```
func insertBits(N int, M int, i int, j int) int {
	nj := N >> (uint(j) + 1) << (uint(j) + 1)
	ni := (N >> uint(i) << uint(i)) ^ N
	nz := ni | nj
	return nz | M << uint(i)
}
```