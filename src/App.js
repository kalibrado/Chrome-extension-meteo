import React, { useState, useEffect } from "react";
import View from "./components/view";
import background from "./img/fond.jpg";
import "./style/App.css";

const Req = require("./utils/request");

function App() {
  const [state, setState] = useState({
    city: "",
    country: "",
    main: [],
    weather: []
  });

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(myPosition);
  }, []);

  const myPosition = position => {
    Req.default.getLocalWeather(position, data => {
      setState({
        city: data.name,
        country: data.sys.country,
        main: data.main,
        weather: data.weather[0]
      });
    });
  };

  return (
    <div className="App">
      <img className="bg" src={background} alt="Background" />
      {state.city === "" ? (
        <h1>Probleme de connexion internet</h1>
      ) : (
        <View state={state} />
      )}
    </div>
  );
}

export default App;
