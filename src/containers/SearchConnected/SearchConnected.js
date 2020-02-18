import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search';
import { getCities } from '../../redux/actions/citiesAction';
import { SET_SEARCHED_CITY } from '../../redux/reducers/airQualityRedux';

const SearchConnected = ({
  fetchCities,
  filteredCities,
  filterCities,
  searchedCity,
}) => {
  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  return (
    <Search
      cities={filteredCities}
      handleChange={filterCities}
      searchedCity={searchedCity}
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
});

SearchConnected.defaultProps = {
  filteredCities: [],
  searchedCity: '',
};

SearchConnected.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  filteredCities: PropTypes.array,
  filterCities: PropTypes.func.isRequired,
  searchedCity: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchConnected);
