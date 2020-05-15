// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    if (total != 55) {
        return 55 - total;
    }
}