let balance = (prompt("Enter your balance:"));
let withdraw = (prompt("Enter your withdrawal:"));

console.log(balance - withdraw);



let country = prompt("Enter country:");
let capital = prompt("Enter capital:");

console.log(`country: <b>$${country}</b> capital: <b>$${capital}</b>`);



let guest = prompt("Enter guest name:");

console.log("WELCOME, " + guest);



function greet(name) {
    return `გამარჯობა, ${name}!`;
}
console.log(greet("დათა")); 


function square(number) {
    return number * number;
}
console.log(square(5)); 




const add = function(a, b) {
    return a + b;
};
console.log(add(3, 7)); 

const multiply = function(x, y) {
    return x * y;
};
console.log(multiply(4, 6));



const greetArrow = (name) => `გამარჯობა, ${name}!`;
console.log(greetArrow("ანა")); 
const squareArrow = (num) => num * num;
console.log(squareArrow(8)); 

