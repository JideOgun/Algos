// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
arr = [];
// var strArr = str.split(' ');
var L = str.length;
console.log(L);


for(var i = 0; i < str.length; i++) {

    arr.push(str.charAt(L-1));
L = L-1;
}

var newStr = arr.join('');
console.log(newStr);
return newStr;
};

reverse("Hello World!");
