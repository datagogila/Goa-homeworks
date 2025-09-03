let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a); 
console.log(b); 


const nestedArr = [1, [2, 3], 4];

const [first, [second, third], fourth] = nestedArr;

console.log(first);  
console.log(second); 
console.log(third);  
console.log(fourth); 


