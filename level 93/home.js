
let myMap = new Map([  [1, "რიცხვია"],["სახელი", "დათა"], [true, "ეს არის ბულიანი"], ["ქულა", 93], [{ id: 1 }, "ობიექტი როგორც key"]]);

  console.log(myMap.size); 

  for (let [key, value] of myMap.entries()) {
    console.log("Key:", key, "| Value:", value);
  }
  
  console.log("აქვს თუ არა 'სახელი' key?", myMap.has("სახელი")); 
  console.log("აქვს თუ არა 'ასაკი' key?", myMap.has("ასაკი"));  
  

  let arr = ["JS", "JS", "JS", "Code", "Code", "Learn", "Learn"];
  let mySet = new Set(arr);
  
  console.log("Set:", mySet); 
  