const sumAll = function(a, b) {
    if (a < 0 || b < 0) return 'ERROR';
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    if (Number.isNaN(a) || Number.isNaN(b)) return 'ERROR';
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    return (max - min + 1) * (min + max) / 2;
};

// Do not edit below this line
module.exports = sumAll;
