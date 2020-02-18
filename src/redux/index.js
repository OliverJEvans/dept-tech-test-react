import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import AirQualityRedux from './reducers/airQualityRedux';

const rootReducers = combineReducers({
  airQuality: AirQualityRedux,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

export default store;
