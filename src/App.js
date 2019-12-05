import React, { useState, useEffect } from "react";
import View from "./components/view";
const Req = require("./utils/request");

function App() {
  const [state, setState] = useState({
    city: "",
    country: "",
    main: [],
    weather: []
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(myPosition);
    } else {
      alert("Vous n'avez pas accepté la localisation.");
    }
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

  return <View state={state} />;
}

export default App;
