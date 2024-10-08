var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");

async function changeWeatherUI() {
  let capitalSearch = search.value.trim();
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=fe07d6e8134aba8d9e25fe9f889157a2`;

  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod === 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerText = data.main.humidity + "%";
    value.innerText = Math.round((data.main.temp - 273.15));
    shortDesc.innerText = (data.weather[0] ? data.weather[0].main : "");
    time.innerText = new Date().toLocaleDateString("vi");
  } else {
    content.classList.add("hide");
  }
}


search.addEventListener('keypress', function(e){
   if(e.code === 'Enter'){
       changeWeatherUI();
   }
})