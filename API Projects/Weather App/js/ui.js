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
    this.sunrise = document.querySelector("#sunrise");
    this.sunset = document.querySelector("#sunset");
    this.weatherGradient = document.querySelector(".weather-gradient");

    this.days = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
  }

  paint(data){

    this.dateDayname.textContent = this.days[new Date(data.dt).getDay()];

    this.dateDay.textContent = this.dateConverter(data.dt);

    this.location.textContent = `${data.name}, ${data.sys.country}`

    this.icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    this.weatherDesc.textContent = data.weather[0].description;

    this.weatherTemp.textContent = `${this.toCelcius(data.main.temp)} °C / ${this.toFahrenheit(data.main.temp)} °F `;
    

    this.humidity.textContent = data.main.humidity + '%';

    this.precipitation.textContent = `${data.clouds.all} %`;
  

    this.sunrise.textContent =  this.timeConverter12hr(data.sys.sunrise, data.timezone);

    this.sunset.textContent = this.timeConverter12hr(data.sys.sunset, data.timezone);

    this.wind.textContent = `${data.wind.speed} m/s`;
  }


    //convert date
   dateConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const formatedDate = `${date} ${month} ${year}`
    return formatedDate;
  }

  //convert time
  timeConverter12hr(unixTimestamp, timezone){
    let dateObj = new Date(unixTimestamp * 1000);
    
    //here we get the country's timezone
    const utc_offset = new Date(timezone).getTimezoneOffset();
    //  console.log(utc_offset);

    dateObj.setMinutes(dateObj.getMinutes() + utc_offset);

    //we're converting the time based on Asia's timezone UTC +8
    const country_offset = 8*60;
    
    const convertedTime = dateObj.setMinutes(dateObj.getMinutes() + country_offset);
    const time  = new Date(convertedTime);
    let hours = time.getHours(); // gives the value in 24 hours format
    const AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    const minutes = time.getMinutes() ;
    const formattedTime = `${hours}:${minutes} ${AmOrPm} UTC +8`; 

    return formattedTime;
  }


  //kelvin to celsius
  toCelcius(temp){
    return Math.round(parseFloat(temp-273.15))
  }

  //kelvin to fahrenheit
  toFahrenheit(temp){
    const tempF = parseFloat(temp);
    return Math.round(((tempF-273.15)*1.8)+32);
  }
}