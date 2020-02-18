import React from 'react';

const Search = ({
  cities
}) => (
  <>
    <h1>Search</h1>
    <ul>
      {cities.map((city) => (
        <li>{city.name}</li>
      ))}
    </ul>
  </>
);

export default Search;