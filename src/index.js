import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { store, persistor } from './store';




ReactDOM.render(
	<Provider store ={store}>
			<BrowserRouter basename={process.env.PUBLIC_URL || ''}>
				<App />
			</BrowserRouter>
	</Provider>, 
	document.getElementById('root'));




