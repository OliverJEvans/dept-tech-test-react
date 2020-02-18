import React from 'react';
import clsx from 'clsx';
import './Search.scss';

const Search = ({
  cities,
  handleChange,
  searchedCity,
}) => {
  return (
  <>
    <div className={clsx({
      "search__wrapper": true,
      "search__wrapper--open": searchedCity !== '',
    })}>
      <div className="input__wrapper">
        <input
          type="search"
          className="input"
          placeholder="Enter city name..."
          onChange={handleChange}
        />
      </div>
      {searchedCity !== '' && (
        <ul className="search__results">
          {cities.map((city) => (
            <li key={city.name}>
              <button>{city.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </>
  );
};

export default Search;