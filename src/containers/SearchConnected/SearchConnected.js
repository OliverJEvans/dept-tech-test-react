import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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

const citiesFilter = (state) => {
  return state.airQuality.cities.filter(city => (
    city.name.toUpperCase().includes(state.airQuality.searchedCity.toUpperCase())
  ));
}

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
      value: e.target.value
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchConnected);