/*Jumbled Numbers
Programming challenge description:
In this challenge, you're given a string containing jumbled letters 
from several concatenated words. Each word is a numeral from zero to nine.
numeral may be used multiple times in the jumbled string.

Write a program that returns integers corresponding to the numerals used 
to form the jumbled string. Integers must be sorted in ascending order.

For example, reuonnoinfe are shuffled letters of the strings one four nine. Your program's output should be 149.*/
function jumbledLetters(letters) {
 
    var array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    oneArray = [];
    twoArray = [];
    threeArray = [];
    fourArray = [];
    fiveArray = [];
    sixArray = [];
    sevenArray = [];
    eightArray = [];
    nineArray = [];
    numArr = [];
    
    array.forEach(e => {
       for(var a = 0; a < e.length; a++) {
        if (letters.includes('o') && letters.includes('n') && letters.includes('e')) {
            oneArray.push('one');
            if(oneArray == 'one') {
                numArr.push(1);
                }
        
        } 
         if  (letters.includes('t') && letters.includes('w') && letters.includes('o')) {
            twoArray.push('two');
            if(twoArray == 'two') {
                numArr.push(2);
                }
        } 
         if (letters.includes('t') && letters.includes('h') && letters.includes('r') && letters.includes('e')) {
            threeArray.push('three');
            if(threeArray == 'three') {
                numArr.push(3);
                }
        }   
         if (letters.includes('f') && letters.includes('o') && letters.includes('u') && letters.includes('r')) {
            fourArray.push('four');
            if(fourArray == 'four') {
                numArr.push(4);
                }
        } 
         if (letters.includes('f') && letters.includes('i') && letters.includes('v') && letters.includes('e')) {
            fiveArray.push('five');
            if(fiveArray == 'five') {
                numArr.push(5);
                }
        } 
          if (letters.includes('s') && letters.includes('i') && letters.includes('x')) {
            sixArray.push('six');
            if(sixArray == 'six') {
                numArr.push(6);
                }
        } 
         if (letters.includes('s') && letters.includes('e') && letters.includes('v') && letters.includes('n')) {
            sevenArray.push('seven');
            if (sevenArray == 'seven') {
                numArr.push(7);
                }
        } 
         if (letters.includes('e') && letters.includes('i') && letters.includes('g') && letters.includes('h') && letters.includes('t')) {
            eightArray.push('eight');
            if(eightArray == 'eight') {
                numArr.push(8);
                }
        } 
          if (letters.includes('n') && letters.includes('i') && letters.includes('n') && letters.includes('e')) {
            if(nineArray == 'nine') {
                numArr.push(9);
                }
        }         
    } 
    });
    sortedNumberArray = numArr.sort();
    console.log(sortedNumberArray);
    }
    var letters = 'reuonnoinfethree';
    jumbledLetters(letters);