/*
Selection sort
*/

function selectionSort(arr) {
  /*
    create a variable to hold index of the smallest element
    loop over array, and compare smallest to each element in arr
    if theres a smaller value, set that to be the new smallest value
    then swap with the fist value, and repeat with the window moved up one
    */
  for (var i = 0; i < arr.length; i++) {
    var smallest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      var temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([5, 8, 6, 3, 4, 7, 12, 67, 34, 45, 12]));
