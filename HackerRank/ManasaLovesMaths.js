/*
You are given an integer N. Is there a permutation of digits of integer that's divisible by 8? A permutation of digits of integer N is defined as an integer formed by rearranging the digits of N. For example, if the number N = 123,
 then {123, 132, 213, 231, 312, 321} are the possible permutations.

For each test case print YES if there exists one such re-arrangement of N 
such that it is divisible by 8 or NO if there isn't.
*/

function solve(n) {
  if (n < 100) {
    if (n % 8 === 0) return "YES";
    if (helperReverse(n) % 8 === 0) return "YES";
    return "NO";
  }

  if (n >= 100) {
    n = n.toString();

    for (var i = 0; i < n.length - 2; i++) {
      for (var j = i + 1; j < n.length - 1; j++) {
        for (var k = j + 1; k < n.length; k++) {
          if (parseInt(n.charAt(i) + n.charAt(j) + n.charAt(k)) % 8 === 0 ||
          parseInt(n.charAt(i) + n.charAt(k) + n.charAt(j)) % 8 === 0 ||
          parseInt(n.charAt(k) + n.charAt(j) + n.charAt(i)) % 8 === 0 ||
          parseInt(n.charAt(k) + n.charAt(i) + n.charAt(j)) % 8 === 0 ||
          parseInt(n.charAt(j) + n.charAt(i) + n.charAt(k)) % 8 === 0 ||
          parseInt(n.charAt(j) + n.charAt(k) + n.charAt(i)) % 8 === 0 
          ) {
              return 'YES'
          }
        }
      }
    }
    return 'NO'
  }
}

const helperReverse = (n) => {
  var arr = [n];
  var str = arr.join("");
  var arrStr = str.split("");

  let a = arrStr[0];
  let b = arrStr[1];
  var temp;
  temp = a;
  a = b;
  b = temp;
  let newArr = [a, b];
  newArr = newArr.join("");
  return parseInt(newArr);
};
console.log(solve(6112785));
