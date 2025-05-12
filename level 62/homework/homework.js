const password = "Group 41 is best";
  let attempts = 3;

  while (attempts > 0) {
      const user = prompt("შეიყვანეთ პაროლი:");

      if (user === password) {
          alert("თქვენი შეყვანილი პაროლი სწორია");
          return;
      } else {
          attempts--;
          if (attempts > 0) {
              alert("არასწორი პაროლი. დარჩენილი ცდების რაოდენობა: " + attempts);
          } else {
              alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
          }
      }
  }






let factorial = 1;
  
    for (let i = 1; i <= 5; i++) {
      factorial *= i;
    }
  
    console.log(5 + " რიცხვის ფაქტორიალია: " + factorial);





function countdown() {
  for (let i = 100; i >= 0; i--) {
    console.log("დარჩენილია" + i + "წამი");
  }
}

countdown();





  
 
        
      
  
      