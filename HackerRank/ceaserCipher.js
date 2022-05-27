function caesarCipher(s, k) {
    // Write your code here
    /*
    Pseudocode
    loop over the string s, 
    find the charCode at i\
    set the char to be the charCode(i + k)
    update s to be new char
    return s
    
    */
    if (k === 0) return s;
    var newCode;
    var diffnewCode;
    for (var i = 0; i < s.length; i++) {
      if (
        (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
        (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
      ) {
        var code = s.charCodeAt(i);
        //  console.log(code)
        newCode = code + k;
        console.log(newCode + ` ${s[i]} ` + "codes");
        if (newCode > 90 && newCode <= 96) {
          newCode = newCode - 26;
          console.log("A new code - " + newCode);
        } else if (newCode > 122 && code >= 65 && code <= 90) {
          diffnewCode = newCode - 90;
          if (diffnewCode % 26 === 0) {
            newCode = 90;
          } else {
            newCode = 64 + (diffnewCode % 26);
          }
        } else if (newCode <= 122 && newCode > 90 && code >= 65 && code <= 90) {
          diffnewCode = newCode - 90;
          if (diffnewCode % 26 === 0) {
            newCode = 90;
          } else {
            newCode = 64 + (diffnewCode % 26);
          }
          if (newCode === 91) newCode = 90;
        } else if (newCode > 122) {
          diffnewCode = newCode - 122;
          if (diffnewCode % 26 === 0) {
            newCode = 122;
          } else {
            newCode = 96 + (diffnewCode % 26);
          }
  
          console.log("B new code - " + newCode);
        }
      } else {
        newCode = s.charCodeAt(i);
        // console.log('new code - ' + newCode)
      }
      var newStr = (newStr || "") + String.fromCharCode(newCode);
    }
    console.log(newStr);
    return newStr;
  }