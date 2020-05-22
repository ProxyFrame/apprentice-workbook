// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
    let strArray = str.split(' ');
    let tempWordArray = [];
    let wordReverse = [];
    for (let x = 0; x <= strArray.length - 1; x++) {
        if (strArray[x].length <= 4) {
            return tempWordArray.push(strArray[x]);
        }
    }
    for (let i = strArray.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
}
