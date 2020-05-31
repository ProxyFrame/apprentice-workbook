// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
    let strArr = str.split(" ");
    let finalStr = "";
    for (i = 0; i < strArr.length; i++) {
        let tempWord = "";
        let word = strArr[i];
        if (word.length >= 5) {
            for (x = word.length - 1; x >= 0; x--) {
                let letter = word[x];
                tempWord += letter;
            }
            finalStr += (" " + tempWord);
        } else {
            finalStr += (" " + word);
        }
    }
    return finalStr.substring(1)
}


//     let strArray = str.split(' ');
//     let finalStr = "";
//     for (let i = 0; i < strArray.length; i++) {
//         if (strArray[i].length < 5) {
//             finalStr += (" " + strArray[i]);
//         } else {
//             let newWord = strArray[i];
//             let wordReverse = "";
//             for (let x = newWord.length - 1; x >= 0; x--) {
//                 wordReverse += newWord[x];
//             }
//             finalStr += (" " + wordReverse);
//         }
//     }
//     return finalStr;
// }
