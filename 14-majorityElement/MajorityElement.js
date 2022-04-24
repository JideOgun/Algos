/**
 * @param {number[]} nums
 * @return {number}
 */


/*
Pseudocode
create an obj map
loop over array, and set elements as keys to obj map
console.log the obj to see whats in there
for in loop , and a math.max() of obj[key]



// edge cases
if array.length === 0 return -1;
if array length === 1 return arr[0];

*/
var majorityElement = function(nums) {
    let n = (nums.length / 2);

    
    const map1 = new Map();   
nums.forEach(e => {
    if(map1[e]) {
        map1[e]++;
    } else {
        map1[e] = 1;
    }
    // console.log(map1);
});

for (const key in map1) {
    // console.log(key);
    
    if(map1[key] > n){
        console.log(key) ;
    }
}

 
 

};

majorityElement([3, 3, 7, 7, 7,]);