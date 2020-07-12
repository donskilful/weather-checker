import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './font-awesome/css/font-awesome.min.css'
import Weather from './app_component/weather.component'

const API_key = "fec455fb9bf39217ffbaa6b6906ea7f9";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  getWeather = async () => {
    const api_call = await fetch("http")
  }
  render(){
    return (
    <div className="App">
      <Weather />
    </div>
    )
  }
}


export default App;
