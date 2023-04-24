const removeFromArray = function(arr, ...remove) {
    return arr.filter(el => !remove.includes(el))
};

// Do not edit below this line
module.exports = removeFromArray;
