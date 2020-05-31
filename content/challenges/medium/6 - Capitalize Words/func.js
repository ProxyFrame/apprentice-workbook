// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {
    let wordArray = str.split(" ");
    let newSent = "";
    let i = 0;
    while(i < wordArray.length) {
        newSent += wordArray[i];
        i++
    }
    // while i < wordArray.length; i++ 

return newSent
}