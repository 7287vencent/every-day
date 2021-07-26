/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let res = [];
  for (let sum = 0; sum < list1.length + list2.length - 1; sum++) {
    for (let i = 0; i <= sum; i++) {
      if (
        i < list1.length &&
        sum - i < list2.length &&
        list1[i] == list2[sum - i]
      )
        res.push(list1[i]);
    }
    if (res.length > 0) break;
  }
  return res;
};
