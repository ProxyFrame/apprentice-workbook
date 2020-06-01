// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {
    let wordArray = str.split(" ");
    let newSent = "";
    for (i = 0; i < wordArray.length; i++) {
        let capital = wordArray[i].toUpperCase();
        wordArray[i] = capital.substring(0,1) + wordArray[i].substring(1);
    }
    return wordArray.join(" ")
}