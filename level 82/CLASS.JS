const name = "MasterJaneza";  //  პრიმიტიული
const age = 29;   //პრიმიტიული
const skills = ["JavaScript", "React"];   //არაპრიმიტიული 
const greet = function() { return "Hello!"; }; //  არაპრიმიტიული
const isCool = true;    // პრიმიტიული
const details = { country: "Georgia" };  // არაპრიმიტიული


function isFalsy(value) {
    return !value;
  }
  
  console.log(isFalsy(false));
  console.log(isFalsy(0));       
  console.log(isFalsy(""));      
  console.log(isFalsy(null));     
  console.log(isFalsy(undefined));
  console.log(isFalsy(NaN));     
  console.log(isFalsy("hello")); 
  console.log(isFalsy(123));      
  
  