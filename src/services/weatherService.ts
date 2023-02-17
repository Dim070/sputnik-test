import { IWeather } from '../models/IWeather';
import { WEATHER_API, WEATHER_KEY } from '../constants/constants';
import axios from 'axios';

export async function getWeather() {
  const position = await new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const { latitude, longitude } = position.coords;

  return await axios
    .get<IWeather>(`${WEATHER_API}?lat=${latitude}&lon=${longitude}&units=metric&exclude=current&appid=${WEATHER_KEY}`)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      console.log('Не удалось получить данные о погоде');
    });
}
