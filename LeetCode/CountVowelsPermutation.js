/*
Given an integer n, your task is to count how many strings of length n can be formed under the following rules:

Each character is a lower case vowel ('a', 'e', 'i', 'o', 'u')
Each vowel 'a' may only be followed by an 'e'.
Each vowel 'e' may only be followed by an 'a' or an 'i'.
Each vowel 'i' may not be followed by another 'i'.
Each vowel 'o' may only be followed by an 'i' or a 'u'.
Each vowel 'u' may only be followed by an 'a'.
Since the answer may be too large, return it modulo 10^9 + 7.

*/

function countVowelPermutation(n) {
    const mod = 1e9 + 7;
    // console.log(5 % mod)
  let dp = Array(5).fill(1);
  console.log(dp);

  for (let i = 1; i < n; i++) {
    let ndp = Array(5).fill(0);
    console.log(ndp);
    ndp[0] = dp[1]; // a --> e
    ndp[1] = (dp[0] + dp[2]) % mod; // e --> a/i
    ndp[2] = (dp[0] + dp[1] + dp[3] + dp[4]) % mod; // i --> a/e/o/u
    ndp[3] = (dp[2] + dp[4]) % mod; // o --> i/u
    ndp[4] = dp[0]; // u --> a
    console.log(ndp)

    dp = ndp;
  }
  console.log(dp)
  let result = 0;
  for(const e of dp) {
      result += e;
      if(result >= mod) {
          result -= mod
      }
  }
  return result
}
console.log(countVowelPermutation(1));

