function liveDayTime() {
  let now = new Date();

  let date = now.getDate();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = now.getFullYear();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];

  let showCurrentDay = document.querySelector("#current-day");
  showCurrentDay.innerHTML = `${day}, ${date} ${month} ${year} | ${hour}:${minutes}`;
}
liveDayTime();

// function citySearch(event) {
//   event.preventDefault();
//   let cityInput = document.querySelector("#exampleInputInsertCity1");
//   let showCity = document.querySelector("#current-city");

//   showCity.innerHTML = `${cityInput.value}`;
// }

// let form = document.querySelector("#search-form");
// form.addEventListener("submit", citySearch);
function convertTemperatureF(event) {
  event.preventDefault();
}
function clickCelcius(event) {
  event.preventDefault();
  let tempC = document.querySelector("#card-text-temp");
  tempC.innerHTML = "18°";
}
let clickingCelcius = document.querySelector("#card-text-tempC");
clickingCelcius.addEventListener("click", clickCelcius);
function clickFahrenheit(event) {
  event.preventDefault();
  let tempF = document.querySelector("#card-text-temp");
  tempF.innerHTML = "64°";
}
let clickingFahrenheit = document.querySelector("#card-text-tempF");
clickingFahrenheit.addEventListener("click", clickFahrenheit);

//Homework Week 5

function displayTemp(response) {
  let showCity = document.querySelector("#current-city");
  showCity.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#card-text-temp");
  tempElement.innerHTML = `${temp}°`;
}

function searchCity(city) {
  let apiKey = "12bdbd86bcab685847fea4f4c4d743cf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#exampleInputInsertCity1").value;
  searchCity(city);
}

let enterCity = document.querySelector("#search-form");
enterCity.addEventListener("submit", showCity);

function searchPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "12bdbd86bcab685847fea4f4c4d743cf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchPosition);
}

let button = document.querySelector("#exampleInputLocation1");
button.addEventListener("click", getCurrentPosition);
