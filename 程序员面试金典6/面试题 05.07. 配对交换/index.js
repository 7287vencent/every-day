/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
  let even = (num & 0xaaaaaaaa) >> 1;
  let odd = (num & 0x55555555) << 1;
  return even | odd;
};
