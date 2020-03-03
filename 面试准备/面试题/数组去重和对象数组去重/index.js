let objArr = [{ a: 1, b: 2, c: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 }, { a: 2, b: 4 }]

function noEqual (obj1, obj2) {
  let keys2 = Object.keys(obj2)
  for (let key in obj1) {

    // obj2 中存在  或者obj2 中不存在
    if (obj2[key] !== obj1[key] || !obj2[key]) {
      return true
    }
    // obj2 中有，但是obj1 中没有
    let index = keys2.indexOf(key)
    if (index !== -1) {
      keys2.splice(index, 1)
    }
  }
  if (keys2.length) {
    return true
  }
  return false
}

function fun1 (objArr) {
  let i = 0
  while (i < objArr.length) {
    let obj1 = objArr[i]

    for (let j = i + 1; j < objArr.length; j++) {
      let bool = noEqual(obj1, objArr[j])
      if (!bool) {
        objArr.splice(j, 1)
        j--
      }
    }
    i++
  }
  console.log(objArr)
  return objArr
}
fun1(objArr)
// //使用reduce方法将对象数组中name属性相同的项去重
// function func5(objArray) {
//   var hash = {};
//   //reduce方法有两个参数，第一个参数是一个callback，用于针对数组项的操作；第二个参数则是传入的初始值，这个初始值用于单个数组项的操作。
//   objArray = objArray.reduce(function (item, next) {//这是针对数组项操作的函数，对于每个数组项，reduce方法都会将其调用一次
//     //可使用最多四个参数来声明回调函数（第一个参数：通过上一次调用回调函数获得的值;第二个参数：当前数组元素的值；第三个参数：当前数组元素的数字索引；第四个参数：包含该元素的数组对象）
//     //这里只使用了两个参数，所以item和next分别代表上一次调用回调函数后的值和objArray项值
//     hash[next.name] ? '' : hash[next.name] = true && item.push(next);//与func3逻辑相似 
//     return item;
//   }, []);//初始值是一个空对象，使用reduce方法返回的是空对象通过叠加执行之后的结果
//   return objArray;
// }