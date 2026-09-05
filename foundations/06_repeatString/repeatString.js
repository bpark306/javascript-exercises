const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';

    let result = ""

    for (let idx = 0; idx < num; idx++) {
        result += string;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
