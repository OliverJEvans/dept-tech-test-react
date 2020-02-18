import React from 'react';

const Results = ({
  pinnedResults
}) => (
  <>
    <h1>Results</h1>
    <ul>
      {pinnedResults.map((location) => (
        <li>Result</li>
      ))}
    </ul>
  </>
);

export default Results;