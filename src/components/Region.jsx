import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

function RegionItem(prop) {
  const { country } = prop;
  return (
    <div className="stats-container">
      <div className="odd">
        <h3>Source</h3>
        <div className="views">
          <p>{country[0].source}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Today Confirmed</h3>
        <div className="views">
          <p>{country[0].today_confirmed}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Today deaths</h3>
        <div className="views">
          <p>{country[0].today_deaths}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Today new deaths</h3>
        <div className="views">
          <p>{country[0].today_new_deaths}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Today new open cases</h3>
        <div className="views">
          <p>{country[0].today_new_open_cases}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Today new recovered</h3>
        <div className="views">
          <p>{country[0].today_new_recovered}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Today open cases</h3>
        <div className="views">
          <p>{country[0].today_open_cases}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Today recovered</h3>
        <div className="views">
          <p>{country[0].today_recovered}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Today vs yesterday confirmed</h3>
        <div className="views">
          <p>{country[0].today_vs_yesterday_confirmed}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Today vs yesterday deaths</h3>
        <div className="views">
          <p>{country[0].today_vs_yesterday_deaths}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Today vs yesterday open cases</h3>
        <div className="views">
          <p>{country[0].today_vs_yesterday_open_cases}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Today vs yesterday recovered</h3>
        <div className="views">
          <p>{country[0].today_vs_yesterday_recovered}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Yesterday confirmed</h3>
        <div className="views">
          <p>{country[0].yesterday_confirmed}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Yesterday deaths</h3>
        <div className="views">
          <p>{country[0].yesterday_deaths}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="odd">
        <h3>Yesterday open cases</h3>
        <div className="views">
          <p>{country[0].yesterday_open_cases}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
      <div className="even">
        <h3>Yesterday recovered</h3>
        <div className="views">
          <p>{country[0].yesterday_recovered}</p>
          <button type="button" className="arrow-right" label="Arrow rigth"><BsArrowRightCircle /></button>
        </div>
      </div>
    </div>
  );
}

export default RegionItem;
