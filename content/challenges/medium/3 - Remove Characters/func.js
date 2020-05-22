// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {
    let correction = "";
    for (let i = 0; i < str.length; i++) {
        const curChar = str[i];
        if (curChar !== "!" && curChar !== "@" && curChar !== "#" && curChar !== "$" && curChar !== "%" && curChar !== "." && curChar !== "&" && curChar !== "(" && curChar !== ")") {
            correction += curChar;
        }
    }
    return correction;
}

        // 
        // switch (str[i]) {
        //     case "!":
        //     case "@":
        //     case "$":
        //     case "%":
        //     case "^":
        //     case "&":
        //     case "*":
        //     case "(":
        //     case ")":
        //     case ".":
        //         break
        //     default:
        //         return correction += str[i];
        // }