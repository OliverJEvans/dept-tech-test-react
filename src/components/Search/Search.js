import React from 'react';
import clsx from 'clsx';
import './Search.scss';

const Search = ({
  cities,
  filterCities,
}) => {
  return (
  <>
    <div className={clsx({
      "search__wrapper": true,
      "search__wrapper--open": true,
    })}>
      <div className="input__wrapper">
        <input
          type="search"
          className="input"
          placeholder="Enter city name..."
          onChange={filterCities}
        />
      </div>
      <ul className="search__results">
        {cities.map((city) => (
          <li key={city.name}>
            <button>{city.name}</button>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
};

export default Search;