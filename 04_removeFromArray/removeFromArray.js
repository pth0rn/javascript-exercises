const removeFromArray = function(arr, ...remove) {
    for (el of remove) {
        if (arr.includes(el)) {
            arr.splice(arr.indexOf(el),1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
