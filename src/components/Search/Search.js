import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = ({
  cities,
  handleChange,
  searchedCity,
}) => (
  <>
    <div className={clsx({
      search__wrapper: true,
      'search__wrapper--open': searchedCity !== '',
    })}
    >
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
              <button type="submit">{city.name}</button>
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
  // eslint-disable-next-line react/forbid-prop-types
  cities: PropTypes.array,
  searchedCity: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Search;
