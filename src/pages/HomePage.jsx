import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountriesData } from '../Redux/Countries/Countries';

const HomePage = () => {
  const dispatch = useDispatch();
  const Countries = useSelector((state) => state.Countries);
  useEffect(() => {
    if (Countries.length <= 0) {
      dispatch(fetchCountriesData('Spain'));
    }
  }, []);
};

export default HomePage;
