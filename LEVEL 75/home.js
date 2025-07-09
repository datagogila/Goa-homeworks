//აბრუნებს ან ცვლის ელემენტის შიგნით არსებულ HTML კოდს. 
//აბრუნებს ან ცვლის ელემენტის შიგნით არსებულ ტექსტს, 
function changeText() {
    const element = document.getElementById("welcomeText");
    element.innerText = "ტექსტი შეიცვალa";
  }

  function changeMessages() {
    const elements = document.getElementsByClassName("message");
    
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerText = "ტექსტი ნომერი " + (i + 1) + " შეიცვალა!";
      elements[i].style.color = "green";
      elements[i].style.fontWeight = "bold";
    }
  }

  function styleParagraphs() {
    const paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.backgroundColor = "lightblue";
      paragraphs[i].style.padding = "10px";
      paragraphs[i].style.borderRadius = "8px";
    }
  }

  function changeContent() {
    const element = document.getElementById("content");
    element.innerHTML = ("p");
}

function changeText() {
    const element = document.getElementById("textElement");
    element.innerText = "ტექსტი  შეიცვალა innerText-ით!";
  }

  function changeStyle() {
    const element = document.getElementById("styleText");

    element.style.color = "white";
    element.style.backgroundColor = "darkblue";
    element.style.fontSize = "20px";
    element.style.padding = "15px";
    element.style.borderRadius = "10px";
    element.style.fontWeight = "bold";
  }