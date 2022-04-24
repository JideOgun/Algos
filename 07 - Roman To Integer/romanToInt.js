/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let obj = {I: 1, IV: 4, V: 5, IX:9,  X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000};
    
    sum = 0;
  for(let i = 0; i < s.length; i++) {
      
      let N = s[i];
      let M = s[i+1];
      
      if(obj[N] < obj[M]) {
          sum += obj[N + M];
          ++i;
      } else {
          sum += obj[N];
      }
      }
    return sum;
};

/*
// Problem statement
Given a roman numeral convert it to a number


// Pseudocode
map variables for major numbers I, V, X, L, C, D , M and subtraction instances
loop over string param to find out which roman numerals have been passed in
make empty arr to store values
loop over obj
if s exists in obj
push the value into the arr and log the number of times it appears
sum all the numbers in the arr
return sum




*/