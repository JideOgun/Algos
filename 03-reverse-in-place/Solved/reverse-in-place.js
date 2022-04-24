// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method
console.time();
const reverseInPlace = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
};
console.timeEnd();
reverseInPlace([1, 2, 3, 4, 5, 67, 56, 98, 23, 45, 78, 23, 89, 212, 45645, 6767]);