// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = (word) => {
    for (let i = 0; i < word.length; i++) {
        const curLetter = word[i];
        const lastLetter = word[i - 1];
        if (curLetter === lastLetter) {
            return true;
        }
    }
    return false
}

