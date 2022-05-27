function maxInversion(arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (arr[i] > arr[j]) {
        for (let k = j + 1; k < n; k++) {
          if (arr[j] > arr[k]) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

console.log(maxInversion([5, 3, 4, 2, 1]));
