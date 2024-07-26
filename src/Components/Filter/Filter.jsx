import { FiSearch } from 'react-icons/fi';
import './Filter.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { findCountry, setCountry, setRegion } from '../../Redux/countrySlice';
import axios from 'axios';

function Filter({ isDarkMode }) {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegionState] = useState('Filter by Region');
  const regions = ['All Regions', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const handleDropdownClick = (region) => {
    setSelectedRegionState(region);
    dispatch(setRegion(region === 'All Regions' ? null : region));
    setIsDropdownOpen(false);
  };
    const [name, setName] = useState('')

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get('https://restcountries.com/v2/all');
  //       console.log('====================================');
  //       console.log(response.data);
  //       console.log('====================================');
  //       dispatch(setCountry(response.data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, [name]);


  return (
    <div className={`filter ${isDarkMode ? 'dark' : ''}`}>
      <div className="input_container">
        <FiSearch size={20} />
        <input
          className={`filter__search ${isDarkMode ? 'dark' : ''}`}
          placeholder="Search for a country..."
          onChange={(e) => {setName(e.target.value),   dispatch(findCountry(e.target.value))}}
        />
      </div>
      <div className="filter__dropdown">
        <button
          className={`filter__dropdown-toggle ${isDropdownOpen ? 'filter__dropdown-toggle-down' : ''} ${isDarkMode ? 'dark' : ''}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedRegion}
        </button>
        {isDropdownOpen && (
          <ul className={`filter__list ${isDarkMode ? 'dark' : ''}`}>
            {regions.map((region) => (
              <li
                key={region}
                className={`filter__list-item ${isDarkMode ? 'dark' : ''}`}
                onClick={() => handleDropdownClick(region)}
              >
                {region}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Filter;
