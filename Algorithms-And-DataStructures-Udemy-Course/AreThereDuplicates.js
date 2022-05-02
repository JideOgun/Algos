/*
Impelement a function called, areThereduplicates which accepts a variable number of arguments, and checks whether there are any duplicates
among the arguments passed in.
*/

function areThereduplicates() {
  //   console.log(arguments)
//   var obj = {};
//   for (const element of arguments) {
//     obj[element] = (obj[element] || 0) + 1;
//   }

//   console.log(obj);

//   for (const key in obj) {
//       console.log(obj[key])
//     if (obj[key] >= 2) {
//       return true;
//     } else {
//       return false;
//     }
//   }
let A = new Set(arguments);
console.log(A)
}



console.log(areThereduplicates(1, 2, 2, 2, 3, 4, 4, 5, 5));
