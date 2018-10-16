
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './firebase/firebase'; 


const store = createStore(rootReducer, 
	compose (

		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig)
	)
)


ReactDOM.render(
	<Provider store ={store}>
		<BrowserRouter basename={process.env.PUBLIC_URL || ''}>
			<App />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root'));




