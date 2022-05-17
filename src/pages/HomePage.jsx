import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { GrMicrophone } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLeft } from 'react-icons/ai';
import { fetchCountriesData } from '../Redux/Countries/Countries';
import './HomePage.scss';
import { getMapUrl } from '../Utilities/Map';
import CountriesList from '../components/CountriesList';

const HomePage = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.Countries);

  useEffect(() => {
    // if (status === 'Not Fetched') {
    dispatch(fetchCountriesData());
    // }
  }, []);

  const worldMap = getMapUrl('world');

  return (
    <>
      <div className="header-container">
        <div className="ouline-left">
          <AiOutlineLeft />
          <h3>2022</h3>
        </div>
        <h4 className="center-title">Most Views</h4>
        <div className="header-buttons">
          <button type="button" className="microphone" label="microphone"><GrMicrophone /></button>
          <button type="button" className="settings" label="Settings"><FiSettings /></button>
        </div>
      </div>
      { status === 'success' && (
      <>
        <div className="firts-card">
          <div className="map-container">
            <img src={worldMap} alt="World Map" className="map" />
          </div>
          <div>
            <h1>Daily Statistics</h1>
            <h2>{data[32].name.toUpperCase()}</h2>
            <p>
              {`${data[32].confirm} new infections`}
            </p>
          </div>
        </div>
        <div className="stast">
          STATS BY COUNTRY
        </div>
        <div className="countries-container">
          <CountriesList countries={data} />
        </div>
      </>
      )}
    </>
  );
};

export default HomePage;
