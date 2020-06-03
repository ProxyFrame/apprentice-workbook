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


//     str = str.toLowerCase();
//     for (let initial = 0; initial < str.length; initial++) {
//         for (let letComp = initial + 1; letComp < str.length; letComp++) {
//             if (str[initial] == str[letComp]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
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