/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  let pos = Array(n).fill(0);
  for (let book of bookings) {
    pos[book[0] - 1] += book[2];
    if (book[1] < n) {
      pos[book[1]] -= book[2];
    }
  }
  for (let i = 1; i < n; i++) {
    pos[i] += pos[i - 1];
  }
  return pos;
};
