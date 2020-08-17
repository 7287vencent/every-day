### 原因

 1. `考虑到兼容性的问题`：在旧版本的浏览器中undefined可以被重写
 2. `void 0 会忽略计算结果返回 undefined` ,可以准确地获取预期的 undefined 值
 3. `void 0代替undefined省3个字节。`


#### void
 void 运算符对给定的表达式进行求值，会忽略计算结果并始终返回 undefined。
```
var value1 = 'hi';
console.log(value1); //"hi"

var value2 = void 'hi';
console.log(value2); //undefined
```
因此，我们可以利用这一点准确地获取预期的 undefined 值。
```
var value;
console.log(value === void 0); //true
console.log(value === void(0)); //true
```

除了防止被重写外，还可以减少字节。`void 0代替undefined省3个字节。`
类似的还有很多常用的写法，看到别人这样写的时候就当是老司机的套路就行了。
```
//取整
parseInt(a,10); //Before
Math.floor(a); //Before
a>>0; //Before
~~a; //After
a|0; //After
 
//四舍五入
Math.round(a); //Before
a+.5|0; //After
 
//内置值
undefined; //Before
void 0; //After, 快
0[0]; //After, 略慢
 
//内置值
Infinity;
1/0;
 
//布尔值短写法
true; //Before
!0; //After
 
//布尔值短写法
false; //Before
!1; //After
```