function replaceSpace (str) {
  return str.replace(/\s/g, '%20')
}
function replaceSpace (str) {
  var reg = new RegExp(" ", "g");
  var newstr = str.replace(reg, "%20");
  return newstr;
}