const reverseString = function(string) {
    result = "";
    for (let idx = string.length - 1; idx >= 0; idx--) {
        result += string[idx];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
