import { IWeather } from '../models/IWeather';
import { INasa } from '../models/INasa';

export const NASA_KEY = '1YZYnI5oybeNqb3TkR3COFNhesHQnpRW5khZom3d';
export const NASA_API = 'https://api.nasa.gov/planetary/apod';

export const WEATHER_KEY = 'da32ad61967ac0712c383a4e9ace42aa';
export const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather';
export const ICON_API = 'http://openweathermap.org/img/wn/';
export const ICON_SIZE = '@2x.png';

export const GITHUB_URL = 'https://github.com/Dim070?tab=repositories';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/dmitriy-tsyrov-593509229/';

export const DEFAULT_WEATHER: IWeather = {
  weather: [
    {
      icon: ''
    }
  ],
  name: '',
  main: {
    temp: -1
  }
};

export const DEFAULT_NASA: INasa = {
  title: '',
  explanation: '',
  url: ''
};
