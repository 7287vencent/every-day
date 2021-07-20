/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let old = [];
  score.map((item, i) => {
    old[item] = i;
  });
  let arr = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  let len = old.length - 1;
  let count = 1;
  for (let i = len; i >= 0; i--) {
    if (old[i] === undefined) {
      continue;
    }
    if (count <= 3) {
      console.log(old[i], i);
      score[old[i]] = arr[count - 1];
    } else {
      score[old[i]] = count + "";
    }
    count++;
  }
  return score;
};
findRelativeRanks([5, 6, 7, 1, 2, 3]);
