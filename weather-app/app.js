// Init the Local Storage
const storage = new Storage();
// get storaed location data
const weatherLocation = storage.getLocation();

// Init the weather class
const weatherData = new Weather(weatherLocation.city);

// Init the UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

// Change Location
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;

  weatherData.changeLocation(city);

  // Set location in LS
  storage.setLocation(city);

  getWeather();

  // Close the modal
  $("#locModal").modal("hide");
});

// Get Weather function

function getWeather() {
  weatherData
    .getWeather()
    .then((result) => {
      ui.paint(result);
    })
    .catch((err) => console.log(err));
}
