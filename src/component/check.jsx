import { useState } from "react";
import { useEffect } from "react";
// import DummyApi from "./component/DummyApi";
// import WeatherApi from "./component/weatherApi";
// import "./App.css"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faTemperature0 } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faLocation } from "@fortawesome/free-solid-svg-icons/faLocation";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faWind } from "@fortawesome/free-solid-svg-icons/faWind";

const App = () => {

  const [city , setCity] = useState("");
  const [weatherDetail , setWeatherDetail] = useState({});

  const checkWeather = (e) => {

    e.preventDefault();

    axios.get(`https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${city}`)
    .then(function(response){

      setWeatherDetail(response.data)

    }).catch(function(err){

      console.log(err);

    })

  }

  
  return(
    <div>
    {/* <DummyApi /> */}
    {/* <WeatherApi /> */}

  <div className="d-flex justify-content-center align-items-center main">
    {/* <!-- main div --> */}
    <div className="center px-3 mt-5">
      {/* <!-- upper Div --> */}
      <div className="upperdiv">
        {/* <!-- search div --> */}
        <div className="searchdiv px-2 mt-3">
          <form onSubmit={checkWeather}>
          <input
            type="text"
            id="city"
            placeholder="Montreal"
            className="firstInput"
            value={city} onChange={(e) => {setCity(e.target.value);}}
          />
          <FontAwesomeIcon icon={faSearch} onClick={checkWeather}/>
          {/* <input type="submit" value="submit" /> */}
          </form>
        </div>

        {/* <!-- // Result Div --> */}

        {/* <!-- city Name --> */}
        <div>
          <h2 id="cityName" className="mt-2">{weatherDetail?.location?.name}</h2>
        </div>

        {/* <!-- Weather Feel like --> */}
        <div className="d-flex">
          <h1 id="temp" style={{fontSize:"48px"}}>{weatherDetail?.current?.feelslike_c}</h1>
          <FontAwesomeIcon icon={faCircle} className="mt-1 px-2" />
        </div>

        {/* <!-- Weather Condition --> */}
        <div>
          <p id="weatherCondition">{weatherDetail?.current?.condition?.text}</p>
        </div>

        {/* <!-- Humidity --> */}

        <div className="humidity">Humidity: <span id="humidity">{weatherDetail?.current?.humidity}</span></div>

        <div>
        <img src={`https:${weatherDetail?.current?.condition?.icon}`} alt="" />
        </div>
      </div>

      {/* <!-- Other Details --> */}
      <div className="blur mt-3">
        <div>
          <p className="para">
            <span className="city">{weatherDetail?.location?.name}</span>, 
            <span id="province">{weatherDetail?.location?.region}</span>,     
            <span id="country">{weatherDetail?.location?.country}</span>        
            <FontAwesomeIcon icon={faLocation} className="px-2" />
          </p>
        </div>
        <div>
          <p className="para">
            <span id="time">{weatherDetail?.location?.localtime}</span> 
            <FontAwesomeIcon icon={faClock}  className="px-2"/>
          </p>
        </div>
        <div>
          <p className="para">
            Visibility: <span id="visibility">{weatherDetail?.current?.vis_km}</span> km
            <FontAwesomeIcon icon={faEye} className="px-2" />
          </p>
        </div>
        <div>
          <p className="para">
            Wind Speed: <span id="windSpeed">{weatherDetail?.current?.wind_kph}</span> kph
            <FontAwesomeIcon icon={faWind} className="px-2" />
          </p>
        </div>

        <div>
          <p className="para">
            Temp C: <span id="tempC">{weatherDetail?.current?.temp_c}</span>
            <FontAwesomeIcon icon={faTemperature0}  className="px-2"/>
          </p>
        </div>

        <div>
          <p className="para">
            Temp F: <span id="tempF">{weatherDetail?.current?.temp_f}</span>
            <FontAwesomeIcon icon={faTemperature0} className="px-2" />
          </p>
        </div>
      </div>
    </div>
  </div>



    </div>
  )
}

export default App;