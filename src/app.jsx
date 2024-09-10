import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CountryPage from './pages/countryPage';
import './App.css';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryPage />} />
      </Routes>
  );
};

export default App;
