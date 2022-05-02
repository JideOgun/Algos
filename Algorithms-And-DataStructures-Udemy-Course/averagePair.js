/*
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there's a pair
of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the 
average target.
return true if there is and false if there is not.
*/

// Multiple Pointers
// set up left pointer, and the next pointer
// add left pointer value to right pointer value and divide by 2
// if ans === target return true
// else move next pointer to the next value, next++, and keep left pointer at the same value
// perform the same operation, when the next pointer reaches the end of the arr, increment the left++
function averagePair(arr, target) {
  let left = 0;
  let next = 1;

  while (left < arr.length - 1) {
    var value = (arr[left] + arr[next]) / 2;

    if (value === target) {
      return true;
    } else {
      next++;
    }
    if (next === arr.length) {
        left++;
        next = left + 1;
    }
    console.log(left, next);
  }
  return false;
}

console.log(averagePair([1, 2, 3, 4, 5, 6, 7], 6.57));
