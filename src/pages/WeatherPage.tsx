import React, { useEffect, useState } from 'react';
import { DEFAULT_NASA, DEFAULT_WEATHER } from '../constants/constants';
import { IWeather } from '../models/IWeather';
import { INasa } from '../models/INasa';
import { getWeather } from '../services/weatherService';
import { getNasa } from '../services/nasaService';
import Header from '../components/header/Header';
import Weather from '../components/weather/Weather';
import Footer from '../components/footer/Footer';

function WeatherPage() {
  const [nasaData, setNasaData] = useState<INasa>(DEFAULT_NASA);
  const [weatherData, setWeatherData] = useState<IWeather>(DEFAULT_WEATHER);

  useEffect(() => {
    getWeather().then((response) => setWeatherData(response || DEFAULT_WEATHER));
  }, []);

  useEffect(() => {
    getNasa().then((response) => setNasaData(response || DEFAULT_NASA));
  }, []);

  return (
    <div className="App">
      <Header title={nasaData.title} explanation={nasaData.explanation} url={nasaData.url} />
      <Weather
        city={weatherData.name}
        weatherIconData={weatherData.weather[0].icon}
        temperature={weatherData.main.temp}
      />
      <Footer />
    </div>
  );
}

export default WeatherPage;
