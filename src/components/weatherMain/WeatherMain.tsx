import React, { FC, useEffect, useState } from 'react';
import { date, dayOfWeek, getTime, tempTransform } from '../../utils/utils';
import { ICON_API, ICON_SIZE } from '../../constants/constants';
import styles from './styles.module.scss';

interface Props {
  weatherIconData: string;
  temperature: number;
  city: string;
}

const WeatherMain: FC<Props> = ({ weatherIconData, city, temperature }) => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentTemp, setCurrentTemp] = useState<string>('');

  useEffect(() => {
    setCurrentTemp(tempTransform(temperature));
  }, [temperature]);

  const timeUpdate = () => {
    setCurrentTime(getTime());
  };

  useEffect(() => {
    setInterval(timeUpdate, 1000);
  }, []);

  return (
    <section className={styles.weatherMain}>
      <h2 className={styles.city}>{city}</h2>
      <>
        <span className={styles.temperature}>{currentTemp}</span>
        {weatherIconData && (
          <img className={styles.img} src={`${ICON_API + weatherIconData + ICON_SIZE}`} alt="weatherIcon" />
        )}
      </>
      <span className={styles.dayOfWeek}>{dayOfWeek}</span>
      <span className={styles.month}>{date}</span>
      <span className={styles.time}>{currentTime}</span>
    </section>
  );
};

export default WeatherMain;
