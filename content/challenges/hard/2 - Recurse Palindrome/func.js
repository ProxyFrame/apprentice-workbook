// Write a function that recursively determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {

  let strArray = str.split('');
  function palinCheck(strArray) {
    let index = strArray.length;
    if (index <= 1) {
      return strArray;
    }
    else if (strArray[0] === strArray[index - 1]) {
      strArray.pop();
      strArray.shift();
      return strArray;
    }
    return palinCheck(strArray);
  }
  return (strArray.length <= 1)
  // put your code here
  // don't touch anything else
}
