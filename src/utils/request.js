import Axios from "axios";

export default class Req {
  static getLocalWeather(req, returnData) {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${req.coords.latitude}&lon=${req.coords.longitude}&units=metric&lang=fr&appid=${process.env.REACT_APP_WEATHER_KEY}`
    )
      .then(function(response) {
        returnData(response.data);
      })
      .catch(function(error) {
        console.log("error =>", error);
      });
  }
}
