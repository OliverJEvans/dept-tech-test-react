import { createStore, combineReducers } from "redux";
import AirQualityRedux from '../redux/reducers/airQualityRedux'

const rootReducers = combineReducers({
  airQuality: AirQualityRedux,
});

const store = createStore(rootReducers);

export default store;