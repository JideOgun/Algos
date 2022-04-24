var isAnagram = function(strA, strB) {
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
  };

  isAnagram('targaryen', 'gratawyen');