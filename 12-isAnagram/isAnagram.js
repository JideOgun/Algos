var isAnagram = function(a, b) {
  if (a.length !== b.length) return false;
  
  let strA = {};
  let strB = {};
   
   for (let char of a) {
       strA[char] = (strA[char] || 0) + 1;
   }
   for (let char of b) {
    strB[char] = (strB[char] || 0) + 1;
   }
   console.log(strA, strB)
   for (let key in strA ) {
     console.log(strA[key], strB[key])
     if(!(key in strB)) {
      console.log(false)
     }
    if (strA[key] !== strB[key] ) {
        console.log(false)
    }




  };
}

  isAnagram('iceman', 'cinema');

// Bootcamp solution
  /*

    if (strA.length !== strB.length) {
      return false;
    }
  
    var aLetterMap = {};
    var bLetterMap = {};
    var strLength = strA.length;
  
    for (var i = 0; i < strLength; i++) {
      var aLetter = strA[i];
      var bLetter = strB[i];
  
      aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
      bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
      console.log(aLetterMap);
      console.log(bLetterMap);
    }
  
    for (var key in aLetterMap) {
      if (aLetterMap[key] !== bLetterMap[key]) {
          console.log(aLetterMap[key]);
        return false;
      }
    }
  
    return true;
  */