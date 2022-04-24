// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method
console.time();
const reverseInPlace = (arr) => {
    newArr = [];
let L = arr.length;
for (let i = 0; i < arr.length; i++) {
    const e = arr[L-1];
    newArr.push(e);
    L--;  
}

for (let j = 0; j < newArr.length; j++) {
    const n = newArr[j];
    arr.push(n);
    arr.shift(j);   
}
console.log(arr);
return arr;
};
console.timeEnd();
reverseInPlace([1, 2, 3, 4, 5, 67, 56, 98, 23, 45, 78, 23, 89, 212, 45645, 6767]);