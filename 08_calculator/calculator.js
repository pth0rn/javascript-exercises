const add = function(...nums) {
  return nums.reduce( (accum, num) => accum+num )
};

const subtract = function(...nums) {
	return nums.reduce( (accum, num) => accum-num )
};

const sum = function(numArr) { 
  if (numArr.length === 0) return 0;
	return numArr.reduce( (accum, num) => accum+num )
};

const multiply = function(nums) {
  return nums.reduce( (accum, num) => accum*num )
};

const power = function(num, power) {
	return num**power
};

const factorial = function(num) {
  let factorial = 1;
	for (let i = 1; i<=num; i++){
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
