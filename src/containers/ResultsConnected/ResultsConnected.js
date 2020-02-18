import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Results from '../../components/Results/Results';

const ResultConnected = ({
  pinnedResults,
}) => (
  <Results pinnedResults={pinnedResults} />
);

const mapStateToProps = (state) => ({
  pinnedResults: state.airQuality.pinnedResults,
});

ResultConnected.defaultProps = {
  pinnedResults: [],
};

ResultConnected.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pinnedResults: PropTypes.array,
};

export default connect(mapStateToProps)(ResultConnected);
