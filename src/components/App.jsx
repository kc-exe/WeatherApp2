import React, { useState } from "react";
import axios from "axios";
import Heading from "./Heading";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState("");
  // const [background, setBackground]= useState("")
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c7802c927c8f52f8389fc5611a185eed`;

  //let background = "";

  function savelocation(event) {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
      console.log(response.data.weather[0].icon);
      let iurl =
        "http://openweathermap.org/img/wn/" +
        response.data.weather[0].icon +
        "@2x.png";
      console.log(iurl);
      setIcon({ iconUrl: iurl });
      console.log(icon);
    });
    //setLocation(" ");
    /*setBackground({
  if ({data.weather[0].description} === "clear sky" ||
    "few clouds" ||
    "scattered clouds"
  )
    return "sunny";
  if (
    data.weather[0].description === "broken clouds" ||
    "shower rain" ||
    "rain" ||
    "thunderstorm"
  )
    return "rainy";
  if (data.weather[0].description === "snow") return "snow";*/
    // return "input";});
    //function to decide the background of the page.
    /* background = function getBackground() {
      if (
        data.weather[0].description === "clear sky" ||
        "few clouds" ||
        "scattered clouds"
      )
        return "sunny";
      if (
        data.weather[0].description === "broken clouds" ||
        "shower rain" ||
        "rain" ||
        "thunderstorm"
      )
        return "rainy";
      if (data.weather[0].description === "snow") return "snow";
      return "input";
    };*/
    event.preventDefault();
  }

  //iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  return (
    /*<div
      className={typeof data.main === "undefined" ? "input" : { background }}
    >*/ <div className="input">
      <Heading />

      <div className="container">
        <div className="search">
          <form onSubmit={savelocation}>
            <input
              className="inputValue"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              type="text"
              placeholder="enter the city name"
            />
            <input className="inputValue" type="submit" value="Search" />
          </form>
        </div>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temperature">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
        </div>
        <div className="middle">
          <div className="feelsLike">
            {data.weather ? (
              <p className="bold">{data.main.feels_like}°C</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="minTemp">
            {data.main ? <p className="bold">{data.main.temp_min}°C</p> : null}
            <p>Min Temp</p>
          </div>
          <div className="maxTemp">
            {data.wind ? <p className="bold">{data.main.temp_max}°C</p> : null}
            <p>Min Temp</p>
          </div>
        </div>
        <div className="bottom">
          <div className="description">
            {data.weather ? (
              <p className="bold">{data.weather[0].description}</p>
            ) : null}
            <img
              className="icons"
              src={icon.iconUrl}
              alt="Weather Description"
            />
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed}km/h</p> : null}
            <p>wind speed</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
