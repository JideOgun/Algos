/*
Given an integer n, return the number of ways
 you can write n as the sum of consecutive positive integers.
*/

/*
Pseudocode
start result at one because N is always gonna add up to itself;
loop N number of times, starting i from 2;
if the number N divided by the current iteration i is less than Math.floor of (i + 1)/2 break;
if i modulo 2, check if the number N modulo i === 0, if so increment result
else if the Number N divided by the current iteration i is 0.5 then increment result

*/

function consecutiveNumbersSum(N) {
  let result = 1;
  for (let i = 2; i < N; i++) {
    if (N / i < Math.floor((i + 1) / 2)) {console.log('basecase ' + i, N)
     break;}
    if (i % 2) {
      if (N % i === 0) result++;
      console.log('divisible side ' + i, N)
    } else {
      if ((N / i) * 10 - Math.floor(N / i) * 10 === 5) result++;
      console.log('0.5 side ' + i, N)
    }
  }
  return result;
}

console.log(consecutiveNumbersSum(15));

