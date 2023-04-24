const fibonacci = function(num) {
    num = Number(num);
    if (num<0) return "OOPS";
    let previous = 0;
    let current = 1; //starting number
    let temp = 0
    for (let i = 1; i < num; i++) {
        temp = current + previous;
        previous = current;
        current = temp;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
