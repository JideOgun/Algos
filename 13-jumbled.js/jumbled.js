/*Jumbled Numbers
Programming challenge description:
In this challenge, you're given a string containing jumbled letters 
from several concatenated words. Each word is a numeral from zero to nine.
numeral may be used multiple times in the jumbled string.

Write a program that returns integers corresponding to the numerals used 
to form the jumbled string. Integers must be sorted in ascending order.

For example, reuonnoinfe are shuffled letters of the strings one four nine. Your program's output should be 149.*/
// 
var jumbledLetters = function(letters) {
    const arr = new Array(10).fill(0);
    for (const c of letters) {
        if (c === 'z') arr[0]++
        else if (c === 'x') arr[6]++
        else if (c === 'w') arr[2]++
        else if (c === 'u') arr[4]++
        else if (c === 'g') arr[8]++
        else if (c === 's') arr[7]++    //6, 7
        else if (c === 'v') arr[5]++    //5, 7
        else if (c === 'r') arr[3]++    //0, 3, 4
        else if (c === 'o') arr[1]++    //0, 1, 2, 4
        else if (c === 'i') arr[9]++    //5, 6, 8, 9
    }
    console.log(arr)
    arr[7] -= arr[6];
    arr[5] -= arr[7];
    arr[3] -= arr[0] + arr[4];
    arr[1] -= arr[0] + arr[2] + arr[4];
    arr[9] -= arr[5] + arr[6] + arr[8];
    let res = "";
    for (let i = 0; i <=9; i++) {
        for (let j = 0; j < arr[i]; j++) {
            res += i;
        }
    }
    return res;
};
    var letters = 'onetwothree';
    console.log(jumbledLetters(letters));
