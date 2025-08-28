let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63];

let passedCount = 0;

for (let score of scores) {
  if (score >= 70) {
    passedCount++;
  }
}

console.log("Number of students who passed: " + passedCount);




let car = {
    brand: "Toyota",
    model: "Corolla",
    color: "Black"
  };
  console.log("brand:", car.brand);
  console.log("model:", car.model);
  console.log("color:", car.color);
  
  console.log("ეს არის " + car.brand + " ბრენდი, კონკრეტულად " + car.model + " მოდელი " + car.color + " ფერში.");
  