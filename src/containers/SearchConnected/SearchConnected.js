import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search';
import { getCities } from '../../redux/actions/citiesAction';
import { getQuality } from '../../redux/actions/airQualityAction';
import { SET_SEARCHED_CITY } from '../../redux/reducers/airQualityRedux';

const SearchConnected = ({
  fetchCities,
  filteredCities,
  filterCities,
  searchedCity,
  pinLocation,
}) => {
  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  return (
    <Search
      cities={filteredCities}
      handleChange={filterCities}
      searchedCity={searchedCity}
      handleClick={pinLocation}
    />
  );
};

const citiesFilter = (state) => state.airQuality.cities.filter((city) => (
  city.name.toUpperCase().includes(state.airQuality.searchedCity.toUpperCase())
));

const mapStateToProps = (state) => ({
  filteredCities: citiesFilter(state),
  searchedCity: state.airQuality.searchedCity,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCities: () => {
    dispatch(getCities());
  },
  filterCities: (e) => {
    dispatch({
      type: SET_SEARCHED_CITY,
      value: e.target.value,
    });
  },
  pinLocation: (value) => {
    dispatch(getQuality(value));
  },
});

SearchConnected.defaultProps = {
  filteredCities: [],
  searchedCity: '',
};

SearchConnected.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  filteredCities: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string,
      name: PropTypes.string.isRequired,
      city: PropTypes.string,
      count: PropTypes.number,
      locations: PropTypes.number,
    }).isRequired,
  ),
  filterCities: PropTypes.func.isRequired,
  searchedCity: PropTypes.string,
  pinLocation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchConnected);
