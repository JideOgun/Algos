 
const merge = (leftArr, rightArr) => {
const output = [];
let leftIndex = 0;
let rightIndex = 0;

while(leftIndex < leftArr.length && rightIndex < rightArr.length)
{
    const leftEl = leftArr[leftIndex];
   
    const rightEl = rightArr[rightIndex];
     console.log(`left El -   ${leftEl}`, `right El -   ${rightEl}`);

    if(leftEl < rightEl) {
        output.push(leftEl);
        leftIndex++;
    } else {
        output.push(rightEl);
        rightIndex++;
    }
    console.log(`this is the out ${output}`);

}   
return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]; 
};
 

// recursive
 const mergeSort = array => {
if(array.length <= 1) {
    return array;
}


const middleIndex = Math.floor(array.length / 2);

const leftArr = array.slice(0, middleIndex);
const rightArr = array.slice(middleIndex);   // Slice doesn't need a second argument because it will start from middleIndex and naturally goto end, could've been array.slice(middleindex, array.length)
console.log(leftArr, rightArr);
return merge( mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort([1, 4, 2, 8, 345, 76, 90, 32]));