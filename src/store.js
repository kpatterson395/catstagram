import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {
  photos: [],
  comments: {42430203411: ["this is awesome"]}
};

const store = createStore(rootReducer, 
						defaultState, 
						composeEnhancers(applyMiddleware(thunk)))

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

