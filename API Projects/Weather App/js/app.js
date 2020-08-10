//init weather object
const weather = new Weather('Manila', "Ph");
const ui = new UI();

//Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// weather.changeLocation("Manila", "PH")

function getWeather(){
  weather.getWeather()
        .then(data=>{
          ui.paint(data);
          console.log(data)
        })
        .catch(err=>console.log(err))
}
