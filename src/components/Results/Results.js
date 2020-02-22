import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Results.scss';

const Results = ({
  pinnedResults,
  handleClose,
}) => {
  const earliestDate = (measurements) => {
    // eslint-disable-next-line max-len
    const earliestMeasurement = measurements.reduce((r, o) => (o.lastUpdated < r.lastUpdated ? o : r));
    const date = moment(earliestMeasurement.lastUpdated).fromNow();
    return date;
  };

  return (
    <ul className="results">
      {pinnedResults.map((result) => (
        <li className="results__item" key={result.city}>
          <div className="item">
            <p className="timestamp">
              updated
              {' '}
              {earliestDate(result.measurements)}
            </p>
            <h2>{result.location}</h2>
            <p>
              {'in '}
              {result.city}
              {', '}
              {result.country}
            </p>
            <p>
              <strong>
                Values:
                {' '}
                <span className="measurements">
                  {result.measurements.map((measurement, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span className="measurements__item" key={index}>
                      {(measurement.parameter).toUpperCase()}
                      {': '}
                      {measurement.value}
                      {(index !== result.measurements.length - 1) && (
                        ', '
                      )}
                    </span>
                  ))}
                </span>
              </strong>
            </p>
            <button
              type="button"
              className="closeBtn"
              onClick={() => handleClose(result)}
            >
              <span>Close</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

Results.defaultProps = {
  pinnedResults: [],
};

Results.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pinnedResults: PropTypes.array,
  handleClose: PropTypes.func.isRequired,
};

export default Results;
