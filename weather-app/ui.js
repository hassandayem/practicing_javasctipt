class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.innerText = `Relative Humidity: ${weather.main.humidity}`;
    this.pressure.innerText = `Pressure: ${weather.main.pressure}`;
    this.feelsLike.innerText = `Feels Like: ${weather.main.feels_like}`;
    this.wind.innerText = `Wind Status ||  Speed: ${weather.wind.speed} | Wind degree: ${weather.wind.deg}`;
  }
}
