// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => arr.map(int => (int % 2 == 0 ? int - 2 * n : int + 2 * n));

//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             let evenVal = arr[i] - 2;
//             for (let j = n - 1; j > 0; j--) {
//                 evenVal -= 2;
//             }
//             newArray.push(evenVal);
//         }
//         if (arr[i] % 2 != 0) {
//             let oddVal = arr[i] + 2;
//             for (let m = n - 1; m > 0; m--) {
//                 oddVal += 2;
//             }
//             newArray.push(oddVal);
//         }
//     }
//     return newArray;
// }