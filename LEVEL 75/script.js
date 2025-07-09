let elem1 = document.getElementById("elem1");
elem1.style.color = "white";
elem1.style.backgroundColor = "blue";
elem1.style.fontSize = "20px";
elem1.style.fontWeight = "bold";
elem1.textContent = "ID";

let elem2 = document.querySelector(".elem2");
elem2.style.color = "black";
elem2.style.backgroundColor = "orange";
elem2.style.fontSize = "18px";
elem2.style.fontStyle = "italic";
elem2.innerText = "class";

let elem3 = document.getElementsByTagName("p")[2];
elem3.style.color = "green";
elem3.style.backgroundColor = "lightgray";
elem3.style.fontSize = "16px";
elem3.style.textDecoration = "underline";
elem3.innerHTML = "p";
