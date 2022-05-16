import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './Countries/Countries';
import regionReducer from '../pages/CountriesPage';

const rootReducer = combineReducers({
  Countries: countriesReducer,
  Region: regionReducer,
});

const store = createStore(
  rootReducer, applyMiddleware(thunk, logger),
);

export default store;
