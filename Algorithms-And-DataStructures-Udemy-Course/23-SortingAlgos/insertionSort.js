/*
Insertion sort
Pseudocode
loop over the arr, and start at index 1
set the currentElement to arr[i]
we want to compare the currentElement with the back element i.e arr[i] - 1
so set up a nested loop and set j = i - 1; j >= 0 && arr[j] > currentElement and set it to decrement

*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    // console.log(currentVal);
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr)
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([5, 8, 6, 3, 12]));
