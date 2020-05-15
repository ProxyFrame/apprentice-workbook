// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {
    let correction = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "!" && str[i] !== "@" && str[i] !== "#" && str[i] !== "$" && str[i] !== "%" && str[i] !== "." && str[i] !== "&" && str[i] !== "(" && str[i] !== ")") {
            correction += str[i];
        }
    }
    return correction;
}


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
        //         return correction = str - str[i];
        //     default:
        //         return correction += str[i];
        // }