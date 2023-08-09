// key값 사용하기
const API_KEY = config.WHETHER_API_KEY;

function getWeatherData() {
  const weatherData = {
    "01d": { img: "clear", text: "맑음" },
    "01n": { img: "clear", text: "맑음" },
    "02d": { img: "few_clouds", text: "구름 많음" },
    "02n": { img: "few_clouds", text: "구름 많음" },
    "03d": { img: "clouds", text: "흐림" },
    "03n": { img: "clouds", text: "흐림" },
    "04d": { img: "clouds", text: "흐림" },
    "04n": { img: "clouds", text: "흐림" },
    "13d": { img: "snow", text: "눈" },
    "09d": { img: "rain", text: "비" },
    "10d": { img: "rain", text: "비" },
    "11d": { img: "thunder", text: "번개" },
    "50d": { img: "mist", text: "안개" },
  };

  // 대구 동성로 중앙 파출소 위도, 경도
  const lat = 35.8672;
  const lon = 128.5936;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) => response.json())
    .then((data) => {
      const weatherElement = document.querySelector("#weather");
      const weatherIcon = weatherElement.querySelector("span:first-child");
      const weatherText = weatherElement.querySelector("span:nth-child(2)");
      const weather = document.querySelector("#weather span:last-child")

      const temp = data.main.temp
      const tempString = temp.toFixed(1);

      weather.innerText = `${tempString}°C`

      const weatherIconCode = data.weather[0].icon;
      // console.log(data.weather[0]);
      const weatheIconUrl = weatherData[weatherIconCode].img;
      // console.log(iconurl);
      weatherIcon.innerHTML = `<img src="./img/${weatheIconUrl}.png" alt="weather icon">`;
      weatherText.innerHTML = weatherData[weatherIconCode].text;
    }).catch(error => {
      const weatherElement = document.querySelector("#weather");
      const weatherText = weatherElement.querySelector("span:nth-child(2)");
      weatherText.innerHTML = `
      Loading...
      `;
    });
}

getWeatherData();