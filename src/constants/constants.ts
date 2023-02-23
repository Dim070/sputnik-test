import { IWeather } from '../models/IWeather';
import { INasa } from '../models/INasa';
import { TimeOfDayType } from '../hooks/BackgroundChanger';
import { IAPICollection, ICollection } from '../models/ICollection';
import loading from '../assets/images/loading.gif';

export const NASA_KEY = '1YZYnI5oybeNqb3TkR3COFNhesHQnpRW5khZom3d';
export const NASA_API = 'https://api.nasa.gov/planetary/apod';

export const WEATHER_KEY = 'da32ad61967ac0712c383a4e9ace42aa';
export const WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather';
export const ICON_API = 'http://openweathermap.org/img/wn/';
export const ICON_SIZE = '@2x.png';

export const GALLERY_API = 'https://api.unsplash.com/';
export const RANDOM_GALLERY_API = 'photos/random';
export const COLLECTIONS_GALLERY_API = 'search/photos';
export const GALLERY_KEY = 'Hxc7YGkHGGZ1BhQ4koUmk0hMY1FLbMXUCDvUL8r2YZ8';
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

export const DEFAULT_COLLECTION: ICollection = {
  id: '',
  user: {
    first_name: '',
    last_name: ''
  },
  urls: {
    small: loading
  }
};

export const DEFAULT_AIP_COLLECTION: IAPICollection = {
  results: [DEFAULT_COLLECTION]
};

export const MORNING_HOUR = 6;
export const AFTERNOON_HOUR = 12;
export const EVENING_HOUR = 18;

export const BACKGROUND_COLORS: Record<TimeOfDayType, string> = {
  morning: 'rgba(135, 152, 91, 0.2)',
  afternoon: 'rgba(154, 114, 36, 0.2)',
  evening: 'rgba(93, 93, 178, 0.2)',
  night: 'rgba(68, 51, 51, 0.2)'
};
