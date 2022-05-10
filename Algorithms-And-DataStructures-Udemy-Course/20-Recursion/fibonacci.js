/*
Write a recursive function fib which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, 13
*/


function fib (n) {
if(n <= 2) return 1;
// console.log(fib(n-1) + fib(n-2));
return fib(n-1) + fib(n-2)
}

console.log(fib(4))