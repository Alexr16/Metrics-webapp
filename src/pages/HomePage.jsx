import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { IoMdMic } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLeft } from 'react-icons/ai';
// import { fetchCountriesData } from '../Redux/Countries/Countries';
import './HomePage.scss';
import { getMapUrl } from '../Utilities/Map';
import CountriesList from '../components/CountriesList';

const HomePage = () => {
  // const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.Countries);
  const [search, setSearch] = useState(data);

  useEffect(() => {
    // if (status === 'Not Fetched') {
    //   dispatch(fetchCountriesData());
    // }
    setSearch(data);
  }, [data]);

  const filterData = (e) => {
    const string = e.target.value.toLowerCase();
    const info = data.filter((country) => country.id.includes(string));
    //   (country.id === string)));
    if (info !== 0) {
      setSearch(info);
    } else {
      setSearch(data);
    }
  };

  const worldMap = getMapUrl('world');

  return (
    <>
      <div className="header-container">
        <div className="ouline-left">
          <AiOutlineLeft />
          <h3>2022</h3>
        </div>
        <h4 className="center-title" data-testid="title">Most Views</h4>
        <div className="header-buttons">
          <button type="button" className="microphone" label="microphone"><IoMdMic /></button>
          <button type="button" className="settings" label="Settings" title="settings"><FiSettings /></button>
        </div>
      </div>
      { status === 'success' && (
      <>
        <div className="firts-card">
          <div className="map-container">
            <img src={worldMap} alt="World Map" className="map" />
          </div>
          <div>
            <h1>DAILY STATISTICS</h1>
            <h2>COVID-19 </h2>
            <p>Confirm Cases</p>
            <input className="input" type="text" name="search" onChange={filterData} placeholder="Country Name" />
          </div>
        </div>
        <div className="stast">
          STATS BY COUNTRY
        </div>
        <div>
          { search === ''
            ? (
              <div className="countries-container">
                <CountriesList countries={data} />
              </div>
            ) : (<CountriesList countries={search} />)}
        </div>
      </>
      )}
    </>
  );
};

export default HomePage;
