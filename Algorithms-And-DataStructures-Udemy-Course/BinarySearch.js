/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the
value passed into the function is located. If the value is not found return - 1
*/

// Divide and Conquer pattern

function search(arr, n) {
  if (arr.length === 0) return -1;
  // set up min side of the arr
  let min = 0;
  // set up max side of the array
  let max = arr.length - 1;
  // set up while loop, while the min value is less than or equal to max value
  while (min <= max) {
    // get a midpoint of the arr by add the min and max values and divding by 2
    // mid value has to be set inside the while loop so that the mid value can change
    // whenever the min and max values change
    // also critical to use math.floor instead of math.ceil
    let mid = Math.floor((min + max) / 2);
    console.log(mid);
    // setting the middle element to a currentElement variable
    let middleElement = arr[mid];
    // if the middle value is less than n (the number being searched for) then set the min value
    // to be the middle value + 1... that way you know the value is in the right side of the mid value
    if (middleElement < n) {
      min = mid + 1;
    }
    // else if the mid element is greater than n being searched for, the value is in the left side of the arr
    // then set the max value to be the mid  - 1
    else if (middleElement > n) {
      max = mid - 1;
    }
    // else then the middle value is the value you're looking for
    else {
      return mid;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 9));
