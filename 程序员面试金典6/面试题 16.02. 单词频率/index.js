/**
 * @param {string[]} book
 */
var WordsFrequency = function (book) {
  this.map = new Map();
  for (let item of book) {
    this.map.set(item, (this.map.get(item) || 0) + 1);
  }
};

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
  return this.map.get(word) || 0;
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */
