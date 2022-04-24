var twoSum = function(nums, target) {
   
    let obj = {};
    let length = nums.length;
    let arr = [];
    
for (let i = 0; i < length; i++) {
    let diff = target - nums[i];
    console.log(obj);
    if(diff in obj) {
        arr.push(obj[diff], i);
        console.log(arr);
        return arr;
    } else {
        obj[nums[i]] = i;
    }
}
};