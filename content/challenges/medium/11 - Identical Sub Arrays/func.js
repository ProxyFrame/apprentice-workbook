// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {
    let arrTally = 0;
    for (let i = 0; i < arr.length; i++) {
        let currArr = arr[i];
        if (currArr.length == 1) {
            arrTally++;
        }
        if (currArr.length > 1) {
            if (currArr[0] == currArr[currArr.length - 1]) {
                arrTally++
            }
        }
    }
return arrTally
}

// dump each individual array values into a temp array and check each
// new element against it