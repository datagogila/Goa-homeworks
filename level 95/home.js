console.log("ლომიიიიი")

    const APIKEY = "5faa8e189a4b974b5f1dd2556054e48f";
    const cityNamee = "lomi";
    const APIi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=ka`;

    fetch(API)
      .then(response => response.json())
      .then(data => {
        console.log(data); 
      })
      .catch(error => console.error("შეცდომა:", error))
      .finally(() => {
        console.log("დავამთავრე დათოვ"); 
      });




    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const nameInput = document.getElementById("name").value;
      console.log("შეიყვანე:", nameInput);
    });



const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f";
const cityName = "lomi";
const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=ka`;

fetch(API)
  .then(response => response.json())
  .then(data => {
    console.log("მიღებული მონაცემები:", data);

    const weatherDiv = document.getElementById("weather");
    weatherDiv.innerHTML = `
      <h2>ქალაქი: ${data.name}</h2>
      <p>ტემპერატურა: ${data.main.temp}°C</p>
      <p>ამინდის მდგომარეობა: ${data.weather[0].description}</p>
      <p>ქარის სიჩქარე: ${data.wind.speed} მ/წმ</p>
    `;
  })
  .catch(error => console.error("შეცდომა:", error));




  function asyncPromiseFunction(work) {
    return new Promise((resolve, reject) => {
      if (!work) {
        reject("შეცდომაა ლომო");
      } else {
        setTimeout(() => resolve(work + " შესრულდა წარმატებით"), 1000);
      }
    });
  }


  const APIKEYi = "5faa8e189a4b974b5f1dd2556054e48f";
const cityNameo = "lomi";
const APIp= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=ka`;

const btn = document.getElementById("loadBtn");
const list = document.getElementById("weatherList");

btn.addEventListener("click", () => {
  fetch(API)
    .then(response => response.json())
    .then(data => {
      list.innerHTML = `
        <div>ქალაქი: ${data.name}</div>
        <div>ტემპერატურა: ${data.main.temp}°C</div>
        <div>ამინდის მდგომარეობა: ${data.weather[0].description}</div>
        <div>ქარი: ${data.wind.speed} მ/წმ</div>
      `;
      console.log("მონაცემები დაემატა");
    })
    .catch(error => console.error("შეცდომა:", error));
});
