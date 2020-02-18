import React from 'react';
import { connect } from 'react-redux';
import Results from '../../components/Results/Results';

const ResultConnected = ({
  pinnedResults,
}) => (
  <Results pinnedResults={pinnedResults} />
);

const mapStateToProps = (state) => ({
  pinnedResults: state.airQuality.pinnedResults
});


export default connect(mapStateToProps)(ResultConnected);