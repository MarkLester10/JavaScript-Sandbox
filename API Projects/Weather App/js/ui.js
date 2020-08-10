class UI{
  constructor(){
    this.dateDayname = document.querySelector(".date-dayname");
    this.dateDay = document.querySelector(".date-day");
    this.location = document.querySelector(".location");
    this.weatherTemp = document.querySelector(".weather-temp");
    this.weatherDesc = document.querySelector(".weather-desc");
    this.precipitation = document.querySelector("#precipitation");
    this.humidity = document.querySelector("#humidity");
    this.wind = document.querySelector("#wind");
    this.icon = document.querySelector("#icon")

    this.days = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
  }

  paint(data){
    this.dateDayname.textContent = this.days[new Date(data.dt).getDay()];

    this.dateDay.textContent = this.timeConverter(data.dt);

    this.location.textContent = `${data.name}, ${data.sys.country}`

    this.icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    this.weatherDesc.textContent = data.weather[0].description;

    this.weatherTemp.textContent = Math.round(parseFloat(data.main.temp)-273.15) + '°C';

    this.humidity.textContent = data.main.humidity + '%';
    this.precipitation.textContent = data.rain[0];
  }


    //convert date
   timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = `${date} ${month} ${year}`
    return time;
  }

}