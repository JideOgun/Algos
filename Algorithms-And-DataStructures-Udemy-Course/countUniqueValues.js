/*
Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

const countUniqueValues = (arr) => {
  // Using two pointers method
  if(arr.length === 0) return 0;
  // Set up a pointer at the zero index i.e the first element of the array
  var i = 0;

  // set up a second pointer j that is going to be counting from the first index i.e the second element of the array
  for (let j = 1; j < arr.length; j++) {
      // if there is a mismatch i is incremented by 1 and arr[i] is set to the value of arr[j]
      // thereby mutating the array to have only the unique values at the start of the array
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // at the end of the iteration return i + 1, because the number of unique values is equal the index at which i ends at.
  return i + 1;
};

console.log(countUniqueValues([-2, -1, -1, 0, 1]));

/*
Using a hash map

    if(arr.length === 0) return 0;
    var obj = {};
    for (let element of arr) {
        obj[element] = (obj[element] || 0) + 1;
    }
    var objSize = Object.keys(obj)
   return objSize.length;

*/
