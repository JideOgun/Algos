/*
Write a function called findLongestSubString which accepts a string and returns 
the length of the longest substring
with all distinct characters
*/

function findLongestSubString(str) {
  if (str.length === 0) return 0;

  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
      console.log("start - " + start);
    }

    longest = Math.max(longest, i - start + 1);
    console.log("longest - " + longest, i);
    seen[char] = i + 1;
  }
  console.log(seen);
  return longest;
}

console.log(findLongestSubString("thisisawesome"));
