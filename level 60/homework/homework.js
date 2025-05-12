let day = 3;

switch (day) {
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  case 7:
    console.log("კვირა");
    break;
}


let number = 8; 

let result = (number % 2 === 0) ? "ლუწი" : "კენტი";
console.log(result);


let num = prompt("შეიყვანე რიცხვი (1-4):");
number = Number(num);

switch (num) {
  case 1:
    console.log("მზიანი");
    break;
  case 2:
    console.log("წვიმიანი");
    break;
  case 3:
    console.log("მოღრუბლული");
    break;
  case 4:
    console.log("ქარიანი");
    break;
}


const month = parseInt(prompt("შეიყვანე თვის ნომერი (1-12):"));

let monthName;
switch (month) {
    case 1: monthName = "იანვარი"; break;
    case 2: monthName = "თებერვალი"; break;
    case 3: monthName = "მარტი"; break;
    case 4: monthName = "აპრილი"; break;
    case 5: monthName = "მაისი"; break;
    case 6: monthName = "ივნისი"; break;
    case 7: monthName = "ივლისი"; break;
    case 8: monthName = "აგვისტო"; break;
    case 9: monthName = "სექტემბერი"; break;
    case 10: monthName = "ოქტომბერი"; break;
    case 11: monthName = "ნოემბერი"; break;
    case 12: monthName = "დეკემბერი"; break;
    
    
}

const half = (month >= 1, month <= 12);
 (month <= 6 ? "პირველი ნახევარი" : "მეორე ნახევარი")

console.log("Switch -> " + monthName);


