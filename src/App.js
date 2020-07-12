import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './font-awesome/css/font-awesome.min.css'
import Weather from './app_component/weather.component'
import Form from './app_component/form.component';

const API_key = "fec455fb9bf39217ffbaa6b6906ea7f9";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };

    //this handles the different weather icons
    this.weatherIcon = {
      Snowflake: "fa fa-snowflake-o fa-2x",
      Drizzle: "fa fa-tint fa-2x",
      Rain: "",
      Thunderstorm: "fa fa-bolt fa-2x",
      Atmosphere: "",
      Clear: "",
      Cloud: "fa fa-cloud fa-2x"
    }
  }

  //This handles changing the temperature from kelvin to degree celsius
  calCelsius(temp) {
    let celsius = Math.floor(temp - 273.15)
    return celsius;
  }

  //this handles the change in weather icon with respect to the weather
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({ icon: this.weatherIcon.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: this.weatherIcon.Snowflake });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: this.weatherIcon.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: this.weatherIcon.Cloud });
        break;
      default:
        this.setState({ icon: this.weatherIcon.Cloud });
    }
  }

  getWeather = async (e) => {

    e.preventDefault(); //this prevents defaults loading of page when the get weather function is called.

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

      const response = await api_call.json();
      console.log(response);

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description,

      });

    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
    } else {
      this.setState({error:true});
    }
  };
  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error ={this.state.error} />

        <Weather city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weatherIcon={this.state.icon} />
      </div>
    )
  }
}


export default App;
