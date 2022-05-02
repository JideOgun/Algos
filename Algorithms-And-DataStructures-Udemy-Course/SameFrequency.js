/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
return true if they have the same frequeency else return false;
Solution must have time complexity of O(N)
*/

const sameFrequency = (a, b) => {
  // set up a map for both numbers
  let str1 = a.toString();
  let str2 = b.toString();
  if (str1.length !== str2.length) return false;
  console.log(str1, str2);
  let num1 = {};
  let num2 = {};

  for (let str of str1) {
    num1[str] = (num1[str] || 0) + 1;
  }

  for (let str of str2) {
    num2[str] = (num2[str] || 0) + 1;
  }

  console.log(num1, num2);

  for(let key in num1) {
      if(!(key in num2)) {
        return false
      }
      if((num1[key] !== num2[key])) {
          return false
      }
  }
  return true;
};

console.log(sameFrequency(1825, 2816));
