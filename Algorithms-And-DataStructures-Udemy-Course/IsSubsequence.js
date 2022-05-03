/*
Write a function called isSubsequence which takes two strings and checks whether
the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear somewhere in the second string
without their order changing.
return true if does, else return false. 
*/

// set up left pointer and initialize it to the first char of the strA
// set up next pointer and intialize it to the first char of strB
// if the left = next pointer then move both up left++, next ++
//if left != next, move next+
function isSubsequence (strA, strB) {
let left = 0;
let right = 0;

while(left <= strA.length - 1) {
    console.log(strA[left], left, strB[right], right);
    if(strA[left] === strB[right]) {
        left++;
        right++;
    } else {
        right++
    }
    if(right >= strB.length + 1) return false;
}
return true;
};

console.log(isSubsequence('hello', 'hello world'))