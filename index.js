let geolocation = navigator.geolocation;
let lat = 0;
let lon = 0;

function getLocation() {
  geolocation.getCurrentPosition(showLocation);
}

function showLocation(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  console.log(`Местоположение: lat:${lat}, long:${lon}`);
  getWeather(lat, lon); // вызов функции для получения погоды
}

function getWeather(lat, lon) {
    const API_KEY = "";
    const BASE_URL="https://api.openweathermap.org/data/2.5/weather"
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
}

getLocation();
