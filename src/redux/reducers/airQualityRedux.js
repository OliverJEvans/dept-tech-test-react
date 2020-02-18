
export const GET_CITIES_REQUEST = 'GET_CITIES_REQUEST';
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
export const GET_CITIES_FAILURE = 'GET_CITIES_FAILURE';

const DEFAULT_STATE = {
  loading: false,
  error: '',
  cities: [],
  pinnedResults: [{}],
};

export default function WeatherRedux(state, action) {
  if (!state) {
    return DEFAULT_STATE;
  }

  switch (action.type) {
    case GET_CITIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        cities: action.cities,
      };
    default:
      return state;
  }
}