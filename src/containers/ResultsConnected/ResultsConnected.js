import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Results from '../../components/Results/Results';
import { REMOVE_PINNED_LOCATION } from '../../redux/reducers/airQualityRedux';

const ResultConnected = ({
  pinnedResults,
  unPinResult,
  loadingPinnedResults,
}) => (
  <Results
    pinnedResults={pinnedResults}
    handleClose={unPinResult}
    loadingPinnedResults={loadingPinnedResults}
  />
);

const mapStateToProps = (state) => ({
  pinnedResults: state.airQuality.pinnedResults,
  loadingPinnedResults: state.airQuality.loadingPinnedResults,
});

const mapDispatchToProps = (dispatch) => ({
  unPinResult: (result) => dispatch({
    type: REMOVE_PINNED_LOCATION,
    result,
  }),
});

ResultConnected.defaultProps = {
  pinnedResults: [],
  loadingPinnedResults: false,
};

ResultConnected.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pinnedResults: PropTypes.array,
  unPinResult: PropTypes.func.isRequired,
  loadingPinnedResults: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultConnected);
