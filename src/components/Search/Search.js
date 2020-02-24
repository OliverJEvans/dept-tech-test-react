import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = ({
  cities,
  handleChange,
  searchedCity,
  handleClick,
}) => (
  <>
    <div className={clsx({
      search__wrapper: true,
      'search__wrapper--open': searchedCity !== '',
    })}
    >
      <div className="input__wrapper">
        <label htmlFor="city-search">
          <span className="visually-hidden">City name:</span>
          <input
            id="city-search"
            type="search"
            className="input"
            placeholder="Enter city name..."
            onChange={handleChange}
          />
        </label>
      </div>
      {searchedCity !== '' && (
        <ul className="search__results">
          {cities.map((city) => (
            <li key={city.name}>
              <button type="button" onClick={() => handleClick(city)}>{city.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </>
);

Search.defaultProps = {
  cities: [],
  searchedCity: '',
};

Search.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string,
      name: PropTypes.string.isRequired,
      city: PropTypes.string,
      count: PropTypes.number,
      locations: PropTypes.number,
    }).isRequired,
  ),
  searchedCity: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Search;
