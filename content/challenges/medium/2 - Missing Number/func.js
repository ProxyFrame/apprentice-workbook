// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
    let newArray = [];
    for (let organizer = 1; organizer <= 10; organizer++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == organizer) {
                newArray.push(organizer);
            }
        }
    }
    for (let n = 1; n <= 10; n++) {
        if (newArray[n - 1] != n) {
            return n;
        }
    }
}