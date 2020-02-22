import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Results from '../../components/Results/Results';
import { REMOVE_PINNED_LOCATION } from '../../redux/reducers/airQualityRedux';

const ResultConnected = ({
  pinnedResults,
  unPinResult,
}) => (
  <Results pinnedResults={pinnedResults} handleClose={unPinResult} />
);

const mapStateToProps = (state) => ({
  pinnedResults: state.airQuality.pinnedResults,
});

const mapDispatchToProps = (dispatch) => ({
  unPinResult: (result) => dispatch({
    type: REMOVE_PINNED_LOCATION,
    result,
  }),
});

ResultConnected.defaultProps = {
  pinnedResults: [],
};

ResultConnected.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pinnedResults: PropTypes.array,
  unPinResult: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultConnected);
