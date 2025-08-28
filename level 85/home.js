const courses = [
    {
    
      students: [
        { name: "Ana", grades: [80, 90, 85] },
        { name: "Giorgi", grades: [70, 75, 72] }
      ]
    },
    {
     
      students: [
        { name: "Mariam", grades: [65, 68, 60] },
        { name: "Dato", grades: [50, 55, 58] }
      ]
    },
    {
     
      isActive: true,
      students: [
        { name: "Nika", grades: [95, 90, 100] },
        { name: "Luka", grades: [85, 80, 88] }
      ]
    }
  ];
  
  const studentNamesString = "Ana,Giorgi,Mariam,Dato,Nika,Luka";
  
 
  console.log("Is courses array?", Array.isArray(courses));
  console.log("Is studentNamesString array?", Array.isArray(studentNamesString));

  const allStudentNames = Array.from(studentNamesString.split(","));
  console.log("All Student Names:", allStudentNames);

  courses.forEach(course => {
    console.log(`Course ID: ${course.id}, Name: ${course.name}`);
  });
  

  const courseNames = courses.map(course => course.name);
  console.log("Course Names:", courseNames);
  
  
  const courseAverages = courses.map(course => {
    const totalGrades = course.students.reduce((sum, student) => {
      const avg = student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
      return sum + avg;
    }, 0);
    const avgGrade = totalGrades / course.students.length;
    return { id: course.id, average: avgGrade };
  });
  console.log("Course Averages:", courseAverages);
  

  const activeCourses = courses.filter(course => course.isActive);
  console.log("Active Courses:", activeCourses);

  const calculusCourse = courses.find(course => course.id === "MA201");
  console.log("Calculus Course:", calculusCourse);
  
  
  courses.forEach(course => {
    const allPassed = course.students.every(student =>
      student.grades.some(grade => grade >= 70)
    );
    console.log(`Course ${course.id} → All students have at least one grade >= 70: ${allPassed}`);
  });
  

  const hasSmallCapacity = courses.some(course => course.capacity < 30);
  console.log("Any course with capacity < 30?", hasSmallCapacity);
  

  const coursesByCapacity = [...courses].sort((a, b) => a.capacity - b.capacity);
  console.log("Courses by Capacity:", coursesByCapacity);
  

  coursesByCapacity.reverse();
  console.log("Reversed Courses by Capacity:", coursesByCapacity);
  

  const totalCredits = activeCourses.reduce((sum, course) => sum + course.credits, 0);
  console.log("Total Credits (Active Courses):", totalCredits);
  

  const activeCoursesNamesReversed = activeCourses.reduceRight((str, course) => {
    return str === "" ? course.name : str + " - " + course.name;
  }, "");
  console.log("Active Courses (Reversed Names):", activeCoursesNamesReversed);
  