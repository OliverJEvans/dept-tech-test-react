import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../../components/Search/Search';
import { getCities } from '../../redux/actions/citiesAction';

const SearchConnected = ({
  fetchCities,
  cities
}) => {
  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  return (
    <Search cities={cities} />
  );
};

const mapStateToProps = (state) => ({
  cities: state.airQuality.cities,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCities: () => {
    dispatch(getCities());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchConnected);