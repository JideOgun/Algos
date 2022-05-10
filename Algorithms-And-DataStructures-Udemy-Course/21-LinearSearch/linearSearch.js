function linearSearch(arr, n){
    // add whatever parameters you deem necessary - good luck!
    // loop through arr, if n is in arr[i] return indexOf n else return -1
    
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === n) {
            console.log('found it');
            return arr.indexOf(n)
        } 
    }
  }

  console.log(linearSearch([10, 15, 20, 25, 30], 15))