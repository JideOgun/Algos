/*
Write a function called maxSubArraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.

Given an array of integers and a number, write a function called maxSubArraySum, which finds the maximum sum of a subarray
with the length of the number passed to the function.

Note that a sub array must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray
of the original array but [100, 300] is not.

*/

function maxSubArraySum(arr, n) {
  // create a variable to hold the sum of n numbers and initialize to 0
  var tempSum = 0;
  // create a variable to hold the max Sum of n numbers
  var maxSum = 0;
  // loop over array and add the first n numbers
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  console.log('maxSum - ' + maxSum)
// set the tempSum to the maxSum
tempSum = maxSum;
// loop over arr, and remove the previous element before the new n numbers and add the new number of the n numbers
for (let i = n; i < arr.length; i++) {
    // set the value of temp to equal tempsum - arr[i - n] since n is constant and i changes
    // thus i will start at 3 in this case and n will stay at 3...so with each iteration
    // the value being subtracted will always be the element that preceeds the window of numbers
    // then add i which starts at n but increments to the element at the forefront of the window...
    tempSum = tempSum - arr[i - n] + arr[ i]
    // return the max value between the tempSum, and the maxSum since they interchange, 
    // depending on if tempSum becomes the new max Value,  until the loop is over
    maxSum = Math.max(tempSum, maxSum)
}
return maxSum

}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
