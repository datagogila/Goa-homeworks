// 1
document.getElementById("myDiv").classList.add("highlight");
document.getElementById("myDiv").classList.remove("highlight");

document.getElementById("toggleButton")
    document.getElementById("targetDiv").classList.toggle("active")
  
    console.log(document.getElementById("checkParagraph").classList.contains("important"));

    document.getElementById("replaceDiv").classList.replace("red", "blue");
    const div = document.getElementById("itemDiv");
    console.log(div.classList[1]);
    

//2
const ul = document.getElementById('myList');

const newLi = document.createElement('li');
newLi.textContent = 'New Item';
ul.appendChild(newLi);

  ul.removeChild(ul.firstElementChild);


//3
    const paragraph = document.getElementById('myParagraph');

    paragraph.textContent = 'New text content!';

//4
const div = document.getElementById('styledDiv');

div.style.backgroundColor = 'lightblue';
div.style.color = 'darkblue';
  //5
  const ul = document.getElementById('myList');

  newLi.textContent = 'New list item';

  ul.appendChild(newLi);

  //6

  const ul = document.getElementById('removableList');
  const secondLi = ul.children[1];
    ul.removeChild(secondLi);

//7
const img = document.getElementById('myImage');

img.src = 'https://www.crystalsport.ge/uploads/news/75805/small_dbdfc84886adc59e999542044ec90d3a.webp';
img.alt = 'Updated image';

//8
    let color = 'red';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  
    const box = document.getElementById('colorBox');
    box.style.backgroundColor = getRandomColor();
  
//9
document.getElementById("changeButton").onclick = () => {
    document.getElementById("myImage").src = "image2.jpg";
  };
//10
document.getElementById("toggleBtn").onclick = () => {
    const text = document.getElementById("myText");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  };
  
//11

let count = 0;

document.getElementById("increaseBtn").onclick = () => {
  count++;
  document.getElementById("counter").textContent = count;
};



