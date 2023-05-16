import React, { useState, useEffect } from "react";
import AppRouter from "./AppRouter";
import styles from '../style/Home.module.css';
function Home() {
  const [locationData, setLocationData] = useState({});
  const [manualLocationData, setManualLocationData] = useState({ latitude: '', longitude: '' });
  const [weather, setWeather] = useState(null);
  const apiKey = "f2fdb141df8e2c8c4573fdb7a40ca6ff";

  function getLocationData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocationData({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("You need to unable Geolocation in your browser");
    }
  }

  useEffect(() => {
    getLocationData();
  }, []);

  useEffect(() => {
    const { latitude, longitude } = locationData;

    if (latitude && longitude) {
      fetchWeather(latitude, longitude);
    }
  }, [locationData]);

  const fetchWeather = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }

  const handleInputChange = (event) => {
    setManualLocationData({
      ...manualLocationData,
      [event.target.name]: event.target.value
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { latitude, longitude } = manualLocationData;

    if (latitude && longitude) {
      fetchWeather(latitude, longitude);
    }
  }

  return (
    <>
      <AppRouter />
      <div className={styles.container}>
        <div>Votre Position</div>
        <div>Latitude: {locationData.latitude}</div>
        <div>Longitude: {locationData.longitude}</div>
        <div>
          <h1>Votre Météo</h1>
          {weather && (
            <>
              <p>Informations Générales : {weather.weather[0].main}</p>
              <p>Informations Détailées : {weather.weather[0].description}</p>
              <p>Vent : {weather.wind.speed} </p>
            </>
          )}
        </div>
        <div className="SelectedLocation">
          <h2>Entrez une position manuellement</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Latitude :
              <input type="text" name="latitude" onChange={handleInputChange} value={manualLocationData.latitude} />
            </label>
            <label>
              Longitude :
              <input type="text" name="longitude" onChange={handleInputChange} value={manualLocationData.longitude} />
            </label>
            <button type="submit">Obtenir la météo</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
