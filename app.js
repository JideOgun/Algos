

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
 function makeGreeting (language) {

    return function(firstname, lastname) {
        if(language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname + ' in English');
        } else if (language === 'es') {
            console.log('Hola! ' + firstname + ' '  + lastname + ' in Spanish');
        }
    }
 }

 var English = makeGreeting('en');
 English('James', 'Brown');
 var Spanish = makeGreeting('es');
 Spanish('Juan', 'Mancilla');