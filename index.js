// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };
// let crd = {};
// function success(pos) {
//    crd = pos.coords;
// console.log(crd);
//   console.log('Ваше текущее местоположение:');
//   console.log(`Широта: ${crd.latitude}`);
//   console.log(`Долгота: ${crd.longitude}`);
// //   console.log(`Плюс-минус ${crd.accuracy} метров.`);
//     return crd;
// };
// console.log(crd);

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// };

// navigator.geolocation.getCurrentPosition(success);

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
    const API_KEY = "2e7139c6a4f80c6748f001736e0d42cb";
    const BASE_URL="https://api.openweathermap.org/data/2.5/weather"
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // выводим ответ API в консоль
      // здесь можно написать код для обработки данных погоды
    })
    .catch(error => console.log(error)); // обработка ошибок
}

getLocation();
