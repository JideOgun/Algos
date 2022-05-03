/*
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent.
This function should mimic the functionality of the Math.pow().
Do not worry about negative bases and exponents.
Use Recursion.
*/

function power(base, exponent) {
  // I want to multiply the base by itself the number of times of what the exponent is
  // what is my base case ?
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 4));
