import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/mainPage/MainPage';
import reportWebVitals from './reportWebVitals';
import './assets/scss/style.global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GalleryPage from './pages/galleryPage/GalleryPage';
import Header from './components/header/Header';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
