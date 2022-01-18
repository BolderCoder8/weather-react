import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The Weather in ${props.city} is ${response.data.main.temp}°C`);
  }
  let apiKey = "cf794339bb437422a6881c419dd75e02";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Testing react</h2>;
}
