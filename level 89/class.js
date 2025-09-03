function sumNested(arr) {
    let total = 0;  
  
    for (let el of arr) {
      if (Array.isArray(el)) {
        total += sumNested(el); 
      } else {
        total += el;
      }
    }
  
    return total;
  }
  

  function repeatStr(n, s) {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += s;
    }
    return result;
  }

  function removeChar(str) {
    if (str.length <= 2) {
      return "";
    }
  
    let result = "";
    for (let i = 1; i < str.length - 1; i++) {
      result += str[i];
    }
    return result;
  }
  

  function isIsogram(str) {
    str = str.toLowerCase();
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false; 
        }
      }
    }
  
    return true; 
  }