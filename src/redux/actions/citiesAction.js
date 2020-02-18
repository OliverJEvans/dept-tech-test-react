import axios from 'axios';

export const getCitiesRequest = () => ({
  type: 'GET_CITIES_REQUEST',
});

export const getCitiesSuccess = (cities) => ({
  type: 'GET_CITIES_SUCCESS',
  cities,
});

export const getCitiesFailure = (error) => ({
  type: 'GET_CITIES_FAILURE',
  error,
});

export const getCities = () => (dispatch) => {
  dispatch(getCitiesRequest());

  axios.get('https://api.openaq.org/v1/cities?country=GB')
    .then((response) => {
      dispatch(getCitiesSuccess(response.data.results));
    })
    .catch((error) => {
      dispatch(getCitiesFailure(error.message));
    });
};

