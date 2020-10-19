## 题目 01.03.URL化
URL化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。（注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）

示例1:

 输入："Mr John Smith    ", 13
 输出："Mr%20John%20Smith"
示例2:

 输入："               ", 5
 输出："%20%20%20%20%20"
提示：

字符串长度在[0, 500000]范围内。


### 解题思路
  1.解法1
自带API 解法，js开始作为浏览器的脚本语言，对于URL的编码问题准定是自带API的。但是API有三个，分别是

escape()、encodeURI()、encodeURIComponent()

1.escape()函数
定义和用法
escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。

语法
escape(string)

参数 描述
string 必需。要被转义或编码的字符串。

返回值
已编码的 string 的副本。其中某些字符被替换成了十六进制的转义序列。

说明
该方法不会对 ASCII 字母和数字进行编码，也不会对下面这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。其他所有的字符都会被转义序列替换。

2.encodeURI()函数
定义和用法
encodeURI() 函数可把字符串作为 URI 进行编码。

语法
encodeURI(URIstring)

参数 描述
URIstring 必需。一个字符串，含有 URI 或其他要编码的文本。

返回值
URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

说明
该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。

该方法的目的是对 URI 进行完整的编码，因此对以下在 URI 中具有特殊含义的 ASCII 标点符号，encodeURI() 函数是不会进行转义的：;/?:@&=+$,#

3.encodeURIComponent() 函数
定义和用法
encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。

语法
encodeURIComponent(URIstring)

参数 描述
URIstring 必需。一个字符串，含有 URI 组件或其他要编码的文本。

返回值
URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

说明
该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。

其他字符（比如 ：;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。

提示和注释
提示：请注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。

4 总结：
通过对三个函数的分析，我们可以知道：

escape()除了 ASCII 字母、数字和特定的符号外，对传进来的字符串全部进行转义编码，因此如果想对URL编码，最好不要使用此方法。

而encodeURI() 用于编码整个URI,因为URI中的合法字符都不会被编码转换。

encodeURIComponent方法在编码单个URIComponent（指请求参 数）应当是最常用的，它可以将参数中的中文、特殊字符进行转义，而不会影响整个URL。

测试


console.log(escape("http://www.w3school.com.cn"));// http%3A//www.w3school.com.cn
console.log((escape("http://www.w3school.com.cn/My first/")));//http%3A//www.w3school.com.cn/My%20first/

console.log(escape("?!=()#%&")); // %3F%21%3D%28%29%23%25%26
console.log('\n');
console.log((encodeURI("http://www.w3school.com.cn"))); //http://www.w3school.com.cn
console.log((encodeURI("http://www.w3school.com.cn/My first/"))); // http://www.w3school.com.cn/My%20first/
console.log((encodeURI(",/?:@&=+$#"))); // ,/?:@&=+$#
console.log('\n');
console.log((encodeURIComponent("http://www.w3school.com.cn"))); // http%3A%2F%2Fwww.w3school.com.cn
console.log((encodeURIComponent("http://www.w3school.com.cn/p 1/id?=giao"))); // http%3A%2F%2Fwww.w3school.com.cn%2Fp%201%2Fid%3F%3Dgiao
console.log((encodeURIComponent(",/?:@&=+$#")))//%2C%2F%3F%3A%40%26%3D%2B%24%23

综上：

思路：用substring 限制一下长度，然后通过encodeURI来改一下空格就ok了。


var replaceSpaces = function(S, length) {
  return encodeURI(S.substring(0,length))
};
2.解法2
思路:

还是利用substring限制长度，然后通过split分隔空格，然后再用join把%20加进去，造成一个替换的感觉。


var replaceSpaces = function(S, length) {
   return S.substr(0, length).split(' ').join('%20')
};
3.解法3
思路：正则大法好，可以自行去补一下正则，这里不赘述了


var replaceSpaces = function(S, length) {
  return S.substr(0, length).replace(/\s/g, '%20')
};
