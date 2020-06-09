// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
    str = str.toLowerCase();
    let strArr = str.split("");
    let isogram = true;
    let isoCheck = strArr.shift();
    while (strArr.length > 0) {
        for (i = 0; i < strArr.length; i++) {
            if (isoCheck == strArr[i]) {
                isogram = false;
                break;
            }
        }
        if (isogram) {
            isoCheck = strArr.shift();
        } else {
            break;
        }
    }
    return isogram
}