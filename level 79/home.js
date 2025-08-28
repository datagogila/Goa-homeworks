let score = 0; 

function increaseScore() {
    score += 10;
}

increaseScore();
increaseScore();


function secretCode() {
    let code = '1234'; 
    console.log(code); 
}

secretCode();

let name = "World"; 

function greet() {
    let name = "Alice"; 
    console.log(name); 
}

greet();
console.log(name); 

function counterGame() {
    let counter = 0; 
    counter++;
    console.log(counter);
}

counterGame(); 
counterGame();
function setValue() {
    implicitVar = 50; 
}

setValue();
console.log(implicitVar);

// გლობალური ცვლადი არის ისეთი, რომელიც ფუნქციების გარეთაა შემოტანილი და ყველგან გამოიყენება.
// თუ ცვლადი ფუნქციის შიგნითააა და გარეთ ვერ მოხვდება, ის არ არის გლობალური.

// ლოკალური ცვლადი არის ისეთი, რომელიც მხოლოდ ფუნქციის ან ბლოკის შიგნით გამოიყენება.
// გარეთ მასზე წვდომა არ გვაქვს, ეს არის ფუნქციის ან ბლოკის შიდა მონაცემი.

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
app.js

javascript
Copy
Edit
import { add, subtract } from './mathUtils.js';

console.log(add(5, 3)); 
console.log(subtract(10, 4)); 


export default function logger(message) {
    console.log(message);
}
main.js

javascript
Copy
Edit
import logger from './logger.js';

logger("Hello World!"); 
userService.js + importexample
userService.js

export default function createUser(name) {
    return { name };
}

export function deleteUser(id) {
    console.log(`User ${id} deleted`);
}
app.js



const user = createUser("Anna");
console.log(user); 

const add = (a, b) => a + b;

console.log(add(4, 7)); 

const double = (num) => num * 2;

console.log(double(5)); 


const firstChar = (str) => str[0];

console.log(firstChar("JavaScript")); 


const shout = (str) => str.toUpperCase();

console.log(shout("hello")); 


const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

console.log(isPrime(7)); 
console.log(isPrime(10)); 

const checkNumber = (num) => {
    if (num > 0) return "Positive";
    else if (num < 0) return "Negative";
    else return "Zero";
};

const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    else if (num % 3 === 0) return "Fizz";
    else if (num % 5 === 0) return "Buzz";
    else return num;
};


