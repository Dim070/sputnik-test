export const getDate = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return today.toLocaleDateString('ru-GB', options);
};

export const getTime = () => {
  return new Date().toLocaleTimeString();
};
