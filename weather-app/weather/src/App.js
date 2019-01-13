import React, { Component } from "react";
import Titles from "./components/titles";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "9b3b4e386b6cac9f20fa1928c2b096ca";

class App extends Component {
  getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
