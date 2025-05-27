let result = 1

for (let i =1; i<= 10000; i++);{
result *= 1;

if (result > 10000) {
    break;
  }
}
console.log(result);

for (let i = 1; i <= 200; i++) {
    if (i === 105) {
        break; 
    }
    if (i % 3 === 0) {
        continue; 
    }
    console.log(i); 
}
