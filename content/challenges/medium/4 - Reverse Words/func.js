// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
    return str
        .split(" ")
        .map(currWord => {
            (currWord.length < 5) ? currWord = currWord : currWord = currWord.split('').reverse().join('');
            return currWord;
        })
        .join(" ");
    }

//     let strArr = str.split(" ");
//     let finalStr = "";
//     for (i = 0; i < strArr.length; i++) {
//         let tempWord = "";
//         let word = strArr[i];
//         if (word.length >= 5) {
//             for (x = word.length - 1; x >= 0; x--) {
//                 let letter = word[x];
//                 tempWord += letter;
//             }
//             finalStr += (" " + tempWord);
//         } else {
//             finalStr += (" " + word);
//         }
//     }
//     return finalStr.substring(1)
// }