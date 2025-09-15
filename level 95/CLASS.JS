const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f";
    const cityName = "lomi";
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=ka`;

    const myWeatherAsyncFunc = async () => {
      try {
        const data = await fetch(API)
          .then(response => response.json());

        console.log(data); 

        
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
          <p>ქალაქი: ${data.name}</p>
          <p>ტემპერატურა: ${data.main.temp}°C</p>
          <p>ამინდის მდგომარეობა: ${data.weather[0].description}</p>
        `;
      } catch (error) {
        console.error("შეცდომა API-დან წამოღებისას:", error);
      }
    }

    myWeatherAsyncFunc();
