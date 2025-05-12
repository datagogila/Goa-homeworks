let age = Number(prompt("შეიყვანეთ თქვენი ასაკი:"));
let gender = prompt("შეიყვანეთ თქვენი სქესი (კაცი/ქალი):");
let income = Number(prompt("შეიყვანეთ თქვენი თვიური შემოსავალი:"));

if (age >= 18) {
  if (gender === "ქალი") {
    if (income > 5000) {
      console.log("თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია");
    } else if (income > 3000) {
      console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
    } else {
      console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
    }
  } else if (gender === "კაცი") {
    if (income > 6000) {
      console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
    } else if (income > 4000) {
      console.log("შემოსავალი სტაბილურია");
    } else {
      console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
    }
  } else {
    console.log("გთხოვთ მიუთითოთ სწორი სქესი (კაცი/ქალი)");
  }
} else {
  console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
}


let age = Number(prompt("enter yourage:"));
if (age <= 19) {
    console.log("take your kindle");
}


let number = prompt("შეიყვანეთ რიცხვი:");
number = Number(number);

if (Number(number)) {
    alert("გთხოვთ, შეიყვანოთ რიცხვი");
} else if (number % 2 === 0) {
    alert("რიცხვი არის ლუწი");
} else {
    alert("რიცხვი არის კენტი");
}


let a = prompt("შეიყვანეთ ტემპერატურა ცელსიუსში:");
let temperature = Number(a);

if (temperature) {
    alert("გთხოვთ, შეიყვანოთ სწორი რიცხვითი მნიშვნელობა!");
} else if (temperature < 10) {
    alert("ტემპერატურა ცივია");
} else if (temperature <= 25) {
    alert("ტემპერატურა ზომიერია");
} else {
    alert("ტემპერატურა ცხელია");
}

let b = prompt("შეიყვანეთ თქვენი ქულა (0-100):");
let score = parseInt(b);

if (score), score < 0, score > 100 {
    alert("გთხოვთ, შეიყვანოთ სწორი ქულა 0-დან 100-მდე!");
} else if (score >= 90) {
    alert("შეფასება: A");
} else if (score >= 80) {
    alert("შეფასება: B");
} else if (score >= 70) {
    alert("შეფასება: C");
} else if (score >= 60) {
    alert("შეფასება: D");
} else {
    alert("შეფასება: F");
}
