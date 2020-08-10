class Weather{
  constructor(city, country){
    this.apiKey = 'f60782ecdd64614195aafe36dd644898';
    this.city = city;
    this.country = country;
  }

  //Fetch weather from api
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  //change weather location
  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }
}