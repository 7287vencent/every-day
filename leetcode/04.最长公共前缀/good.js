var longestCommonPrefix = function (strs) {
  var firstStrs = strs[0];
  var result = '';
  if (!strs.length) {
    return result;
  }
  for (var i = 0; i < firstStrs.length; i++) {
    for (var j = 1; j < strs.length; j++) {
      if (firstStrs[i] != strs[j][i]) {
        return result;
      }
    }
    result += firstStrs[i];
  }
  return result;
};
