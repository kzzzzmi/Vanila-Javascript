const API_KEY = "6ea2ff3e6267b14a8266f897d449704d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
    });
}

function onGeoError() {
  alert("당신의 위치를 찾을 수 없어 날씨 정보를 표시할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
