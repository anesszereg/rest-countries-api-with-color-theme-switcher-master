import React, { useEffect } from 'react';
import Card from '../Card/Card';
import './CardList.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry } from '../../Redux/countrySlice';

function CardList({ isDarkMode }) {
  const dispatch = useDispatch();
  const flags = useSelector((state) => state.country.country);
  const selectedRegion = useSelector((state) => state.country.selectedRegion);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        console.log('====================================');
        console.log(response.data);
        console.log('====================================');
        dispatch(setCountry(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <main className={`flag-list ${isDarkMode ? 'dark' : ''}`}>
      <div className="flag-list__container">
        {flags
          .filter((flag) => selectedRegion === null || flag.region === selectedRegion)
          .map(({ name, population, region, capital, flag: image }) => (
            <Card
              key={name}
              name={name}
              population={population}
              region={region}
              capital={capital}
              image={image}
            />
          ))}
      </div>
    </main>
  );
}

export default CardList;
