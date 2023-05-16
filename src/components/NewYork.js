import React, { useState, useEffect } from "react";
import AppRouter from "./AppRouter";
import styles from '../style/Town.module.css';
function NewYork() {
  const [weather, setWeather] = useState(null);
  const apiKey = "f2fdb141df8e2c8c4573fdb7a40ca6ff";
  const city = "NEW YORK";

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div className={styles.container}>
      <AppRouter />
      {weather && (
        <div>
          <h1>Météo</h1>
          <p>Informations Générales : {weather.weather[0].main}</p>
          <p>Informations Détailées : {weather.weather[0].description}</p>
          <p>Vent : {weather.wind.speed} </p>
        </div>
      )}
    </div>
  );
}

export default NewYork;
