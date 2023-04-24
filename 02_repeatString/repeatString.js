const repeatString = function(str, num) {
    if (num === 0) return '';
    if (num<1) return 'ERROR';
    let fullStr = '';
    for (let i = 1; i <= num; i++) {
        fullStr += str;
    }
    return fullStr;
};

// Do not edit below this line
module.exports = repeatString;
