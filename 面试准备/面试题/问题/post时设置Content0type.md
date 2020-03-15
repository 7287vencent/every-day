#### POST 时的Content-Type

常见的四种：

1. **application/x-www-form-urlencoded**

2. **multipart/form-data**

3. **application/json**

4. **text/xml**


   

## application/x-www-form-urlencoded

这应该是最常见的 POST 提交数据的方式了。浏览器的原生 form 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。请求类似于下面这样



![img](https:////upload-images.jianshu.io/upload_images/6760918-51fcd469796d9ade.png)

application/x-www-form-urlencoded 



首先，Content-Type 被指定为 application/x-www-form-urlencoded；其次，提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。大部分服务端语言都对这种方式有很好的支持。
 很多时候，我们用 Ajax 提交数据时，也是使用这种方式。例如 JQuery 和 QWrap 的 Ajax，Content-Type 默认值都是「application/x-www-form-urlencoded;charset=utf-8」。

## multipart/form-data

这又是一个常见的 POST 数据提交的方式。我们使用表单上传文件时，必须让 form 的 enctyped 等于这个值。直接来看一个请求示例：



![img](https:////upload-images.jianshu.io/upload_images/6760918-b434a9c29ba4fe49.png)

multipart/form-data 



这个例子稍微复杂点。首先生成了一个 boundary 用于分割不同的字段，为了避免与正文内容重复，boundary 很长很复杂。然后 Content-Type 里指明了数据是以 mutipart/form-data 来编码，本次请求的 boundary 是什么内容。消息主体里按照字段个数又分为多个结构类似的部分，每部分都是以 --boundary 开始，紧接着内容描述信息，然后是回车，最后是字段具体内容（文本或二进制）。如果传输的是文件，还要包含文件名和文件类型信息。消息主体最后以 --boundary-- 标示结束。

这种方式一般用来上传文件，各大服务端语言对它也有着良好的支持。上面的例子是用户登录采用的方式。

上面提到的这两种 POST 数据的方式，都是浏览器原生支持的，而且现阶段原生 form 表单也只支持这两种方式。但是随着越来越多的 Web 站点，尤其是 WebApp，全部使用 Ajax 进行数据交互之后，我们完全可以定义新的数据提交方式，给开发带来更多便利。

## application/json

application/json 这种方案，可以方便的提交复杂的结构化数据， 这个 Content-Type 作为响应头大家肯定不陌生。现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串。

由于 JSON 规范的流行，除了低版本 IE 之外的各大浏览器都原生支持 JSON.stringify，服务端语言也都有处理 JSON 的函数，使用 JSON 不会遇上什么麻烦。



![img](https:////upload-images.jianshu.io/upload_images/6760918-8c5c94fd70bf45d3.png)

application/json 

## text/xml

现在几乎不用

###### 默认情况下，标准的跨域请求是不会发送cookie等用户认证凭据的，XMLHttpRequest 2的一个重要改进就是提供了对授信请求访问的支持。



```csharp
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://www.xxx.com/api');
xhr.withCredentials = true;
xhr.onload = onLoadHandler;
xhr.send();
```

Access-Control-Allow-Credentials: true

![img](https:////upload-images.jianshu.io/upload_images/6760918-08ba6fb25cac3c53.png)

Access-Control-Allow-Credentials