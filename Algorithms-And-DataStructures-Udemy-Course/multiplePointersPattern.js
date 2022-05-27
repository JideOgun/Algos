// multiple pointers pattern
/*
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair 
where the sum is zero.
Return an array that includes both values that sum to zero or undefined if a pair does not exist.

Note: Array has to be sorted or it wont work
*/

function sumZero(arr) {
  // set a pointer starting at the first index of the array
  let left = 0;
  // set a pointer starting at the last index of the array
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-5, -4, -3, -2, -1, 0, 1 , 2, 3])
console.log(sumZero([-5, -4, -3, -2, -1, 0]))