import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/MainPage';
import reportWebVitals from './reportWebVitals';
import './assets/scss/style.global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);

reportWebVitals();
