// Write a function that recursively determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
  return palinCheck(str.split(''))
}
function palinCheck(strArray) {
  let length = strArray.length;
  if (length <= 1) {
    return true;
  }
  else if (strArray[0] === strArray[length - 1]) {
    return palinCheck(strArray.slice(1, length - 1));
  }
  return false;
}