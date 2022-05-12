/*
bubbleSort implementation.

Sorting an array
*/


function bubbleSort (arr) {
    /*
    create a for loop for i
    create a nested for loop for j = i + 1
    inside the nested for loop compare the value of i and j
    if j > i then swap the value of the elements
    repeat until array is sorted.

    // to optimize use decreasing loop at i, then j = 0; j < i - 1
    */

    for(var i = arr.length; i > 0; i--) {
        for(var j = 0; j < i - 1; j++) {
            if(arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};


console.log(bubbleSort([5, 8, 6, 3, 4, 7, 12, 67, 34, 45, 12]))