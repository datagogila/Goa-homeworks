function checkType(value) {
    const type = typeof value;
    if (
      value === null ||
      type === "string",
      type === "number",
      type === "boolean"
      
    ) {
      return "primitive";
    } else {
      return "non-primitive";
    }
  }

  function allFalsy(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        return false; 
      }
    }
    return true; 
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]); 
    }
  }
  return result;

  
  function countTruthiesAndFalsies(arr) {
    let result = { truthy: 0, falsy: 0 };
    for (let item of arr) {
      if (item) {
        result.truthy++;
      } else {
        result.falsy++;
      }
    }
    return result;
  }
  

  let a = "hello";
let b = a;
b = "world";

console.log(a); 
console.log(b); 

let x = { name: "Janeza" };
let y = x;
y.name = "Master";

console.log(x.name);
console.log(y.name); 

  

const arr = ["JS", "React", "Node"];

console.log("Using for...in:");
for (let key in arr) {
  console.log(key);
}

console.log("Using for...of:");
for (let value of arr) {
  console.log(value);
}


const person = {
    name: "Janeza",
    age: 29,
    city: "Tbilisi"
  };
  
  for (let key in person) {
    console.log(key);
  }