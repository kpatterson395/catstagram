import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from './firebase/firebase'; 


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {
  photos: [],
  comments: {42430203411: ["this is awesome"]}
};

const store = createStore(rootReducer, 
						defaultState, 
						compose (applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
								reduxFirestore(firebase),
								reactReduxFirebase(firebase) )
						)

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


