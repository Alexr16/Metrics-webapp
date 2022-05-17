import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Country/:name" element={<CountriesPage />} />
        <Route path="*" element={(<main><p>Not exit!</p></main>)} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
