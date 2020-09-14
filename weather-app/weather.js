class Weather {
  constructor(city) {
    this.api = "61e23db092a457c7103e40d9561e19b9";
    this.city = city;
  }

  // Get the weather data
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change the Weather Location
  changeLocation(city) {
    this.city = city;
  }
}
