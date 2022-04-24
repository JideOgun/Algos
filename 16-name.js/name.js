/* Write a function solution that given strings name and surname, and integer age, returns a string composed of the first two letters from each
of name, surname followed by age. */

function solution(name, surname, age) {
    Arr = [];    
    name = name.slice(0,2);
    console.log(name); 
    surname = surname.slice(0, 2);
    console.log(surname); 
    Arr.push(name);
    Arr.push(surname);
    age = age.toString();
    console.log(age);
    age = age.slice(0, 2);
    Arr.push(age);
    Arr = Arr.join('');
    console.log(Arr);
return Arr;
}
name = "john";
surname = "Firelord";
age = 82566;
solution(name, surname, age);