import React from 'react';
import './Results.scss';

const Results = ({
  pinnedResults
}) => (
  <>
    <h1>Results</h1>
    <ul>
      {pinnedResults.map((location) => (
        <li key="uniqueKey">Result</li>
      ))}
    </ul>
  </>
);

export default Results;