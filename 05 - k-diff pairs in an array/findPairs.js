var findPairs = function(nums, k) {
    
    // given an array
    // where nums[i] - nums[j] = k;
    //
    // return the count of k
    
    
    /* Pseudocode
    create nested for loop for num[i] and num[j]
    Looping over the num array length on both for loops
    In the second for loop condition for j, set j = i + 1;
    Inside the second for loop for j
    find the difference between num[i] and num[j]
    save difference in  diff var
    create counter variable and set to 0 in global scope
    if diff = k, count++
    when loop is complete return count++
    
    
    */

    
   
    var obj = {}, {length} = nums, result = 0;

    for (var i = 0; i < length; i++) {
        var p = nums[i];   
    
        obj[p] = obj[p] === undefined ? 1 : obj[p] + 1;
        
        // console.log(obj[p])
    }
    
    for (var y in obj) {
        var val = obj[y];
        console.log(obj)
        
        if (k > 0 && obj.hasOwnProperty(parseInt(y) + k)) {
            result++
        } else if (k === 0 && val > 1) {
            result++
        }
    }
    return result;
}