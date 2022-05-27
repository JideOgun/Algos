/*
Write a recursive function fib which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, 13
*/

// This recursion technique is non performant
// function fib (n) {
// if(n <= 2) return 1;
// return fib(n-1) + fib(n-2)
// }

// Refactored to use Dynamic Programming technique

function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
// console.log(fib(4));

// bottom up approach using an array
function Fibonacci(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
console.log(Fibonacci(5));
