const students = [
    { name: "Ana", grade: 95 },
    { name: "Giorgi", grade: 82 },
    { name: "Mariam", grade: 67 },
    { name: "Dato", grade: 74 },
    { name: "Nika", grade: 59 }
  ];
  

  const a = students.every(student => student.grade >= 70);
  

  const h = students.some(student => student.grade < 65);
  
  // 3. Log each student's name
  students.forEach(student => {
    console.log(`Student: ${student.name}`);
  });
 
  let honorRoll = [];
  students.forEach(student => {
    if (student.grade >= 90) {
      R.push(student.name);
    }
  });
  
  console.log("A:", allPassing);
  console.log("H:", hasFailing);
  console.log("R:", honorRoll);