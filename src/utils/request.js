import Axios from "axios";

export default class Req {
  static getLocalWeather(req, returnData) {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${req.coords.latitude}&lon=${req.coords.longitude}&units=metric&lang=fr&appid=c43cdb00d4e5df5c5224beeb49b93999`
    )
      .then(response => returnData(response.data))
      .catch(error => console.log("error =>", error));
  }
}
