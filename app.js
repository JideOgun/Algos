// greet();

// function greet() {
//     console.log('Hello')
// }

// var anonymousGreet = function() {
//     console.log('Anonymous Hello!')
// }
// anonymousGreet();

// function logAtLeast5 (n) {
//     for (var i = 1; i <= Math.max(5, n); i++) {
//         console.log(i)
//     }
// }

// by value (primitives)
// var a = 3;
// var b;
//  b = a; // creates a new location in memory for b, and creates a copy of a and sets it to b
//  a = 2;
//  console.log(a, b);

//  // by reference
//  var c = { food: 'Bagels' };
//  var d;

//  d = c; // points the same location in memory of c
//  c =  {food: 'Dior'};
//  console.log(c, d);

// The this key word
// function a() {
//     console.log(this)
// }

// a();

// var c = {
//     name: 'The c object',
//     log: function() {
//         let self = this
//         self.name = 'The new name for C'
//         console.log(self);

//         var setName = function () {
//             self.name = "Changed name of C"
//             console.log(self)
//         }
//         setName();
//     }
// }
// c.log();

// logAtLeast5(10)

// var fruits = new Array(5);
// console.log(fruits)

// function twoArrays(arrA, arrB) {
// /*
// Accept two arrays as input
// return true if every value in the array has a corresponding squared value in second array else return false
// make an object for first frequencyCounter1 for the arrA
// make an object for second frequencyCounter2 for the  arrB
// loop through arrA using for of, and
// */

// let fc1 = {};
// let fc2 = {};

// for (let val of arrA) {
//     // if value exists in fc1 object, ignore || 0, and add one to the value that exists.
//     // if it doesn't exist set the default value to zero, then add 1 therefore initializing it to 1.
//    fc1[val] = (fc1[val] || 0) + 1;
// }

// for (let val of arrB) {
//     fc2[val] = (fc2[val] || 0) + 1;
//  }

//  console.log(fc1, fc2)

//  for (let key in fc1) {
//   if(!(key ** 2 in fc2) ) {
//       console.log(false) ;
//   }
//   if(fc2[key**2] !== fc1[key]) {
//     console.log(false);
//     }
//     console.log(fc1[key],fc2[key])
//  }
//  console.log(true);
// }

// twoArrays([1, 1, 2, 2,  3], [4, 1, 1, 4, 9])

// var firstName = 'Bob';
// (
//     function(name) {
//     console.log('This is a ' + name)
// }('John')
// )

// Closures

// function buildFunctions () {
//     var arr = [];

//     for(var i = 0; i < 3; i++) {
//         arr.push(
//             function() {
//                 console.log(i)
//             }
//         )
//     }
//     return arr;
// }

// var fs = buildFunctions();

// fs[0]();
// fs[1]();
// fs[2]();

// Function Factories
//  function makeGreeting (language) {

//     return function(firstname, lastname) {
//         if(language === 'en') {
//             console.log('Hello ' + firstname + ' ' + lastname + ' in English');
//         } else if (language === 'es') {
//             console.log('Hola! ' + firstname + ' '  + lastname + ' in Spanish');
//         }
//     }
//  }

//  var English = makeGreeting('en'); // en variable is passed into language parameter at this time of the creation of this execution context
//  English('James', 'Brown'); // creates new execution context when called - and has access to en variable after makeGreeting function has been popped off the call stack
//  var Spanish = makeGreeting('es'); // es variable is passed into language parameter at this time of the creation of this execution context
//  Spanish('Juan', 'Mancilla'); // creates another new execution context when called - and has access to es variable after second makeGreeting function has been popped off the call stack

// Functional Programming
// function mapForEach(arr, fn) {
//     var newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         newArr.push(fn(element))
//     }
//     return newArr;
// }

// var subtractOne = mapForEach([1, 2, 3, 4, 5], function(element) {
//     return element - 1;
// })

// var greaterThanTwo = mapForEach([1, 2, 3, 4, 5], function(element) {
//     return element > 2;
// })

// console.log(subtractOne);
// console.log(greaterThanTwo);

// class Student {
//     constructor(firstname, lastname, year) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.grade = year;
//     }
//     fullname() {
//         return `Your name is ${this.firstname} and lastname is ${this.lastname}`
//     }
// }

// let firstStudent = new Student("Jide", "Ogunbanjo", 7);

// console.log(firstStudent.fullname());

// class Shape {
//   constructor(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }

//   calcPerimeter() {
//     return this.sides * this.sideLength;
//   }
// }

// var oldSquare = new Shape("Square", 4, 5);
// // console.log(square.calcPerimeter());
// var Triangle = new Shape("Triangle", 3, 3);
// // console.log(Triangle.calcPerimeter());

// class Square extends Shape {
//   constructor(name, sides, sideLength) {
//     super(name, sides, sideLength);
//     this.name = "Square";
//     this.sides = 4;
//     this.sideLength = 3;
//   }

//   calcArea(sideLength) {
//     return sideLength * sideLength;
//   }
// }
// var newSquare = new Square();
// console.log(newSquare.calcArea(5));
// console.log(newSquare.calcPerimeter())

// // Encapsulation
//  class Employee {
//      setEmpDetails(name, id, phoneNo) {
//          this.name = name;
//          this.id = id;
//          this.phoneNo = phoneNo;
//      }

//      getEmpName() {
//          return this.name;
//      }

//      getEmpId() {
//          return this.id;
//      }

//      getEmpPhoneNo() {
//          return this.phoneNo
//      }
//  }
//  var emp1 = new Employee();

// emp1.setEmpDetails('John', 01, 5128250309);
// console.log(emp1.getEmpName());
// console.log(emp1.getEmpId())
// console.log(emp1.getEmpPhoneNo())

// function caesarCipher(s, k) {
//   // Write your code here
//   /*
//   Pseudocode
//   loop over the string s,
//   find the charCode at i\
//   set the char to be the charCode(i + k)
//   update s to be new char
//   return s

//   */
//   if (k === 0) return s;
//   var newCode;
//   var diffnewCode;
//   for (var i = 0; i < s.length; i++) {
//     if (
//       (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
//       (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
//     ) {
//       var code = s.charCodeAt(i);
//       //  console.log(code)
//       newCode = code + k;
//       console.log(newCode + ` ${s[i]} ` + "codes");
//       if (newCode > 90 && newCode <= 96) {
//         newCode = newCode - 26;
//         console.log("A new code - " + newCode);
//       } else if (newCode > 122 && code >= 65 && code <= 90) {
//         diffnewCode = newCode - 90;
//         if (diffnewCode % 26 === 0) {
//           newCode = 90;
//         } else {
//           newCode = 64 + (diffnewCode % 26);
//         }
//       } else if (newCode <= 122 && newCode > 90 && code >= 65 && code <= 90) {
//         diffnewCode = newCode - 90;
//         if (diffnewCode % 26 === 0) {
//           newCode = 90;
//         } else {
//           newCode = 64 + (diffnewCode % 26);
//         }
//         if (newCode === 91) newCode = 90;
//       } else if (newCode > 122) {
//         diffnewCode = newCode - 122;
//         if (diffnewCode % 26 === 0) {
//           newCode = 122;
//         } else {
//           newCode = 96 + (diffnewCode % 26);
//         }

//         console.log("B new code - " + newCode);
//       }
//     } else {
//       newCode = s.charCodeAt(i);
//       // console.log('new code - ' + newCode)
//     }
//     var newStr = (newStr || "") + String.fromCharCode(newCode);
//   }
//   console.log(newStr);
//   return newStr;
// }

// console.log(
//   caesarCipher(
//     "DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.",
//     45
//   )
// );

// function matchingBrackets(s) {
//   // Write your code here
//   /*
//  Pseudocode 
//     */

//   let bracketObj = {
//     "}": "{",
//     "]": "[",
//     ")": "(",
//   };

//   const stack = [];

//   if (s[0] === "}" || s[0] === ")" || s[0] === "]") return "NO";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
//       stack.push(s[i]);
//       console.log('pushing into ' + stack)
//     } else {
//       console.log('key - ' + s[i], bracketObj[s[i]])
//       if (stack[stack.length - 1] === bracketObj[s[i]]) {
//         stack.pop();
//         console.log('removing from ' + stack)
//       } else {
//         stack.push(s[i]);
//       }
//     }
//   }
//   console.log(stack, + 'this is the length - ' + stack.length);
//   if (!stack.length) {
//     return "YES";
//   } else {
//     return "NO";
//   }
// }

console.log(matchingBrackets("{(([])[])[]}"));
