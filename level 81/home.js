let person = {
    name: "გიორგი",
    age: 25,
    city: "თბილისი"
  };
  
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }

  
  let products = {
    bread: 3,
    milk: 2,
    apple: 5
  };
  
  let sum = 0;
  for (let key in products) {
    sum += products[key];
  }
  console.log("პროდუქტების ჯამი:", sum);

  
  let mixed = {
    name: "ანა",
    age: 22,
    active: true,
    score: 95,
    city: "ბათუმი",
    grade: 88
  };
  
  for (let key in mixed) {
    if (typeof mixed[key] === "number") {
      console.log(key + ": " + mixed[key]);
    }
  }

  
  let books = {
    " დედა ენა იაკობ გოგებაშვილი"
  }
  
  let bookNames = [];
  for (let key in books) {
    bookNames.push(key);
  }
  console.log(bookNames);
  

  let numbers = [5, 10, 15, 20];
  let total = 0;
  
  for (let num of numbers) {
    total += num;
  }
  console.log("ჯამი:", total);

  
  let text = "Hello";

for (let char of text) {
  console.log(char);
}



let words = ["dog", "elephant", "car", "computer", "sun"];

for (let word of words) {
  if (word.length > 5) {
    console.log(word);
  }
}



let nums = [2, 4, 6, 8];
let squares = [];

for (let n of nums) {
  squares.push(n * n);
}
console.log(squares);
