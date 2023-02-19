import moment from 'moment';

const currentDate = moment();
export const dayOfWeek = currentDate.format('dddd');
const dateFormat = 'D MMMM YYYY г.';
export const date = moment(currentDate).locale('ru').format(dateFormat);

export const getTime = () => {
  return new Date().toLocaleTimeString();
};

export const tempTransform = (temp: number) => {
  return Math.round(temp) + ' °C';
};
