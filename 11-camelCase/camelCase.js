function camelCase(strA, strB, strC) {
    strA.charAt(0);
    // .toUpperCase();
    strB = strB.slice(1);
    console.log(strB);
    // strB = strB.toUpperCase();
    

    // .toUpperCase();
    strC.charAt(0);
    // .toUpperCase();
    console.log(strB);
    newStr = strA.concat(strB.concat(strC));
    console.log(newStr);
    
  }
  strA = "LOOKS";
  strB = "like";
  strC = "this";
  camelCase(strA, strB, strC);
