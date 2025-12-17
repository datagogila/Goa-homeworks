const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let first = "";
let second = "";
let operator = "";

buttons.forEach(btn => {
  btn.onclick = () => {
    const value = btn.innerText;
    
    if (value >= "0" && value <= "9") {
      if (operator === "") {
        first += value;
        display.innerText = first;
      } else {
        second += value;
        display.innerText = second;
      }
    }


    if (value === "+" || value === "-" || value === "x" || value === "/") {
      operator = value;
    }

    
    if (value === "=") {
      let result = 0;

      if (operator === "+") result = Number(first) + Number(second);
      if (operator === "-") result = Number(first) - Number(second);
      if (operator === "x") result = Number(first) * Number(second);
      if (operator === "/") result = Number(first) / Number(second);

      display.innerText = result;

      first = result.toString();
      second = "";
      operator = "";
    }

    
    if (value === "RESET") {
      first = "";
      second = "";
      operator = "";
      display.innerText = "0";
    }
  };
});


