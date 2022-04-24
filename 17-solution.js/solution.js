function solution(A) {
Arr = [];
    for(var i = 0; i < A.length; i++) {
        let currentNum = A[i];

if(currentNum < 0) {
        Arr.push('<');
    }
    else if (currentNum > 0) {
    Arr.push('>');        
    }
    else {
        Arr.push('=');
    }
    console.log(Arr);
    }
    A = Arr.join('');
    console.log(A);
    return A;
}
A = [1, 2, 0, -3, 7, -6, 0];
solution(A);