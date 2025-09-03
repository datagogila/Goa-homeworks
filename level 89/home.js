function squareDigits(num) {
    if (num === 0) return 0;
  
    let result = 0;
    let multiplier = 1;
  
    while (num > 0) {
      let digit = num % 10;         
      let square = digit * digit;  
      
      result = square * multiplier + result;
  
   
      let temp = square;
      while (temp > 0) {
        multiplier *= 10;
        temp = Math.floor(temp / 10);
      }
  
      num = Math.floor(num / 10);
    }
  
    return result;
  }
  
  

  function countSmileys(arr) {
    let count = 0;
  
    for (let face of arr) {
      if (face.length === 2) {
        if ((face[0] === ':' , face[0] === ';') , (face[1] === ')' , face[1] === 'D')) {
          count++;
        }
      } else if (face.length === 3) {
        if ((face[0] === ':' , face[0] === ';') ,
            (face[1] === '-' , face[1] === '~') ,
            (face[2] === ')' , face[2] === 'D')) {
          count++;
        }
      }
    }
  
    return count;
  }


  function digitalRoot(n) {
    while (n >= 10) {
      let sum = 0;
      while (n > 0) {
        sum += n % 10;       
        n = Math.floor(n / 10); 
      }
      n = sum;
    }
    return n;
  }

  function highAndLow(numbers) {
    let nums = numbers.split(" ").map(Number);
    
    let max = nums[0];
    let min = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i];
      }
      if (nums[i] < min) {
        min = nums[i];
      }
    }
    
    return max + " " + min;
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