/*
Given a string s which consists of lowercase or uppercase letters,
 return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

var longestPalindrome = function (s) {
  let ans = 0;
  let keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;

    if (keys[char] % 2 == 0) {
      ans += keys[char];
      keys[char] = 0;
    }
  }
  console.log(keys, ans);

  return ans < s.length ? ans + 1 : ans;
};
