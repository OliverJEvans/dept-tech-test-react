export const GET_CITIES_REQUEST = 'GET_CITIES_REQUEST';
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
export const GET_CITIES_FAILURE = 'GET_CITIES_FAILURE';
export const SET_SEARCHED_CITY = 'SET_SEARCHED_CITY';

const DEFAULT_STATE = {
  loadingCities: false,
  error: '',
  cities: [],
  pinnedResults: [{}],
  searchedCity: '',
};

export default function WeatherRedux(state, action) {
  if (!state) {
    return DEFAULT_STATE;
  }

  switch (action.type) {
    case GET_CITIES_REQUEST:
      return {
        ...state,
      };
    case GET_CITIES_FAILURE:
      return {
        ...state,
      };
    case GET_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.cities,
      };
    case SET_SEARCHED_CITY:
      return {
        ...state,
        searchedCity: action.value,
      };
    default:
      return state;
  }
}
