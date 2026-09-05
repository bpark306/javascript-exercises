const removeFromArray = function(array, ...nums) {
    const param = new Set(nums);
    for (let idx = array.length - 1; idx >= 0; idx--) {
        if (param.has(array[idx])) {
            array.splice(idx, 1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
