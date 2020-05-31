// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
    for (let i = str.length - 1; i > 0; i++) {
        for (let n = 0; n < str.length - 1; n++) {
            if (str[i] == str[n]) {
                return false;
            }
            return true;
        }
    }
}


//     let test = true;
//     let altStr = str.toLowerCase();
//     let letterTally = {};
//     if (typeof str === undefined) {
//         return true;
//     }
//     for (i = 0; i <= altStr.length; i++ {
//     let letter = altStr.charAt(i);
//     if (letterTally > 1) {
//         return test = false;
//     }
// }
//     return test
// }
// loop across a word and determine if a letter appears more than once.