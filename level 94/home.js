//1
function sayHello() {
  console.log("Hello");
}

function sayWorld() {
  console.log("World");
}

sayHello();
sayWorld();

//2
function firstAsync() {
  setTimeout(() => {
    console.log("First async done");
  }, 2000); 
}

function secondAsync() {
  setTimeout(() => {
    console.log("Second async done");
  }, 1000); 
}

firstAsync();
secondAsync();

//3
console.log("Start program");

setTimeout(() => {
  console.log("Async 1 (1s) done");
}, 1000);

setTimeout(() => {
  console.log("Async 2 (2s) done");
}, 2000);

console.log("End program");

//4
setTimeout(() => {
  console.log("Async 500ms done");
}, 500);

setTimeout(() => {
  console.log("Async 1500ms done");
}, 1500);

setTimeout(() => {
  console.log("Async 2000ms done");
}, 2000);


//5
console.log("User logged in"); 

setTimeout(() => {
  console.log("Fetching data...");
}, 2000); 

setTimeout(() => {
  console.log("Data received");
}, 1000); 


