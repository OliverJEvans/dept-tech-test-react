export const GET_CITIES_REQUEST = 'GET_CITIES_REQUEST';
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
export const GET_CITIES_FAILURE = 'GET_CITIES_FAILURE';
export const SET_SEARCHED_CITY = 'SET_SEARCHED_CITY';
export const GET_QUALITY_REQUEST = 'GET_QUALITY_REQUEST';
export const GET_QUALITY_SUCCESS = 'GET_QUALITY_SUCCESS';
export const GET_QUALITY_FAILURE = 'GET_QUALITY_FAILURE';
export const REMOVE_PINNED_LOCATION = 'REMOVE_PINNED_LOCATION';

const DEFAULT_STATE = {
  loadingCities: false,
  error: '',
  cities: [],
  pinnedResults: [],
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
    case GET_QUALITY_REQUEST:
      return {
        ...state,
      };
    case GET_QUALITY_FAILURE:
      return {
        ...state,
      };
    case GET_QUALITY_SUCCESS:
      return {
        ...state,
        pinnedResults: [...state.pinnedResults, action.result],
      };
    case REMOVE_PINNED_LOCATION:
      return {
        ...state,
        pinnedResults: [
          ...state.pinnedResults.slice(0, state.pinnedResults.indexOf(action.result)),
          ...state.pinnedResults.slice(state.pinnedResults.indexOf(action.result) + 1),
        ],
      };
    default:
      return state;
  }
}
