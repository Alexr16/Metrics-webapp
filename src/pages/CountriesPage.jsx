import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMapUrl } from '../Utilities/Map';
import Region from '../components/Region';
import Header from '../components/Header';

const CountriesPage = () => {
  const { status, data } = useSelector((state) => state.Countries);
  let { name } = useParams();
  const info = data.filter(((country) => (country.id === name)));
  console.log(status);
  const image = getMapUrl(name);
  name = name.replace(/_/g, ' ');

  return (
    <>
      <Header />
      <div>
        <div className="firts-card">
          <div className="map-container">
            <img src={image} alt="Country" className="map" />
          </div>
          <div>
            <h2>{name.toUpperCase()}</h2>
            <p>
              {`${info[0].confirm} new infections`}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>Country Stats</div>
        <Region country={info[0].data} />
      </div>
    </>
  );
};

export default CountriesPage;
