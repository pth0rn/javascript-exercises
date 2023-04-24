const palindromes = function (word) {
    let re = /[a-zA-Z]/;
    word = word.split('')
        .filter(letter => re.test(letter))
        .join('')
        .toLowerCase()

    if (word === word.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

// 'A car, a man, a maraca.'.split('').filter(letter => re.test(letter)).join('').toLowerCase();