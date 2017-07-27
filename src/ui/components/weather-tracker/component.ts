import Component, {tracked} from '@glimmer/component';

export default class WeatherTracker extends Component {

  @tracked weather;

  constructor(options){
    super(options);
    this.loadWeather();
  }

  async loadWeather(){
    let response = await fetch('http://api.openweathermap.org/data/2.5/weather?zip=85255,us&units=imperial&APPID=795602306dcf12ecf4b70b997cc60b6a&units=imperial');
    this.weather = await response.json();
    this.weather = Math.floor(this.weather.main.temp);
  }

};
