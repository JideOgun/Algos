/*
write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer
This function should return the minimal lenght of a continguous subarray of which the sum is greater than or equal to the
integer passed to the function. If there is not one, return 0 instead.
*/

function minSubArrayLen(arr, n) {
  //
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while (start < arr.length) {
      // add up the to the number and shift the window the right if total is not
      // at least the n number
    if (total < n && end < arr.length) {
      total += arr[end];
      end++;
      console.log("total is -> " + total,"End is -> " + end)
    } 
    // when total is greater than or equal to n
    // set the minLength to be the value of end - start
    // whenever total is greater than n.. the value at arr[start] is subtracted from total
    // start increments by 1... start++
    // if total becomes < n the preceeding if statement executes and end incremenets by 1 end++
    else if (total >= n) {
      minLength = Math.min(minLength, end - start);
      console.log("minimum length = " + minLength, (end - start))
      total -= arr[start];
      start++;
      console.log("total is ---> " + total,"Start is ----> " + start)
    } else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
