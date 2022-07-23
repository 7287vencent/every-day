/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = 0;
  for (const pile of piles) {
    high = Math.max(high, pile);
  }
  let k = high;
  while (low < high) {
    const speed = Math.floor((high - low) / 2) + low;
    const time = getTime(piles, speed);
    if (time <= h) {
      k = speed;
      high = speed;
    } else {
      low = speed + 1;
    }
  }
  return k;
};

const getTime = (piles, speed) => {
  let time = 0;
  for (const pile of piles) {
    const curTime = Math.floor((pile + speed - 1) / speed);
    time += curTime;
  }
  return time;
};
