import React from "react";

const View = ({ state }) => {
  return (
    <>
      <h1>
        À {state.city}, <i>{state.country}</i>
      </h1>
      <h1> Il fait {state.main.temp} °C </h1>
      <img
        className="weatherIcon"
        src={`http://openweathermap.org/img/w/${state.weather.icon}.png`}
        alt="weatherIco"
      />
      <h2> {state.weather.description}</h2>
    </>
  );
};

export default View;
