import axios from 'axios';

export const getQualityRequest = () => ({
  type: 'GET_QUALITY_REQUEST',
});

export const getQualitySuccess = (result) => ({
  type: 'GET_QUALITY_SUCCESS',
  result,
});

export const getQualityFailure = (error) => ({
  type: 'GET_QUALITY_FAILURE',
  error,
});

export const getQuality = (value) => (dispatch) => {
  dispatch(getQualityRequest());

  axios.get(`https://api.openaq.org/v1/latest?country=GB&city=${value.name}&order_by=date&sort=desc`)
    .then((response) => {
      const mostRecent = response.data.results[0];
      dispatch(getQualitySuccess(mostRecent));
    })
    .catch((error) => {
      dispatch(getQualityFailure(error.message));
    });
};
