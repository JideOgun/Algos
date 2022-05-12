/*
Write a function called binarySearch which accepts a sorted array and a value ,
 and returns the index at which the value exists.
 Otherwise return -1

*/

function binarySearch (arr, val) {
    // create a starting pointer
    // create end pointer
    // create a middle point by averaging the start and end
    // while start is less than the end
    // loop through the arr and check if val is greater than or less than the middle pointer
    // if val is equal to the middle pointer, return the arr[mid]
    // if val is less than the mid, then set the end pointer to be index thats one less from the mid pointer
    // if val is greater than the mid then set the start to be the index one up from the mid pointer
    // loop until val is found
    // if no val is found return - 1
    let start = 0;
    let end = arr.length - 1;


    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        console.log(start, end, mid);
        if(arr[mid] === val) return arr.indexOf(arr[mid]);

        if( val < arr[mid]) {
            end = mid - 1;
        } else if (val > arr[mid]) {
            start = mid + 1
        } 
    }
    return -1
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));