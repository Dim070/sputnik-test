import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherPage from './pages/WeatherPage';
import reportWebVitals from './reportWebVitals';
import './assets/scss/style.global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <WeatherPage />
  </React.StrictMode>
);

reportWebVitals();
