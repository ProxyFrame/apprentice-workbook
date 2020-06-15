// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

module.exports = (initial, words) => {
    let shareArray = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (initial == word.substring(0, initial.length)) {
            shareArray.push(word);
        }
    }
    return shareArray;
}