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


//     let x = 0;
//     let word = words[x];
//     do {
//         for (i = 0; i < initial.length; i++) {
//             if (initial[i] == word[i]) {
//                 shareArray.push(word);
//             }
//         x++;
//         }
//     } while (x < words.length);
//     return shareArray;
// }

// if initial[0] = word[0] -> through initial[initial.length - 1] = word[initial.length - 1] -> push words[x] into shareArray


        // do a do while loop with a for loop inside?

        // for (let prefixTest = 0; prefixTest < initial.length; prefixTest++) {
        //     if (initial[prefixTest] ) {}
        //     if () {}
        //     for (i = 0; i < words.length; i++) {
        //         if (words[i] == ) {
        //             shareArray.push(words[i]);
        //         }
        //     }
//     }
// return shareArray
// }

// needs to check as many letters as are in initial, in words.
// eg (initial = ba; word = bank) -> have to compare position to position
// 