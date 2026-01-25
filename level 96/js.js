//1 
const arr1 = [3, 4, 5];

const arr2 = [1, 2, ...arr1];

console.log(arr2); 


//2
const person = {
    name: "data",
    surname: "gogilashvili",
    age: 11,
    height: 137
  };
  
  const personEyeColor = {
    eyeColor: "brown",
    ...person
  };
  
  console.log(personEyeColor);

//3
//ის ქმნის მითითებას ობიექტებისა
//და მასივებისთვის ნამდვილი ასლის ნაცვლად, რაც იწვევს ორიგინალური 
//მონაცემების გაუთვალისწინებელ მოდიფიკაციებს.
  