// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import '../assets/stylesheets/application.scss';

import ActiveCityReducer from './reducers/active_city_reducer';
import citiesReducer from './reducers/cities_reducer'
// State and reducers
const reducers = combineReducers({
  cities: citiesReducer,
  activeCity: ActiveCityReducer
});

import App from './components/app';
import activeCityReducer from './reducers/active_city_reducer';
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
