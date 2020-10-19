var AnimalShelf = function () {
  this.animal = [[], []]
};

/** 
* @param {number[]} animal
* @return {void}
*/
AnimalShelf.prototype.enqueue = function (animal) {
  const [order, kind] = animal
  this.animal[kind].push(order)
};

/**
* @return {number[]}
*/
AnimalShelf.prototype.dequeueAny = function () {
  // 找到 roder 中最小的
  const [catArr, dogArr] = this.animal
  if (catArr.length && dogArr.length) {
    if (catArr[0] > dogArr[0]) {
      return [dogArr.shift(), 1]
    } else {
      return [catArr.shift(), 0]
    }
  }
  if (catArr.length) {
    return [catArr.shift(), 0]
  }
  if (dogArr.length) {
    return [dogArr.shift(), 1]
  }
  return [-1, -1]

};

/**
* @return {number[]}
*/
AnimalShelf.prototype.dequeueDog = function () {
  let dogArr = this.animal[1]
  if (dogArr.length) {
    return [dogArr.shift(), 1]
  }
  return [-1, -1]
};

/**
* @return {number[]}
*/
AnimalShelf.prototype.dequeueCat = function () {
  let catArr = this.animal[0]
  if (catArr.length) {
    return [catArr.shift(), 0]
  }
  return [-1, -1]
};

/**
* Your AnimalShelf object will be instantiated and called as such:
* var obj = new AnimalShelf()
* obj.enqueue(animal)
* var param_2 = obj.dequeueAny()
* var param_3 = obj.dequeueDog()
* var param_4 = obj.dequeueCat()
*/