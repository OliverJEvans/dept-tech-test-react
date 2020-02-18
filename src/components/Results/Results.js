import React from 'react';
import PropTypes from 'prop-types';
import './Results.scss';

const Results = ({
  pinnedResults,
}) => (
  <>
    <h1>Results</h1>
    <ul>
      {pinnedResults.map(() => (
        <li key="uniqueKey">Result</li>
      ))}
    </ul>
  </>
);

Results.defaultProps = {
  pinnedResults: [],
};

Results.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pinnedResults: PropTypes.array,
};

export default Results;
