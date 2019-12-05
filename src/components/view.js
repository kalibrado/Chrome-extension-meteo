import React from "react";
import background from "../img/fond.jpg";
import "../style/App.css";

const View = ({ state }) => {
  return (
    <div className="App">
      <img className="bg" src={background} alt="Background" />
      <h1>
        {state.city} <i>{state.country}</i>
      </h1>
      <img
        className="weatherIcon"
        src={`http://openweathermap.org/img/w/${state.weather.icon}.png`}
        alt="weatherIco"
      />
      <h1>{state.main.temp} °C </h1>
      <h1> {state.weather.description}</h1>
    </div>
  );
};

export default View;
