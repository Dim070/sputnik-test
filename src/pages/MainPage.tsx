import React, { useEffect, useState } from 'react';
import { DEFAULT_NASA, DEFAULT_WEATHER } from '../constants/constants';
import { IWeather } from '../models/IWeather';
import { INasa } from '../models/INasa';
import { getWeather } from '../services/weatherService';
import { getNasa } from '../services/nasaService';
import Header from '../components/header/Header';
import WeatherMain from '../components/weatherMain/WeatherMain';
import Footer from '../components/footer/Footer';
import NasaMain from '../components/nasaMain/NasaMain';
import { Container } from '@mui/material';
import styles from './styles.module.scss';
import { useBackgroundChanger } from '../hooks/BackgroundChanger';

function MainPage() {
  const [nasaData, setNasaData] = useState<INasa>(DEFAULT_NASA);
  const [weatherData, setWeatherData] = useState<IWeather>(DEFAULT_WEATHER);

  useEffect(() => {
    getWeather().then((response) => setWeatherData(response || DEFAULT_WEATHER));
  }, []);

  useEffect(() => {
    getNasa().then((response) => setNasaData(response || DEFAULT_NASA));
  }, []);

  const timeOfDayBackground = useBackgroundChanger();
  return (
    <>
      <Container className={styles.container} sx={{ display: 'flex', backgroundColor: `${timeOfDayBackground}` }}>
        <Header />
        <main className={styles.content}>
          <WeatherMain
            city={weatherData.name}
            weatherIconData={weatherData.weather[0].icon}
            temperature={weatherData.main.temp}
          />
          <NasaMain title={nasaData.title} explanation={nasaData.explanation} url={nasaData.url} />
        </main>
        <Footer />
      </Container>
    </>
  );
}

export default MainPage;
