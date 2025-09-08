function sayHello() {
  console.log("Hello");
}

function sayWorld() {
  console.log("World");
}

sayHello();
sayWorld();


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


console.log("Start program");

setTimeout(() => {
  console.log("Async 1 (1s) done");
}, 1000);

setTimeout(() => {
  console.log("Async 2 (2s) done");
}, 2000);

console.log("End program");
