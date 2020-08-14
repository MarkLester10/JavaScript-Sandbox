//init Weather, UI, Storage object
const storage = new Storage();

//get location data from storage
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

//Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

//change location event
document.getElementById("w-change-btn").addEventListener('click',(e)=>{
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;

  //change location
  weather.changeLocation(city,country);

  //set location to local storage
  storage.setLocationData(city, country);

  getWeather();

  document.querySelector(".close-animatedModal").dispatchEvent(new Event('click'))

})

function getWeather(){
  weather.getWeather()
        .then(data=>{
          ui.paint(data);
          console.log(data)
        })
        .catch(err=>console.log(err))
}
