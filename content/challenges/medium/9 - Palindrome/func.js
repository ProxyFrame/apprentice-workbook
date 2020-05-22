// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
    let firstHalf = "";
    let secondHalf = "";
    if (str.length >= 2) {
        for (let i = 0; i <= (str.length - 1) / 2; i++) {
            firstHalf += str[i];
        }
        for (let j = str.length - 1; j >= (str.length - 1) / 2; j--) {
            secondHalf += str[j];
        }
        if (firstHalf !== secondHalf) {
            return false;
        }
        return true;
    }
    return true;
}

// first clause is "" = palindrome
// next, check if str is even or odd
// if even, check if first half = second half in reverse order.
// alternatively - reference half the word (rounding up) if same about the middle.
// if odd, are the clauses on either side of the letter the same in reverse order?
// if yes = true
// abcba
// 5/2 -> round up to 3 - > characters at position  0 - 2 and position 3 - 5 are the same