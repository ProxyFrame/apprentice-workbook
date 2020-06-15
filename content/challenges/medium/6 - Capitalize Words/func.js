// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {
    return str
        .split(" ")
        .map(currWord => {
            let capital = currWord.toUpperCase().substring(0, 1);
            return capital + currWord.substring(1);
        })
        .join(" ");
}

//     wordArray.forEach(currWord => {
//         let capital = currWord.toUpperCase().substring(0,1);
//         newSent.push(capital + currWord.substring(1));
//     })
//     return newSent.join(" ")
// }

