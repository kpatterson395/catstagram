// import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LoadingPage from './components/LoadingPage';




ReactDOM.render(
	<Provider store ={store}>
		<PersistGate loading={<LoadingPage/>} persistor={persistor}>
			<BrowserRouter basename={process.env.PUBLIC_URL || ''}>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>, 
	document.getElementById('root'));




