// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes: 
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.
module.exports = (int1, int2) => {
    let newVal = int1;
    let newVal2 = int2;
    while (newVal != newVal2) {
        if (newVal > newVal2) {
            newVal = newVal - newVal2;
        } else {
            newVal2 = newVal2 - newVal;
        }
    }
        return newVal2
    }


// if (a < 0) a = -a;
// if (b < 0) b = -b;
//     let denom = 1;
//     for (let i = 1; i <= int1; i++) {
//         if (int1 % i == 0) {
//             denom = i;
//         }
//     }
//     for (let j = 1; j <= int2; i++) {
//         if (int2 % i == 0) {
//             denom = i;
//         }
//     }
// }
// largest shared value where int%num = 0
// have loop put divisible numbers in an array
//compare arrays for in1 and int2 and pick the largest number they share.