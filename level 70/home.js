// 1
let age = prompt("Enter your age:");
if (age > 18) {
  console.log("you are an adult");
} else {
  console.log("you're not an adult");
}


// 2
function greet(name) {
  console.log(`hello ${name} `);
}

let userName = prompt("Enter your name:");
greet(userName);


// 3
function square(num) {
  console.log(num * num);
}

square(5); 


// 4)
function printNumbers(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
}

printNumbers(10); 


