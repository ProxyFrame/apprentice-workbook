// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {
    let transformation = 2 * n;
    let newArray = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            let newVal = arr[i] - transformation;
            newArray.push(newVal);
        }
        if (arr[i] % 2 != 0) {
            let newVal = arr[i] + transformation;
            newArray.push(newVal);
        }
    }
    return newArray;
}

// let transformation = 2 * n;
// let newArray = [];
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArray.push((arr[i] - transformation));
//         break;
//     }
//     newArray.push((arr[i] + transformation));
// }
// return newArray;
// }