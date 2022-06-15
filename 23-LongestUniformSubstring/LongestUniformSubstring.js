/*
Let us take an example string like “abcdddss“. 
The question is asking us to return the longest sub-string with the same characters. In this case the longest uniform sub-string is “ddd". So, we need 
to return d as the repeating character and 3 as number of times it repeats.
also return the index of the start of the repeating char and end in an array
[3, 5]

*/

function longestUniformSubstring (str) {
if(str.length === 0) return [-1, 0]
longest = 0;
let seen = {};
let start = 0;

for(var i = 0; i < str.length; i++) {
    let char = str[i];
    if(seen[char]) {
        start = Math.max(start, seen[char])
    }

    longest = Math.max(longest, i - start + 1)
    seen[char] = i ;
    console.log(seen)
}
return longest;
}

console.log(longestUniformSubstring('abcdddss'))
