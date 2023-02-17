import React, { FC, useEffect, useState } from 'react';
import { getDate, getTime } from '../../utils/utils';
import { ICON_API, ICON_SIZE } from '../../constants/constants';

interface Props {
  weatherIconData: string;
  temperature: number;
  city: string;
}

const Weather: FC<Props> = ({ weatherIconData, city, temperature }) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  const timeUpdate = () => {
    setCurrentTime(getTime());
  };

  useEffect(() => {
    setInterval(timeUpdate, 1000);
  }, []);

  const currentDate = getDate();

  return (
    <main>
      <h2>{city}</h2>
      <div>
        <div>{temperature}</div>
        {weatherIconData && <img src={`${ICON_API + weatherIconData + ICON_SIZE}`} alt="weatherIcon" />}
      </div>
      <span>{currentDate}</span>
      <span>{currentTime}</span>
    </main>
  );
};

export default Weather;
