function sumNumbers(...numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((sum, num) => sum + num, 0);
  }

 console.log(sumNumbers(1, 2, 3)); 
console.log(sumNumbers(10, 20));  
console.log(sumNumbers());  