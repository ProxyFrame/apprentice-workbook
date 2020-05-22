// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = (word) => {
    let wordArray = word.split("");
    let newWord = "";
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] != wordArray[i - 1]) {
            newWord += wordArray[i];
        }
    }
    return newWord
}

// if a letter is the same as the letter before it, dont add it from array
