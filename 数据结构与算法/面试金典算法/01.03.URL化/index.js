/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  return S.substr(0, length).replace(/\s/g, '%20')
};