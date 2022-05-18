import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import { fetchCountriesData } from './Redux/Countries/Countries';
import CountriesPage from './pages/CountriesPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Country/:name" element={<CountriesPage />} />
      <Route path="*" element={(<main><p>Not exit!</p></main>)} />
    </Routes>
  );
};

export default App;
