export interface IWeather {
  weather: IWeatherIcon[];
  main: IWeatherTemp;
  name: string;
}

export interface IWeatherIcon {
  icon: string;
}

export interface IWeatherTemp {
  temp: number;
}
