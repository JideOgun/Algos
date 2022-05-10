/*
Write a function factorial which accepts a number and returns the factrorial of thatg number.
A factorial is the product of an integer and all the integers below it.
factorial zero is always 1.

*/

function factorial (n) {
if(n === 0) return 1;
return n * factorial(n - 1)
}

console.log(factorial(5))